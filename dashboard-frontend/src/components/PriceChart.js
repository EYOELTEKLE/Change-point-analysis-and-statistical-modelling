import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function PriceChart() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/prices')
      .then((res) => res.json())
      .then((prices) => {
        const labels = prices.map((d) => d.date);
        const values = prices.map((d) => d.price);
        setData({
          labels,
          datasets: [
            {
              label: 'Brent Oil Price (USD)',
              data: values,
              fill: false,
              borderColor: '#003366',
              tension: 0.2,
            },
          ],
        });
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch price data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading price data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;
  return (
    <div style={{ background: '#fff', padding: '1rem', borderRadius: 8, boxShadow: '0 1px 6px #dbe6f6' }}>
      <Line data={data} options={{
        responsive: true,
        plugins: { legend: { display: true, position: 'top' } },
        scales: { x: { display: true, title: { display: true, text: 'Date' } }, y: { display: true, title: { display: true, text: 'Price (USD)' } } }
      }} />
    </div>
  );
}

export default PriceChart;
