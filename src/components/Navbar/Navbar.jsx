import React from 'react';
import { Link } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-row justify-between my-5'>
            <div>

            </div>

            <div className='flex flex-row gap-5'>
                 <Link to='/'>Home</Link>
                 <Link to='/about'>About</Link>
                 <Link to='/career'>Career</Link>
            </div>

            <div className='flex flex-row gap-3 items-center'>
                <img src={user} alt="" />
                <button className='btn btn-accent px-5 py-2 text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;