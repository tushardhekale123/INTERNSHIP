import pandas as pd

# Load dataset
data = pd.read_csv("day-4/dataset/facility_inspection.csv")

# Feature engineering: hours since cleaning
data["hours_since_cleaning"] = (
    data["odor_score"] * 3
    + data["waste_level"].map({
        "Low": 2,
        "Medium": 8,
        "High": 16
    })
)

# Create practice target labels
# This is a rule-based label, not a real inspection outcome.
data["hygiene_risk"] = (
    (data["cleanliness_score"] <= 5)
    | (data["odor_score"] >= 7)
    | (data["waste_level"] == "High")
    | (data["complaints"] >= 12)
).map({True: "High", False: "Low"})

# Select features and target
features = [
    "cleanliness_score",
    "odor_score",
    "footfall",
    "complaints",
    "hours_since_cleaning"
]

X = data[features]
y = data["hygiene_risk"]

# Save prepared dataset
prepared = X.copy()
prepared["hygiene_risk"] = y
prepared.to_csv("day-4/dataset/prepared_facility_data.csv", index=False)

print("Prepared dataset created successfully!")
print("\nHygiene Risk Distribution:")
print(y.value_counts())

print("\nPrepared Dataset Preview:")
print(prepared.head())