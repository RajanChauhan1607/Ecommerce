import React, { useEffect, useState } from "react";

const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // ✅ You can change this API later
    fetch("https://ecommerce-backend-abw3.onrender.com/api/products/")
      .then((res) => res.json())
      .then((data) => {
        // TEMP: filter electronics (since no category exists)
        const electronics = data.slice(0, 3); // change later
        setProducts(electronics);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-bold mb-5">Electronics ⚡</h1>

      {products.length === 0 ? (
        <p>No electronics found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((p) => (
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

export default Electronics;