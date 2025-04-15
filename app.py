from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Load model and encoder on startup
script_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(script_dir, 'model', 'pitch_success_model.pkl')
encoder_path = os.path.join(script_dir, 'model', 'pitch_encoder.pkl')

model = joblib.load(model_path)
pitch_encoder = joblib.load(encoder_path)


def predict_next_pitch_success(balls, strikes, prev_pitches):
    pitch_types = pitch_encoder.classes_
    success_rates = {}

    for pitch in pitch_types:
        pitch_encoded = pitch_encoder.transform([pitch])[0]

        if len(prev_pitches) >= 2:
            prev_2 = pitch_encoder.transform([prev_pitches[-2]])[0]
        else:
            prev_2 = -1

        if len(prev_pitches) >= 1:
            prev_1 = pitch_encoder.transform([prev_pitches[-1]])[0]
        else:
            prev_1 = -1

        X_input = pd.DataFrame([[balls, strikes, pitch_encoded, prev_2, prev_1]],
                               columns=['balls', 'strikes', 'pitch_type', 'prev_pitch_1', 'prev_pitch_2'])

        success_prob = model.predict_proba(X_input)[0][1]
        success_rates[pitch] = round(success_prob * 100, 2)

    return success_rates

# Backend Call
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        balls = data['balls']
        strikes = data['strikes']
        prev_pitches = data['prev_pitches']

        if not isinstance(prev_pitches, list) or not all(isinstance(p, str) for p in prev_pitches):
            return jsonify({'error': 'prev_pitches must be a list of strings'}), 400

        result = predict_next_pitch_success(balls, strikes, prev_pitches)
        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

def predict_api(request):
    return app(request)

if __name__ == '__main__':
    app.run(debug=True)
