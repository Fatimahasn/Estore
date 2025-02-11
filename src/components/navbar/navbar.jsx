import React from "react";
import './navbar.css';
const NavBar = () => {
    // const [activeTab, setActiveTab] = useState('groceries');
    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };
    
    return(
        <nav className="navbar navbar-light">
            {/* <div className="container-fluid"> */}
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        {/* <div className={`nav-link ${activeTab === "groceries" ? "active" : "deactive"}`} onClick={() => handleTabClick("groceries")}>Groceries</div> */}
                        <div className='nav-link active'>Groceries</div>
                    </li>
                    <li className="nav-item">
                        {/* <div className={`nav-link ${activeTab === "fruits" ? "active" : "deactive"}`}   onClick={() => handleTabClick("fruits")} >Premium Fruits</div> */}
                        <div className='nav-link deactive'>Premium Fruits</div>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`nav-link ${activeTab === "home/kitchen" ? "active" : "deactive"}`} onClick={() => handleTabClick("home/kitchen")} href="#">Home & Kitchen</a> */}
                        <div className='nav-link deactive'>Home & Kitchen</div>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`nav-link ${activeTab === "fashion" ? "active" : "deactive"}`} onClick={() => handleTabClick("fashion")} href="#" >Fashion</a> */}
                        <div className='nav-link deactive'>Fashion</div>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`nav-link ${activeTab === "electronics" ? "active" : "deactive"}`} onClick={() => handleTabClick("electronics")} href="#" >Electronics</a> */}
                        <div className='nav-link deactive'>Electronics</div>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`nav-link ${activeTab === "beauty" ? "active" : "deactive"}`} onClick={() => handleTabClick("beauty")}  href="#" >Beauty</a> */}
                        <div className='nav-link deactive'>Beauty</div>
                    </li>
                    <li className="nav-item">
                        {/* <a className={`nav-link ${activeTab === "homeImprovement" ? "active" : "deactive"}`} onClick={() => handleTabClick("homeImprovement")} href="#" >Home Improvement</a> */}
                        <div className='nav-link deactive'>Home Improvement</div>
                    </li>
                    <li className="nav-item">
                        {/* <a  className={`nav-link ${activeTab === "sports" ? "active" : "deactive"}`} onClick={() => handleTabClick("sports")} href="#" >Sports, Toys & Luggage</a> */}
                        <div className='nav-link deactive'>Sports, Toys & Luggage</div>
                    </li>
                </ul>
            {/* </div> */}
        </nav>
    )
}
export default NavBar;
