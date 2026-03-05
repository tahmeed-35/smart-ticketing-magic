import React from 'react';

export default function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
    return (
        <div className="w-full mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#7B5EED] to-[#9966FF] p-10 text-center text-white shadow-sm flex flex-col items-center justify-center min-h-[240px]">
                    <div className="absolute inset-0 opacity-10 blur-[2px]"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                    </div>

                    <h2 className="text-xl font-medium mb-3 relative z-10">In-Progress</h2>
                    <span className="text-6xl font-bold relative z-10">{inProgressCount}</span>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#20C57F] to-[#12A262] p-10 text-center text-white shadow-sm flex flex-col items-center justify-center min-h-[240px]">
                    {/* Background er jonno choto pattern design */}
                    <div className="absolute inset-0 opacity-10 blur-[2px]"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                    </div>

                    <h2 className="text-xl font-medium mb-3 relative z-10">Resolved</h2>
                    <span className="text-6xl font-bold relative z-10">{resolvedCount}</span>
                </div>
            </div>
        </div>
    );
}
