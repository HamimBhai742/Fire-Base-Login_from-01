import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <div className='max-w-[1170px] mx-auto'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><NavLink to="/">Home</NavLink></li>

                            </ul>
                        </div>
                        <a className="btn btn-ghost text-3xl font-bold">FaceBook TCK</a>
                    </div>
                    <div className="navbar-center hidden lg:flex gap-5">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/singup">Sing Up</NavLink>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;