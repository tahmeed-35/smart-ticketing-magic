import React from 'react';
import vector1 from '../assets/vector1.png';

export default function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
    return (
        <div className="w-full mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 p-10 text-center text-white shadow-lg flex flex-col items-center justify-center min-h-[240px]">
                    <div
                        className="absolute inset-0 opacity-60 mix-blend-overlay"
                        style={{
                            backgroundImage: `url(${vector1})`,
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>

                    <h2 className="text-[22px] font-medium mb-2 relative z-10 w-full flex justify-center items-center h-8">
                        In-Progress
                    </h2>
                    <span className="text-[64px] font-bold leading-none tracking-tight relative z-10 w-full flex justify-center items-center h-20">
                        {inProgressCount}
                    </span>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700 p-10 text-center text-white shadow-lg flex flex-col items-center justify-center min-h-[240px]">
                    <div
                        className="absolute inset-0 opacity-60 mix-blend-overlay"
                        style={{
                            backgroundImage: `url(${vector1})`,
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                    </div>

                    <h2 className="text-[22px] font-medium mb-2 relative z-10 w-full flex justify-center items-center h-8">
                        Resolved
                    </h2>
                    <span className="text-[64px] font-bold leading-none tracking-tight relative z-10 w-full flex justify-center items-center h-20">
                        {resolvedCount}
                    </span>
                </div>
            </div>
        </div>
    );
}
