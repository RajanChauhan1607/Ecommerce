import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://ecommerce-backend-abw3.onrender.com/api/products/")
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.id == id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} width="200" />
      <p>₹{product.price}</p>
    </div>
  );
};

export default Checkout;