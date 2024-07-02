import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div>
            <nav className='bg-gray-800 p-4'>
                <Link to='/' className='text-white mr-4'>
                    Home
                </Link>
                <Link to='/about' className='text-white'>
                    About
                </Link>
            </nav>
            <div className='p-4'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
