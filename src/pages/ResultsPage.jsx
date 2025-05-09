import React from 'react';
import { useLocation } from 'react-router-dom';
import destinations from '../data/destinations.json';
import './ResultsPage.css';

function ResultsPage() {
  const { state } = useLocation();
  const { interest, season, budget } = state;

  const matchedDestinations = destinations.filter(dest => 
    dest.interests.includes(interest.toLowerCase()) &&
    dest.seasons.includes(season.toLowerCase()) &&
    Number(budget) >= dest.budget
  );

  return (
    <div className="results-container">
      <h2 className="results-title">Recommended Destinations</h2>
      {matchedDestinations.length > 0 ? (
        <div className="card-grid">
          {matchedDestinations.map((dest, index) => (
            <div className="destination-card" key={index}>
              <div className="card-image" style={{ backgroundImage: `url(${dest.image})` }}>
                <div className="card-overlay">
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <p><strong>Budget:</strong> ₹{dest.budget}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching destinations found.</p>
      )}
    </div>
  );
}

export default ResultsPage;
