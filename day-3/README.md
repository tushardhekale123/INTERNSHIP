# Day 3 - Data Analysis & Python for AI/ML

## Objective

To analyze, clean and visualize a real-world facility inspection dataset using Python, NumPy, Pandas and Matplotlib.

## Dataset

The dataset contains facility inspection information such as:

- Facility ID
- Location
- Cleanliness Score
- Odor Score
- Waste Level
- Water Availability
- Footfall
- Complaints
- Inspection Date

## Data Analysis

The dataset was analyzed using Pandas.

The following operations were performed:

- Dataset inspection
- Filtering by location
- Sorting by footfall
- Grouping by location
- Average footfall calculation
- Missing value detection
- Duplicate record detection
- Basic statistical analysis
- Outlier detection using IQR

## Data Cleaning

The dataset was cleaned by:

- Checking missing values
- Removing duplicate records
- Handling missing numeric values using median
- Handling missing text values using "Unknown"
- Saving the cleaned dataset

## Visualizations

The following visualizations were created:

1. Average Footfall by Location
2. Average Complaints by Location
3. Cleanliness Score Histogram
4. Footfall vs Complaints Scatter Plot
5. Waste Level Distribution

## Project Structure

```text
day-3/
├── dataset/
│   ├── facility_inspection.csv
│   └── cleaned_facility_inspection.csv
├── data-cleaning/
│   └── data_cleaning.py
├── analysis/
│   └── data_analysis.py
├── visualizations/
│   ├── visualizations.py
│   ├── average_footfall_by_location.png
│   ├── average_complaints_by_location.png
│   ├── cleanliness_histogram.png
│   ├── footfall_vs_complaints.png
│   └── waste_level_distribution.png
└── README.md