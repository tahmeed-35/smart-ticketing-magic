import React from 'react';

export default function TaskStatus({ tasks = [] }) {
    return (
        <div className="w-full">
            {/* Active Tasks Section */}
            <div className="mb-8">
                <h2 className="text-[18px] font-bold text-[#3B4358] mb-1">Task Status</h2>
                <p className="text-[#8492A6] text-[13px] mb-4">Select a ticket to add to Task Status</p>

                <div className="space-y-3">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-white rounded-md p-4 shadow-sm border border-gray-100 hover:shadow transition-shadow">
                            <h3 className="font-semibold text-gray-800 text-[14px] mb-3 leading-tight">
                                {task.title}
                            </h3>
                            <button
                                className="w-full bg-[#0CAF60] hover:bg-[#0A9652] text-white py-2 rounded-md font-medium text-[13px] transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    alert(`Completing task: ${task.title}`);
                                }}
                            >
                                Complete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Resolved Tasks Section */}
            <div>
                <h2 className="text-[18px] font-bold text-[#3B4358] mb-3">Resolved Task</h2>
                <p className="text-[#8492A6] text-[13px]">No resolved tasks yet.</p>
            </div>
        </div>
    );
}
