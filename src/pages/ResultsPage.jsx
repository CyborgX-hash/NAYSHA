import React from 'react';
import { useLocation } from 'react-router-dom';
import destinations from '../data/destinations.json';
import './ResultsPage.css';


function ResultsPage() {
  const { state } = useLocation();
  const { interest, season, budget } = state;

  const filtered = destinations.filter(dest =>
    dest.interest === interest &&
    dest.season === season &&
    parseInt(budget) >= dest.budget
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Recommended Destinations</h2>
      {filtered.length > 0 ? (
        filtered.map((dest, index) => (
          <div key={index} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h3>{dest.name} ({dest.location})</h3>
            <p>Interest: {dest.interest}</p>
            <p>Season: {dest.season}</p>
            <p>Budget: ₹{dest.budget}</p>
            <img src={`/images/${dest.image}`} alt={dest.name} width="200" />
          </div>
        ))
      ) : (
        <p>No matching destinations found.</p>
      )}
    </div>
  );
}

export default ResultsPage;
