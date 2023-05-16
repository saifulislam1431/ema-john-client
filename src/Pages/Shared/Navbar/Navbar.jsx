import React, { useContext } from 'react';
import { UserContext } from '../../../Auth/Auth';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../assets/images/Logo.svg"

const Navbar = () => {
  const { user } = useContext(UserContext)
  const navItems = <>
    <li>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink>
    </li>
    <li>
      <NavLink to="/shop" className={({ isActive }) => (isActive ? "active" : "default")}>Shop</NavLink>
    </li>
    <li>
      <NavLink to="/order" className={({ isActive }) => (isActive ? "active" : "default")}>Order</NavLink>
    </li>
    <li>
      <NavLink to="/orderReview" className={({ isActive }) => (isActive ? "active" : "default")}>Order Review</NavLink>
    </li>

    {
      user ? <li>
        <button className="bg-transparent active">Sign Out</button>
      </li>
        :
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "default")}>Sign In</NavLink>
        </li>
    }

  </>
  return (
    <nav>
      <div className="navbar bg-accent px-5 lg:px-10">
      <Link to= "/" className='flex lg:hidden navbar-start'>
      <img src={logo} alt="Logo" />
    </Link>
        <div className="navbar-end lg:navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="#ffffff"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 right-0 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/" className='hidden lg:flex'>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;