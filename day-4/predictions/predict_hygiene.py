import pandas as pd
import joblib

# Load the trained model
model = joblib.load(
    "day-4/models/logistic_regression.joblib"
)

# New facility data
new_facility = pd.DataFrame([{
    "cleanliness_score": 4,
    "odor_score": 8,
    "footfall": 200,
    "complaints": 15,
    "hours_since_cleaning": 40
}])

# Predict hygiene risk
prediction = model.predict(new_facility)[0]

print("New Facility Details:")
print(new_facility)

print("\nPredicted Hygiene Risk:", prediction)