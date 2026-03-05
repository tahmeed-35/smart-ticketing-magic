import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B0A0A] text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">

                    {/* Brand & Intro */}
                    <div className="lg:col-span-2 pr-0 lg:pr-10">
                        <h2 className="text-[22px] font-bold mb-5 text-white tracking-tight">CS — Ticket System</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Company</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Saled</a></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Services</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Information Links */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Information</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Social Links</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">X</span>
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">in</span>
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">f</span>
                                <span>@CS — Ticket System</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">@</span>
                                <span>support@cst.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-gray-800/80 text-center text-sm text-gray-400">
                    <p>© {currentYear} CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
