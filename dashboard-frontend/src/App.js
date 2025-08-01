import React from 'react';
import PriceChart from './components/PriceChart';
import EventList from './components/EventList';
import './App.css';

function App() {
  return (
    <div className="dashboard-root">
      <header className="dashboard-header">
        <h1>Brent Oil Price Analysis Dashboard</h1>
      </header>
      <div className="dashboard-body">
        <nav className="dashboard-sidebar">
          {/* Sidebar for filters, event list, etc. */}
          <h2>Filters</h2>
          <div>
            {/* Date range picker, event selector, etc. */}
            <p>(Date range and event filters will go here)</p>
<EventList />
          </div>
        </nav>
        <main className="dashboard-main">
          {/* Main content: charts, event highlights, KPIs */}
          <section>
            <h2>Price Trends & Events</h2>
            <PriceChart />
          </section>
          <section>
            <h2>Key Indicators</h2>
            <div id="kpi-placeholder">
              <p>(Volatility, average changes, etc. will be shown here)</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
