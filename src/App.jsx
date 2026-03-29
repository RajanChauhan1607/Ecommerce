import React,{useEffect, useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import TopProducts from './components/TopProducts/TopProducts'
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
const App = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();

      fetch("https://ecommerce-backend-abw3.onrender.com/api/products/")
        .then((res)=>res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch((err) => console.log(err))


  } , []);



  return (
    <div>
      <Navbar />
      <Hero />
      <Products products={products} loading={loading}/>
      <TopProducts products={products} loading={loading}/> 
      <Banner />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App