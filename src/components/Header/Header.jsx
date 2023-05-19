import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="ml-3 normal-case text-xl">
          <img
            src="https://i.ibb.co/XSBptSt/Black-White-Minimalist-Business-Logo-removebg-preview-3.png"
            alt=""
            style={{ height: "50px", width: "200px" }}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allToys">All Toys</Link>
          </li>
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <li>
            <Link to="/addToy">Add A Toy</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">User Profile Picture</a>
      </div>
    </div>
  );
}

export default Header;
