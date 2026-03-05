import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import TaskStatus from '../components/TaskStatus';
import TicketCard from '../components/TicketCard';
import Footer from '../components/Footer';

export default function Home() {
    const [tickets, setTickets] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    useEffect(() => {
        // Fetch customer tickets from the public folder's api.json
        fetch('/api.json')
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch tickets");
                return res.json();
            })
            .then((data) => {
                if (data?.tickets) {
                    setTickets(data.tickets);
                }
            })
            .catch((error) => console.error("Error loading tickets:", error));
    }, []);

    const handleTicketClick = (ticket) => {
        // Prevent adding if it's already completed
        if (resolvedTasks.some((t) => t.id === ticket.id)) {
            alert(`Ticket "${ticket.title}" is already resolved!`);
            return;
        }

        // Basic logic to prevent duplicate additions to 'In Progress' state
        if (!selectedTasks.some((task) => task.id === ticket.id)) {
            alert(`Added "${ticket.title}" to your Task Status panel!`);
            setSelectedTasks((prevTasks) => [...prevTasks, ticket]);
        } else {
            alert(`Ticket "${ticket.title}" is already in progress.`);
        }
    };

    const handleCompleteTask = (taskToComplete) => {
        // Show alert (temporary)
        alert(`Successfully marked "${taskToComplete.title}" as resolved!`);

        // Remove the ticket from Task Status
        setSelectedTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskToComplete.id)
        );

        // Add it to Resolved List
        setResolvedTasks((prevResolvedTasks) =>
            [...prevResolvedTasks, taskToComplete]
        );

        // Remove it from Customer Tickets list
        setTickets((prevTickets) =>
            prevTickets.filter((ticket) => ticket.id !== taskToComplete.id)
        );
    };

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#F4F5F7]">
            {/* Seamless Sticky Navbar Layout */}
            <div className="w-full bg-white shadow-sm border-b border-gray-100 relative z-20">
                <Navbar />
            </div>

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Banner accurately reflects dynamic logic state automatically */}
                <Banner
                    inProgressCount={selectedTasks.length}
                    resolvedCount={resolvedTasks.length}
                />

                {/* Responsive dual-column layout */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Main List Section */}
                    <div className="lg:col-span-2 space-y-5">
                        <h2 className="text-[20px] font-bold text-[#3B4358] tracking-tight">Customer Tickets</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {tickets.length > 0 ? (
                                tickets.map((ticket) => (
                                    <TicketCard
                                        key={ticket.id}
                                        ticket={ticket}
                                        onClick={handleTicketClick}
                                    />
                                ))
                            ) : (
                                <div className="col-span-full py-16 text-center text-gray-400 font-medium bg-white rounded-lg border border-gray-200 shadow-sm">
                                    {resolvedTasks.length > 0 ? "All tickets have been resolved! Great job." : "Loading tickets..."}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sticky Sidebar Status section */}
                    <div className="lg:col-span-1 sticky top-6">
                        <TaskStatus
                            tasks={selectedTasks}
                            resolvedTasks={resolvedTasks}
                            onComplete={handleCompleteTask}
                        />
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
