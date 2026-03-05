import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Changelog', path: '/changelog' },
        { name: 'Blog', path: '/blog' },
        { name: 'Download', path: '/download' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="w-full bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-5 relative z-10 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Link to="/" className="text-[22px] font-bold text-gray-900 tracking-tight">
                    CS — Ticket System
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-7">
                {menuItems.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Action Button */}
            <div className="flex-shrink-0">
                <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors shadow-sm">
                    + New Ticket
                </button>
            </div>
        </nav>
    );
}
