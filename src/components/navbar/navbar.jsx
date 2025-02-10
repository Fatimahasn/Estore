import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './navbar.css';
const NavBar = () => {
    const [activeTab, setActiveTab] = useState('groceries');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    
    return(
        <nav className="navbar navbar-light">
            {/* <div className="container-fluid"> */}
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className={`nav-link ${activeTab === "groceries" ? "active" : "deactive"}`} href="#" onClick={() => handleTabClick("groceries")} >Groceries</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeTab === "fruits" ? "active" : "deactive"}`}   onClick={() => handleTabClick("fruits")} href="#" >Premium Fruits</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeTab === "home/kitchen" ? "active" : "deactive"}`} onClick={() => handleTabClick("home/kitchen")} href="#">Home & Kitchen</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeTab === "fashion" ? "active" : "deactive"}`} onClick={() => handleTabClick("fashion")} href="#" >Fashion</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeTab === "electronics" ? "active" : "deactive"}`} onClick={() => handleTabClick("electronics")} href="#" >Electronics</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeTab === "beauty" ? "active" : "deactive"}`} onClick={() => handleTabClick("beauty")}  href="#" >Beauty</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${activeTab === "homeImprovement" ? "active" : "deactive"}`} onClick={() => handleTabClick("homeImprovement")} href="#" >Home Improvement</a>
                    </li>
                    <li className="nav-item">
                        <a  className={`nav-link ${activeTab === "sports" ? "active" : "deactive"}`} onClick={() => handleTabClick("sports")} href="#" >Sports, Toys & Luggage</a>
                    </li>
                </ul>
            {/* </div> */}
        </nav>
    )
}
export default NavBar;
