from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import os

app = Flask(__name__)
CORS(app)

# Example: Load processed/model data for API responses
data_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../data'))
raw_data_path = os.path.join(data_dir, 'raw', 'BrentOilPrices.csv')
events_path = os.path.join(data_dir, 'MajorOilMarketEvents.csv')

@app.route('/api/prices', methods=['GET'])
def get_prices():
    df = pd.read_csv(raw_data_path)
    df.columns = [col.strip() for col in df.columns]
    date_col = [col for col in df.columns if 'date' in col.lower()][0]
    price_col = [col for col in df.columns if 'price' in col.lower()][0]
    df[date_col] = pd.to_datetime(df[date_col])
    df = df[[date_col, price_col]].dropna()
    df = df.rename(columns={date_col: 'date', price_col: 'price'})
    df['date'] = df['date'].astype(str)
    return jsonify(df.to_dict(orient='records'))

@app.route('/api/events', methods=['GET'])
def get_events():
    df = pd.read_csv(events_path)
    df = df.dropna(subset=['Start Date'])
    df['Start Date'] = pd.to_datetime(df['Start Date']).astype(str)
    return jsonify(df.to_dict(orient='records'))

# Placeholder for model results (to be implemented)
@app.route('/api/model/change-points', methods=['GET'])
def get_change_points():
    # TODO: Replace with actual model output
    # Example: Return a list of dicts with change point indices/dates and metrics
    return jsonify([])

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
