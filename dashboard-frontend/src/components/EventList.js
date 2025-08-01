import React, { useEffect, useState } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch events');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h3>Major Oil Market Events</h3>
      <ul style={{ maxHeight: 300, overflowY: 'auto', padding: 0, listStyle: 'none' }}>
        {events.map((e, i) => (
          <li key={i} style={{ marginBottom: 10, background: '#eaf1fb', padding: '8px 12px', borderRadius: 6 }}>
            <strong>{e['Event Name'] || e['Event']}</strong><br/>
            <span>{e['Start Date']}</span><br/>
            <span style={{ fontSize: 13 }}>{e['Description']}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;
