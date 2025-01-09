import React from 'react';

import { Link, useLocation } from 'react-router-dom';

export default function Header(props) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const { searchBar } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link className={` nav-link ${isActive("/") ? "active" : ""} `} to="/">{props.title} </Link>
          </li>

          <li className="nav-item">
            <Link className={`nav-link ${isActive("/add") ? "active" : ""} `} to="/add">Add</Link>
          </li>

          <li className="nav-item">
            <Link className={` nav-link ${isActive("/delete") ? "active" : ""} `} to="/delete">Delete</Link>
          </li>

          <li className="nav-item">
            <Link className={` nav-link ${isActive("/about") ? "active" : ""} `} to="/about">About</Link>
          </li>

        </ul>
        
        {/* Search Bar visible when its true */}
        {searchBar &&
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
          }


      </div>

    </nav>
  );
}
