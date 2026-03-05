import React from 'react';

export default function TicketCard({ ticket, onClick }) {
    const { id, title, description, customer, priority, status, createdAt } = ticket;

    // Visual styles for the status badge
    const getStatusStyle = (currentStatus) => {
        switch (currentStatus?.toLowerCase()) {
            case 'open':
                return 'bg-green-100 text-green-700';
            case 'in progress':
            case 'in-progress':
                return 'bg-yellow-100 text-[#B45309]'; // Darker yellow/orange for readability
            case 'resolved':
                return 'bg-blue-100 text-blue-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    // Color dot for the status badge
    const getStatusDot = (currentStatus) => {
        switch (currentStatus?.toLowerCase()) {
            case 'open':
                return 'bg-green-500';
            case 'in progress':
            case 'in-progress':
                return 'bg-yellow-400';
            case 'resolved':
                return 'bg-blue-500';
            default:
                return 'bg-gray-500';
        }
    };

    // Text color coloring for the priority string
    const getPriorityColor = (currentPriority) => {
        switch (currentPriority?.toLowerCase()) {
            case 'high':
                return 'text-red-500';
            case 'medium':
                return 'text-yellow-500';
            case 'low':
                return 'text-green-500';
            default:
                return 'text-gray-500';
        }
    };

    // Formatting date from ISO to MM/DD/YYYY format
    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div
            onClick={() => onClick(ticket)}
            className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer w-full flex flex-col h-full group"
        >
            {/* Header Line */}
            <div className="flex justify-between items-start mb-3 gap-3">
                <h3 className="font-semibold text-gray-800 text-[15px] leading-snug group-hover:text-[#5542F6] transition-colors">{title}</h3>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium whitespace-nowrap ${getStatusStyle(status)}`}>
                    <span className={`w-2 h-2 rounded-full ${getStatusDot(status)}`}></span>
                    {status === 'In Progress' ? 'In- Progress' : status}
                </div>
            </div>

            {/* Body Description */}
            <p className="text-gray-500 text-[13px] leading-relaxed mb-6 line-clamp-2 flex-grow">
                {description}
            </p>

            {/* Footer Meta Data */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center text-xs text-gray-500 gap-4 sm:gap-2 mt-auto pt-4 border-t border-gray-50">

                {/* Ticket ID & Priority */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 font-medium">#{id}</span>
                    <span className={`${getPriorityColor(priority)} font-bold tracking-wider text-[10px]`}>
                        {priority?.toUpperCase()} PRIORITY
                    </span>
                </div>

                {/* Customer Name & Date */}
                <div className="flex items-center gap-4 justify-between sm:justify-end w-full sm:w-auto">
                    <span className="text-gray-600 truncate max-w-[120px] sm:max-w-none">{customer}</span>
                    <div className="flex items-center gap-1.5 text-gray-400 whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                        <span>{formattedDate}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
