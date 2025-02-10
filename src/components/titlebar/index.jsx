import React from "react";
import "./titlebar.css"; // We'll add some styles here later.
import Search from "../searchInput";

const TitleBar = () => {
  return ( 
      <div className = 'title-bar'>
        <div className = "d-flex titlebar-spacing ">
          <h2 className = 'text-primary'>Estore</h2>
          <div className = 'search-container'>
            <Search placeholder="Search for Products" data={""} onSearch=""/>
          </div>
          <div className="pt-1 px-5 btnspacing">
            <button className="btn ">
              <i className="fa fa-user px-1"></i>Sign Up/Sign In
            </button>
            <button className="btn">
              <i className="fas fa-shopping-cart px-1"></i>Cart
            </button>
          </div>  
         </div>
      </div>
  );
};

export default TitleBar;
