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
            <div className="flex-shrink-0">
                <Link to="/" className="text-[22px] font-bold text-gray-900 tracking-tight flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#8B5CF6]">
                        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
                    </svg>
                    Ticket Magic
                </Link>
            </div>

            {/* Desktop er jonno menu list */}
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

            <div className="flex-shrink-0">
                <button className="bg-gradient-to-r from-[#7B5AF2] to-[#9B64FA] hover:opacity-90 text-white px-6 py-2.5 rounded-md font-medium text-sm transition-opacity shadow-sm border-none">
                    + New Ticket
                </button>
            </div>
        </nav>
    );
}
