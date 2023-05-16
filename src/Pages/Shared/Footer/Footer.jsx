import React from 'react';
import logo from "../../../assets/images/Logo.svg"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer>
           <div className="footer p-14 bg-accent text-white mt-14">
           <div>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
                <p>Ema John Ltd.<br />Providing reliable e-shopping since 2023</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to="/" className="link link-hover">Branding</Link>
                <Link to="/" className="link link-hover">Design</Link>
                <Link to="/" className="link link-hover">Marketing</Link>
                <Link to="/" className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to="/" className="link link-hover">About us</Link>
                <Link to="/" className="link link-hover">Contact</Link>
                <Link to="/" className="link link-hover">Jobs</Link>
                <Link to="/" className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link to="/" className="link link-hover">Terms of use</Link>
                <Link to="/" className="link link-hover">Privacy policy</Link>
                <Link to="/" className="link link-hover">Cookie policy</Link>
            </div>
           </div>
        </footer>
    );
};

export default Footer;