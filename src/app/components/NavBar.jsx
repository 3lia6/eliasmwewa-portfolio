import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: 'Blog',
        path: '#blog',
    },
    {
        title: 'Companies',
        path: '#companies',
    },
    {
        title: 'Upcoming',
        path: '#upcoming',
    },
    {
        title: 'Merch',
        path: '#merch',
    },
    
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <div className='flex items-center text-2xl md:text-3xl text-white font-cursive cursor-pointer'>
                    <img src='/images/projects/logo.png' alt='Logo' className='h-12 w-12 mr-2' />
                    <span className='hidden md:block' style={{ fontFamily: 'cursive', fontSize: '1.6rem' }}>Elias Mwewa</span>
                </div>
                <div className='mobile-menu block md:hidden'>
                    <button onClick={toggleNavbar} className='flex items-center px-3 py-2 border rounded hover:text-white hover:border-white text-slate-200'>
                        {navbarOpen ? <XMarkIcon className='h-5 w-5'/> : <Bars3Icon className='h-5 w-5'/>}
                    </button>
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className={`flex ${navbarOpen ? 'flex-col' : ''} p-4 md:p-0 md:flex-row md-space-x-8`}>
                        {navLinks.map((link, index) => (
                            <li key={index} className='mr-4'>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default NavBar;
