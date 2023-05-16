import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from "../../assets/images/heroImg.jpg"

const Home = () => {
    return (
        <section className='mt-16'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                    <div className='bg-secondary bg-opacity-40 rounded-lg w-full lg:w-auto'>
                    <img src={heroImg} className="rounded-lg relative left-4 top-4 w-full lg:max-w-sm" />
                    </div>
                    <div>
                        <p className='my-10 text-primary'>Sale up to 70% off</p>
                        <h1 className="text-5xl font-bold">New Collection For Fall</h1>
                        <p className="py-6">Discover all the new arrivals of ready-to-wear collection.</p>
                        <Link to="/shop">
                        <button className="btn btn-primary">Shop Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;