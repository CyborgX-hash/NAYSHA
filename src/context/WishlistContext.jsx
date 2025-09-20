import React, { createContext, useContext, useState } from "react";


const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (!prev.some((dest) => dest.id === item.id)) {
        return [...prev,item];
      }
      return prev;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((dest) => dest.id !== id));
  };

  const isInWishlist = (id) => {
    return wishlist.some((dest) => dest.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
