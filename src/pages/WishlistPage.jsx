import React from "react";
import { useWishlist } from "../context/WishlistContext";
import "./Wishlistpage.css"; 

function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="results-container">
      <h2 className="results-title">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Please Add Destination.</p>
      ) : (
        <div className="card-grid">
          {wishlist.map((dest, index) => (
            <div className="destination-card" key={index}>
              <div className="card-image" style={{ backgroundImage: `url(${dest.image})` }}>
                <div className="card-overlay">
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <p><strong>Budget:</strong> ₹{dest.budget}</p>
                  <button onClick={() => removeFromWishlist(dest.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishlistPage;
