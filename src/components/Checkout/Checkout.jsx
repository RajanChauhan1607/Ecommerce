import { useLocation } from "react-router-dom";

const Checkout = () => {
  const { state } = useLocation();

  if (!state) {
    return <h1>No product selected ❌</h1>;
  }

  return (
    <div>
      <h1>{state.title}</h1>
      <img src={state.image} width="200" />
      <p>₹{state.price}</p>
    </div>
  );
};

export default Checkout;