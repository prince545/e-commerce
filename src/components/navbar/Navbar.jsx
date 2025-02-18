// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css";
import Filter from "../filter/Filter";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mode = 'light'; // Define the mode variable

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const user = JSON.parse(localStorage.getItem("user"));
console.log(user.user.email);

const logout = () => {
  localStorage.removeItem('user');
  window.location.href = '/login';
}

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">E-Commerce</a>
      </div>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Filter />

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* All links now have the box-link class */}
        <li>
          <a href="/home" className="box-link home">Home</a>
        </li>
        <li>
          <a href="/Dashboard" className="box-link dashboard ">Admin</a>
        </li>
        

          <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div>      
        
        <li>
          <a href="/order" className="box-link order">order</a> {/* Added box-link */}
        </li>
        <li>
          <a href="/AllProducts" className="box-link Allproducts">Products</a>
        </li>
        <li>
          <a href="/cart" className="box-link cart">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;