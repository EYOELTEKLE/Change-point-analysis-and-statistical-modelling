# Laying the Foundation for Analysis

## 1. Data Analysis Workflow

1. **Data Collection & Preparation**
   - Load Brent oil prices from `data/raw/BrentOilPrices.csv`.
   - Clean and preprocess the data (handle missing values, ensure correct types).
2. **Exploratory Data Analysis (EDA)**
   - Visualize the time series (trend, seasonality, volatility).
   - Check for stationarity (e.g., ADF test).
   - Identify periods of interest.
3. **Event Data Compilation**
   - Major oil market events are compiled in `data/MajorOilMarketEvents.csv`.
   - Align events with the Brent oil price timeline.
4. **Change Point Detection**
   - Apply change point algorithms to detect structural breaks.
   - Compare detected change points with known events.
5. **Modeling**
   - Fit statistical models to segments between change points.
   - Evaluate model fit and interpret results.
6. **Reporting & Communication**
   - Summarize findings with visuals and clear narratives.
   - Prepare outputs for stakeholders (reports, presentations, dashboards).

## 2. Assumptions and Limitations

**Assumptions:**
- Brent oil price data is accurate and representative.
- Event dates are approximate and may not align perfectly with price changes.
- Change point models detect statistical breaks, not necessarily causal events.

**Limitations:**
- Statistical correlation does not imply causation.
- External factors not in event data may influence prices.
- Change point detection is sensitive to noise and parameter choices.

## 3. Communication Channels
- Written reports (PDF, Word)
- Interactive dashboards (Jupyter, web app)
- Presentations (PowerPoint, Google Slides)
- Visualizations (charts, timelines)

## 4. Understanding the Model and Data
- **References:** Review key papers on change point detection and time series analysis.
- **Time Series Properties:**
  - Check for trend and stationarity before modeling.
  - Stationarity informs model selection (e.g., ARIMA vs. regime-switching models).
- **Change Point Models:**
  - Purpose: Identify structural breaks in time series.
  - Outputs: Change dates, parameter shifts, segment statistics.
  - Limitations: May detect spurious breaks; not all breaks are meaningful.
