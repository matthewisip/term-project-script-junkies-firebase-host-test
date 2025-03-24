import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder

# Load Dataset
data = pd.read_csv("mlb_2024_filtered_data.csv")

# Set relevant columns
columns = ['pitch_type', 'balls', 'strikes', 'events', 'batter']
df = data[columns].dropna()

# Define success events
df['success'] = df['events'].apply(lambda x: 1 if x in [
    'single', 'double', 'triple', 'home_run', 'walk', 'hit_by_pitch'
] else 0)

# Encode pitch_type
pitch_encoder = LabelEncoder()
df['pitch_type'] = pitch_encoder.fit_transform(df['pitch_type'])

# Create pitch sequence features
df['prev_pitch_1'] = df.groupby('batter')['pitch_type'].shift(1)
df['prev_pitch_2'] = df.groupby('batter')['pitch_type'].shift(2)

# Drop rows with NaNs from shift()
df.dropna(inplace=True)

# Define features and target
X = df[['balls', 'strikes', 'pitch_type', 'prev_pitch_1', 'prev_pitch_2']]
y = df['success']

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train RandomForest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save model and encoder
joblib.dump(model, 'model/pitch_success_model.pkl')
joblib.dump(pitch_encoder, 'model/pitch_encoder.pkl')
