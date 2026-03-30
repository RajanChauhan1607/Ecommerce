import React from "react";

const Mens = ({ products }) => {
  const mensProducts = products.filter((p) =>
    p.title.toLowerCase().includes("men")
  );

  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-bold mb-5">Mens Wear</h1>

      {mensProducts.length === 0 ? (
        <p>No mens products found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {mensProducts.map((p) => (
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

export default Mens;