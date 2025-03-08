import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li className="text-xl font-serif font-bold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-xl font-serif font-bold">
        <NavLink to="stat">Statistics</NavLink>
      </li>

      <li className="text-xl font-serif font-bold">
        <NavLink to="dashboard">Dashboard</NavLink>
      </li>
      <li className="text-xl font-serif font-bold">
        <NavLink to="/reviews">Reviews</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-serif font-bold">BookNest</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="bg-slate-100 p-3 rounded-full">
          <img
            className="w-6"
            src="https://img.icons8.com/?size=50&id=9671&format=png"
            alt=""
          />
        </a>
        <a className="bg-slate-100 p-3 rounded-full">
          <img
            src="https://img.icons8.com/?size=24&id=86721&format=png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
