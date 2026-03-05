import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B0A0A] text-white pt-16 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
                    <div className="lg:col-span-2 pr-0 lg:pr-10">
                        <h2 className="text-[22px] font-bold mb-5 text-white tracking-tight">Ticket Magic</h2>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Ticket Magic is a modern customer support platform built to streamline ticket resolution and automate workflows. Empower your support team with powerful tools to track, prioritize, and solve user issues faster than ever before. Real-time visibility meets enterprise efficiency.
                        </p>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Company</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/mission" className="hover:text-white transition-colors">Our Mission</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact Sales</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Services</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li><a href="/products" className="hover:text-white transition-colors">Products & Features</a></li>
                            <li><a href="/customers" className="hover:text-white transition-colors">Customer Success</a></li>
                            <li><a href="/download" className="hover:text-white transition-colors">Download Apps</a></li>
                        </ul>
                    </div>

                    {/* Proyojoniyo Information links */}
                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Information</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="/careers" className="hover:text-white transition-colors">Careers & Jobs</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <h3 className="font-semibold text-[15px] mb-5 text-gray-100">Social Links</h3>
                        <ul className="space-y-3.5 text-sm text-gray-400">
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">X</span>
                                <span>@TicketMagicSys</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">in</span>
                                <span>Ticket Magic Inc.</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">f</span>
                                <span>Ticket Magic</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer text-gray-400">
                                <span className="w-[18px] h-[18px] rounded-full bg-gray-300 text-black flex items-center justify-center text-[10px] font-bold">@</span>
                                <span>hello@ticketmagic.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800/80 text-center text-sm text-gray-400">
                    <p>© {currentYear} Ticket Magic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
