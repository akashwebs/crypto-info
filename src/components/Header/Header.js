import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center py-4 px-16 bg-slate-300'>
            <div className='text-left'>
                <Link to={'/'}>
                    <h2 className='text-3xl'>Crypto-info</h2>
                </Link>
            </div>
            <div className='flex gap-x-4 justify-end'>
                <Link to={'/'}>Home</Link>
                <Link to='/coins'>Coins</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='about'>About</Link>
            </div>
        </div>
    );
};

export default Header;