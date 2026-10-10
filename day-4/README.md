# Day 4 - Machine Learning

## Objective
Understand Machine Learning concepts and build a model to predict facility hygiene risk.

## Dataset
The project uses a facility inspection dataset with 20 records.

Features include:
- Cleanliness Score
- Odor Score
- Waste Level
- Water Availability
- Footfall
- Complaints
- Inspection Date

## Preprocessing
- Loaded the dataset using Pandas.
- Created the `hours_since_cleaning` feature.
- Generated practice hygiene-risk labels using predefined rules.
- Prepared the features and target for model training.

## Machine Learning Algorithms
Two classification algorithms were implemented:
1. Logistic Regression
2. Decision Tree

## Model Evaluation
The models were evaluated using:
- Accuracy
- Precision
- Recall
- F1 Score
- Confusion Matrix

Both models achieved 100% on the current test split.

Note: The dataset is small and labels were generated using predefined rules. These results do not demonstrate real-world predictive performance.

## Prediction
The trained Logistic Regression model predicts a hygiene-risk category for a new facility record.

Example prediction:
High

## Project Structure

day-4/
- dataset/
- preprocessing/
- models/
- evaluation/
- predictions/
- README.md

## Technologies Used
- Python
- Pandas
- NumPy
- Scikit-learn
- Joblib

## How to Run

Install dependencies:

    python -m pip install pandas numpy scikit-learn joblib

Prepare the dataset:

    python day-4/preprocessing/prepare_data.py

Train and compare models:

    python day-4/models/train_models.py

Run a prediction:

    python day-4/predictions/predict_hygiene.py

## Learning Outcomes
- Supervised Machine Learning
- Feature Engineering
- Train/Test Split
- Classification Algorithms
- Model Evaluation
- Making Predictions

## Limitations
This is a learning project using a small, rule-labeled dataset. Real-world use would require representative inspection data and independent validation.
 
## Final Day 4 structure

day-4/
├── dataset/
│   ├── facility_inspection.csv
│   └── prepared_facility_data.csv
├── preprocessing/
│   └── prepare_data.py
├── models/
│   ├── train_models.py
│   ├── logistic_regression.joblib
│   └── decision_tree.joblib
├── evaluation/
│   ├── model_comparison.csv
│   └── best_model.txt
├── predictions/
│   └── predict_hygiene.py
└── README.md