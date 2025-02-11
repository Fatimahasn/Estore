import "./style.css";
import Carousal from '../../components/carousal'
import Navbar from "../../components/navbar/navbar";
import TitleBar from "../../components/titlebar";
import Card from "../../components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from "../../components/footer";
import { getfeaturedCategories } from "../../services/categoryService";
import {getfeaturedProducts}  from "../../services/productService";
const Home=() =>{
  const [topCategories, setTopCategories] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const scrollRef = useRef(null);
  const productScroll = useRef(null);

  // Scroll handler
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance as needed
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
   // Scroll handler
   const handleProductScroll = (direction) => {
    if (productScroll.current) {
      const scrollAmount = 300; // Adjust scroll distance as needed
      productScroll.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(()=>{
    const featuredCategories = getfeaturedCategories();
    const featuredProducts = getfeaturedProducts();
    setTopCategories(featuredCategories);
    setTopProducts(featuredProducts);
  },[])

  return (
    <div>
      <div className="flex align-items-center title">Welcome to Estore!</div>
      <TitleBar />
      <div className="app-container">
        <Navbar />
      </div>
      <hr />
      <div className="app-container">
        <Carousal />
        <div className="pt-4">
          <h5>Shop from Top Categories</h5>
          <hr />
          <div className="position-relative">
            <button
              className="scroll-btn prev-btn"
              onClick={() => handleScroll("prev")}
            >
              <FaChevronLeft />
            </button>
            <div className="scrollable-container" ref={scrollRef}>
              {topCategories.map((category) => {
                return (
                  <Card
                    key={category.id}
                    name={category.name}
                    image={category.imgpath}
                    type="category"
                  />
                );
              })}
            </div>
            <button
              className="scroll-btn next-btn"
              onClick={() => handleScroll("next")}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="pt-4">
          <h5>Featured Products</h5>
          <hr />
          <div className="position-relative">
            <button
              className="scroll-btn prev-btn"
              onClick={() => handleProductScroll("prev")}
            >
              <FaChevronLeft />
            </button>
            <div className="product_scrollable_container" ref={productScroll}>
            {topProducts.map((product) => {
              return (
                <Card
                  key={product.id}
                  name={product.name}
                  image={product.imgpath}
                  type="product"
                />
              );
            })}
          </div>
          <button
              className="scroll-btn next-btn"
              onClick={() => handleProductScroll("next")}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
