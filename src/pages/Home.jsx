import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#F4F5F7]">
            {/* Navbar area with white background */}
            <div className="w-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <Navbar />
            </div>

            {/* Main Layout Area */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Banner Segment */}
                <Banner inProgressCount={0} resolvedCount={0} />

                {/* Main Section Placeholder */}
                <div className="mt-8">
                    {/* This empty block represents where the ticket list and task status will go */}
                </div>
            </main>

            {/* Footer Segment */}
            <Footer />
        </div>
    );
}
