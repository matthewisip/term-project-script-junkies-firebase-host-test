from flask import Flask, request, jsonify
import joblib
import pandas as pd

app = Flask(__name__)

# Load model and encoder on startup
model = joblib.load('model/pitch_success_model.pkl')
pitch_encoder = joblib.load('model/pitch_encoder.pkl')


def predict_next_pitch_success(balls, strikes, prev_pitches):
    prev_pitches_encoded = pitch_encoder.transform(prev_pitches)
    pitch_types = pitch_encoder.classes_
    success_rates = {}

    for pitch in pitch_types:
        pitch_encoded = pitch_encoder.transform([pitch])[0]

        X_input = pd.DataFrame([[balls, strikes, pitch_encoded,
                                 prev_pitches_encoded[0], prev_pitches_encoded[1]]],
                               columns=['balls', 'strikes', 'pitch_type', 'prev_pitch_1', 'prev_pitch_2'])

        # Predict probability of success
        success_prob = model.predict_proba(X_input)[0][1]
        success_rates[pitch] = round(success_prob * 100, 2)

    return success_rates


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        balls = data['balls']
        strikes = data['strikes']
        prev_pitches = data['prev_pitches']

        if not isinstance(prev_pitches, list) or len(prev_pitches) != 2:
            return jsonify({'error': 'prev_pitches must be a list of exactly 2 pitch types'}), 400

        result = predict_next_pitch_success(balls, strikes, prev_pitches)
        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
