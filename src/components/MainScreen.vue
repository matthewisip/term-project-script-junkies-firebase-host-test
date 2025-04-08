<template>
    <div class="container" :class="{ minimized: isSidebarMinimized }">
      <div class="sidebar" :class="{ minimized: isSidebarMinimized }" id="sidebar">
        <button @click="toggleSidebar" class="toggle-icon">&laquo;</button>
        <h2>Pitch Input</h2>
        <div class="input-group">
          <label for="batter-handedness">Batter Handedness:</label>
          <select v-model="batterHandedness" id="batter-handedness">
            <option value="R">Right (R)</option>
            <option value="L">Left (L)</option>
          </select>
        </div>
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
        <button @click="getPrediction">Pitch</button>
        <button @click="undoPitch">Undo Last Pitch</button>
      </div>
  
      <div class="content">
        <h1>Batter Success Rates</h1>
        <div class="count">Count: 0-0</div>
        <div class="sequence">Sequence: </div>
  
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
        <div class="previous-scenarios">
          <h3>Scenario</h3>
          <p>{{ previousScenario }}</p>
        </div>
  
        <div id="analysis-results">
          <!--Analysis to be displayed here -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainScreen',
    data() {
      return {
        batterHandedness: 'R',
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
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarMinimized = !this.isSidebarMinimized;
      },
      undoPitch() {
        // Placeholder logic for undo
        alert("Undo functionality not implemented yet.");
      },
      async getPrediction() {
        const balls = 1;
        const strikes = 2;
        const prev_pitches = ["FB", "SL"]; // Replace with dynamic history logic
  
        try {
          const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ balls, strikes, prev_pitches }),
          });
  
          const data = await response.json();
  
          this.successRates.FB = data.FB !== undefined ? data.FB : '--';
          this.successRates.CB = data.CB !== undefined ? data.CB : '--';
          this.successRates.CH = data.CH !== undefined ? data.CH : '--';
          this.successRates.SL = data.SL !== undefined ? data.SL : '--';
        } catch (error) {
          console.error("Prediction fetch failed:", error);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  @import './styles.css';
  </style>
  