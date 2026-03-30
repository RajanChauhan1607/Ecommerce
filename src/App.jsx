import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";
import TopRated from "./pages/TopRated"; // ✅ IMPORT
import Kids from "./pages/Kids";
import Mens from "./pages/Mens";
import Electronics from "./pages/Electronics";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });

    fetch("https://ecommerce-backend-abw3.onrender.com/api/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products products={products} loading={loading} />
              <TopProducts products={products} loading={loading} />
              <Banner />
              <Subscribe />
            </>
          }
        />

        {/* Checkout */}
        <Route path="/checkout/:id" element={<Checkout />} />

        {/* Top Rated Page */}
        <Route
          path="/top-rated"
          element={<TopRated products={products} />}
        />
        <Route path="/kids" element={<Kids products={products} />} />
        <Route path="/mens" element={<Mens products={products} />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;