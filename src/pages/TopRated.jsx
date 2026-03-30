// src/pages/TopRated.jsx
import React from "react";


const TopRated = ({ products }) => {
  const topProducts = products.filter((p) => p.rating >= 4); // optional

  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-bold mb-5">Top Rated Products</h1>

      {topProducts.length === 0 ? (
        <p>No top rated products</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {topProducts.map((p) => (
            <div key={p.id} className="border p-3 rounded">
              <img src={p.image} alt={p.title} />
              <h2>{p.title}</h2>
              <p>₹{p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopRated;