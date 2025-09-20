import React from 'react';
import { useLocation } from 'react-router-dom';
import destinations from '../data/destinations.json';
import './ResultsPage.css';
import { useWishlist } from '../context/WishlistContext';

function ResultsPage() {
  const { state } = useLocation();
  const { interest, season, budget } = state;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const matchedDestinations = destinations.filter(dest =>
    dest.interests.map(i => i.toLowerCase()).includes(interest.toLowerCase()) &&
    dest.seasons.map(s => s.toLowerCase()).includes(season.toLowerCase()) &&
    Number(budget) >= dest.budget
  );

  return (
    <div className="results-container">
      <h2 className="results-title">Recommended Destinations</h2>
      {matchedDestinations.length > 0 ? (
        <div className="card-grid">
          {matchedDestinations.map((dest) => (
            <div className="destination-card" key={dest.id}>
              <div 
                className="card-image" 
                style={{ backgroundImage: `url(${dest.image})` }}
              >
                <div className="card-overlay">
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <p><strong>Budget:</strong> ₹{dest.budget}</p>

                  {isInWishlist(dest.id) ? (
                    <button 
                      className="wishlist-btn remove" 
                      onClick={() => removeFromWishlist(dest.id)}
                    >
                       Remove
                    </button>
                  ) : (
                    <button 
                      className="wishlist-btn add" 
                      onClick={() => addToWishlist(dest)}
                    >
                      🤍
                    </button>
                  )}
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
