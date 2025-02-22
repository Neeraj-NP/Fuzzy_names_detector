from flask import Flask, request, jsonify, render_template
from fuzzywuzzy import fuzz
from fuzzywuzzy import process
from jellyfish import soundex  # For phonetic matching
import pandas as pd

app = Flask(__name__)

# Sample dataset (you can replace this with a larger dataset or database connection)
data = {
    'Name': ['Suresh', 'Sooresh', 'Sureeeesh', 'Suresh Kumar', 'Suresh R', 'Sureesh', 'Ramesh', 'Raaaamesh', 'Ram', 'Ram Kumar'],
    'Crime_Type': ['Theft', 'Assault', 'Robbery', 'Theft', 'Assault', 'Robbery', 'Theft', 'Murder', 'Assault', 'Robbery'],
    'Date_of_Crime': ['2023-08-12', '2023-05-19', '2023-07-10', '2022-11-25', '2023-03-03', '2021-10-05', '2022-09-17', '2020-12-22', '2021-04-15', '2021-08-10'],
    'Location': ['Mumbai', 'Delhi', 'Chennai', 'Bangalore', 'Pune', 'Mumbai', 'Delhi', 'Chennai', 'Pune', 'Bangalore'],
    'Case_Status': ['Open', 'Closed', 'Open', 'Closed', 'Open', 'Open', 'Closed', 'Closed', 'Open', 'Closed'],
    'Officer_in_Charge': ['Officer A', 'Officer B', 'Officer C', 'Officer A', 'Officer D', 'Officer E', 'Officer F', 'Officer G', 'Officer H', 'Officer I']
}

# Convert the dataset into a DataFrame
df = pd.DataFrame(data)

# Function to find similar names and return all details
def find_similar_names_and_details(query_name, df, threshold=80):
    if not query_name or not isinstance(query_name, str):
        return []  # Return empty list if query_name is None or not a string

    query_soundex = soundex(query_name)  # Convert the input name to Soundex code
    matched_records = []

    # Iterate through all records in the dataset
    for idx, row in df.iterrows():
        name = row['Name']
        if pd.isnull(name):  # Check if the name is None
            continue  # Skip None values

        name_soundex = soundex(name)

        # First, try phonetic match
        if query_soundex == name_soundex:
            matched_records.append(row)
        else:
            # Fallback to fuzzy matching
            similarity_score = fuzz.ratio(query_name, name)
            if similarity_score >= threshold:
                matched_records.append(row)
    
    return matched_records

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def search():
    query_name = request.args.get('name')  # Get the name query from the URL parameters
    matched_records = find_similar_names_and_details(query_name, df)

    # If there are matched records, return them as a JSON response
    if matched_records:
        results = []
        for record in matched_records:
            results.append({
                'Name': record['Name'],
                'Crime_Type': record['Crime_Type'],
                'Date_of_Crime': record['Date_of_Crime'],
                'Location': record['Location'],
                'Case_Status': record['Case_Status'],
                'Officer_in_Charge': record['Officer_in_Charge']
            })
        return jsonify(results)
    else:
        return jsonify([])  # Return an empty list if no matches are found

if __name__ == '__main__':
    app.run(debug=True)
