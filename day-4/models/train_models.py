import pandas as pd
import json
import joblib

from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report
)

# Load prepared dataset
data = pd.read_csv("day-4/dataset/prepared_facility_data.csv")

features = [
    "cleanliness_score",
    "odor_score",
    "footfall",
    "complaints",
    "hours_since_cleaning"
]

X = data[features]
y = data["hygiene_risk"]

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.30,
    random_state=42,
    stratify=y
)

# Define two algorithms
models = {
    "Logistic Regression": make_pipeline(
        StandardScaler(),
        LogisticRegression(max_iter=1000, random_state=42)
    ),
    "Decision Tree": DecisionTreeClassifier(
        max_depth=3,
        random_state=42
    )
}

results = []
best_model_name = None
best_model = None
best_f1 = -1

for name, model in models.items():
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)
    precision = precision_score(
        y_test, predictions, pos_label="High", zero_division=0
    )
    recall = recall_score(
        y_test, predictions, pos_label="High", zero_division=0
    )
    f1 = f1_score(
        y_test, predictions, pos_label="High", zero_division=0
    )

    print(f"\n--- {name} ---")
    print("Accuracy:", round(accuracy, 3))
    print("Precision:", round(precision, 3))
    print("Recall:", round(recall, 3))
    print("F1 Score:", round(f1, 3))
    print("Confusion Matrix:")
    print(confusion_matrix(y_test, predictions, labels=["Low", "High"]))
    print("\nClassification Report:")
    print(classification_report(y_test, predictions, zero_division=0))

    results.append({
        "model": name,
        "accuracy": accuracy,
        "precision": precision,
        "recall": recall,
        "f1_score": f1
    })

    if f1 > best_f1:
        best_f1 = f1
        best_model_name = name
        best_model = model

    # Save each trained model
    filename = name.lower().replace(" ", "_") + ".joblib"
    joblib.dump(model, f"day-4/models/{filename}")

# Save evaluation results
results_df = pd.DataFrame(results)
results_df.to_csv("day-4/evaluation/model_comparison.csv", index=False)

# Save best model information
with open("day-4/evaluation/best_model.txt", "w") as file:
    file.write(f"Best model by test F1 score: {best_model_name}\n")
    file.write(f"F1 score: {best_f1:.3f}\n")

print("\n--- MODEL COMPARISON ---")
print(results_df.to_string(index=False))
print("\nBest model by test F1 score:", best_model_name)
print("Models and evaluation results saved successfully!")