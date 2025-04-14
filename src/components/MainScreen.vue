<template>
  <div class="container" :class="{ minimized: isSidebarMinimized }">
    <div class="sidebar" :class="{ minimized: isSidebarMinimized }" id="sidebar">
      <button @click="toggleSidebar" class="toggle-icon">&laquo;</button>
      <h2>Pitch Input</h2>
      <div class="input-group">
        <label for="pitch-type">Pitch Type:</label>
        <select v-model="pitchType" id="pitch-type">
          <option value="FB">Fastball (FB)</option>
          <option value="CB">Curveball (CB)</option>
          <option value="CH">Changeup (CH)</option>
          <option value="SL">Slider (SL)</option>
        </select>
      </div>
      <div class="input-group">
        <label for="pitch-result">Result of Pitch:</label>
        <input v-model="pitchResult" type="text" id="pitch-result" placeholder="Enter result (e.g., Strike, Ball, Hit, Out, Foul)" />
      </div>
      <button @click="handlePitchAndPredict">Pitch</button>
      <button @click="undoLastPitch">Undo Last Pitch</button>
      <button @click="resetAtBat">Reset At Bat</button>
      <button @click="addScenario">Save Current Scenario</button>
    </div>

    <div class="content">
      <h1>Batter Success Rates</h1>
      <div class="count">Count: {{ balls }}-{{ strikes }}</div>
      <div class="sequence">Sequence: {{ sequence.join(' - ') }}</div>

      <div class="stat-box-container">
        <div class="stat-box">
          <h3>Batting %</h3>
          <p>{{ battingPercentage }}%</p>
        </div>
        <div class="stat-box">
          <h3>Slugging %</h3>
          <p>{{ sluggingPercentage }}%</p>
        </div>
        <div class="stat-box">
          <h3>Expected Success %</h3>
          <p>{{ expectedSuccess }}%</p>
        </div>
      </div>

      <div class="success-rates-container">
        <div class="success-box">
          <h4>Fastball Success</h4>
          <p>{{ successRates.FB }}%</p>
        </div>
        <div class="success-box">
          <h4>Curveball Success</h4>
          <p>{{ successRates.CB }}%</p>
        </div>
        <div class="success-box">
          <h4>Changeup Success</h4>
          <p>{{ successRates.CH }}%</p>
        </div>
        <div class="success-box">
          <h4>Slider Success</h4>
          <p>{{ successRates.SL }}%</p>
        </div>
      </div>

      <h2>Previous Scenarios</h2>
      <div class="previous-scenarios-wrapper">
        <div v-if="savedScenarios.length === 0" class="no-scenarios-box">
          <p>No previous scenarios to display.</p>
        </div>
        <div v-else class="scenario-list">
          <div
            v-for="scenario in savedScenarios"
            :key="scenario.id"
            class="scenario-card"
          >
            <h3>Scenario</h3>
            <p><strong>Count:</strong> {{ scenario.count }}</p>
            <p><strong>Sequence:</strong> {{ scenario.sequence }}</p>
            <button @click="loadScenario(scenario)">Load</button>
            <button @click="deleteScenario(scenario.id)">Delete</button>
          </div>
        </div>
      </div>

      <div id="analysis-results">
        <!--Analysis to be displayed here -->
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default {
  name: 'MainScreen',
  data() {
    return {
      pitchType: 'FB',
      pitchResult: '',
      isSidebarMinimized: false,
      successRates: {
        FB: '--',
        CB: '--',
        CH: '--',
        SL: '--',
      },
      battingPercentage: '--',
      sluggingPercentage: '--',
      expectedSuccess: '--',
      previousScenario: '',

      count: '--',
      savedScenarios: [],

      balls: 0,
      strikes: 0,
      sequence: [],
      previousCount: null,
      isNewAtBat: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarMinimized = !this.isSidebarMinimized;
    },
    async handlePitchAndPredict() {
      const resultInput = this.pitchResult.trim().toLowerCase();
      const validResults = ['strike', 'ball', 'hit', 'out', 'foul'];

      if (!validResults.includes(resultInput)) {
        alert('Invalid result. Please enter: Strike, Ball, Hit, Out, Foul');
        this.pitchResult = '';
        return;
      }

      const result = resultInput.charAt(0).toUpperCase() + resultInput.slice(1);

      if (this.isNewAtBat) {
        this.resetAtBat();
        this.isNewAtBat = false;
      }

      this.storePreviousCount();
      this.sequence.push(this.pitchType);
      this.updateSequenceDisplay();

      // 👉 Update count logic
      if (result.toLowerCase() === 'strike') {
        this.strikes++;
        if (this.strikes >= 3) {
          this.updateCountDisplay('strikeout');
          this.isNewAtBat = true;
        } else {
          this.updateCountDisplay();
        }
      } else if (result.toLowerCase() === 'foul') {
        if (this.strikes < 2) {
          this.strikes++;
        }
        this.updateCountDisplay();
      } else if (result.toLowerCase() === 'ball') {
        this.balls++;
        if (this.balls >= 4) {
          this.updateCountDisplay('walk');
          this.isNewAtBat = true;
        } else {
          this.updateCountDisplay();
        }
      } else if (['hit', 'out'].includes(result.toLowerCase())) {
        this.updateCountDisplay();
        this.isNewAtBat = true;
      }

      this.pitchResult = '';
      try {
        const response = await fetch('https://term-project-script-junkies-firebase.onrender.com/predict', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            balls: this.balls,
            strikes: this.strikes,
            prev_pitches: this.sequence
          }),
        });

        const data = await response.json();

        this.successRates.FB = data.FB !== undefined ? data.FB : '--';
        this.successRates.CB = data.CB !== undefined ? data.CB : '--';
        this.successRates.CH = data.CH !== undefined ? data.CH : '--';
        this.successRates.SL = data.SL !== undefined ? data.SL : '--';
      } catch (error) {
        console.error("Prediction fetch failed:", error);
        alert("Failed to reach prediction API.");
      }
    },

    /*
    *    Firebase Related Functions
    */

    async addScenario() {
      const scenario = {
        count: '2-1',
        sequence: 'FB-CB-FB'
      };

      try {
        await addDoc(collection(db, 'scenarios'), scenario);
        this.fetchScenarios();
      } catch (err) {
        console.error('Error adding scenario:', err);
      }
    },
    async fetchScenarios() {
      try {
        const querySnapshot = await getDocs(collection(db, 'scenarios'));
        this.savedScenarios = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Fetched scenarios:', this.savedScenarios);
      } catch (err) {
        console.error('Error fetching scenarios:', err);
      }
    },
    loadScenario(scenario) {
      const [balls, strikes] = scenario.count.split('-').map(Number);
      this.balls = balls;
      this.strikes = strikes;
      this.sequence = Array.isArray(scenario.sequence)
        ? scenario.sequence
        : scenario.sequence.split('-');
      this.previousScenario = `Count: ${scenario.count}, Sequence: ${this.sequence.join(' - ')}`;
    },
    async deleteScenario(id) {
      if (confirm('Are you sure you want to delete this scenario?')) {
        try {
          await deleteDoc(doc(db, 'scenarios', id));
          this.fetchScenarios();
        } catch (err) {
          console.error('Error deleting scenario:', err);
        }
      }
    },

    updateCountDisplay(result = null) {
    if (result === 'strikeout') {
      this.previousScenario = 'Result: K';
    } else if (result === 'walk') {
      this.previousScenario = 'Result: BB';
    } else {
      this.previousScenario = `Count: ${this.balls}-${this.strikes}`;
    }
  },
  updateSequenceDisplay() {
    this.sequenceDisplay = this.sequence.join(' - ');
  },
  resetAtBat() {
    this.balls = 0;
    this.strikes = 0;
    this.sequence = [];
    this.isNewAtBat = true;
    this.previousScenario = '';
  },
  async fetchPrediction(balls, strikes, sequence) {
    try {
      console.log("Fetching prediction for:", { balls, strikes, sequence });

      const response = await fetch('https://term-project-script-junkies-firebase.onrender.com/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          balls,
          strikes,
          prev_pitches: sequence
        })
      });

      const data = await response.json();
      console.log("Prediction response:", data);

      this.successRates = {
        FB: data.FB ?? '--',
        CB: data.CB ?? '--',
        CH: data.CH ?? '--',
        SL: data.SL ?? '--'
      };
    } catch (error) {
      console.error("Prediction fetch failed:", error);
    }
  },
  storePreviousCount() {
    this.previousCount = {
      balls: this.balls,
      strikes: this.strikes
    };
  },
  undoLastPitch() {
    if (this.sequence.length === 0) {
      alert('No pitch to undo!');
      return;
    }
    const removedPitch = this.sequence.pop();
    if (this.previousCount) {
      this.balls = this.previousCount.balls;
      this.strikes = this.previousCount.strikes;
      this.previousCount = null;
    }
    this.updateSequenceDisplay();
    this.updateCountDisplay();
  }
  },

  mounted() {
  this.fetchPrediction(0, 0, []);
  this.fetchScenarios();
}
}
</script>


<style scoped>
@import './styles.css';
</style>
