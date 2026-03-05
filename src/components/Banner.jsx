import React from 'react';

export default function Banner({ inProgressCount = 0, resolvedCount = 0 }) {
    return (
        <div className="w-full mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#7B5AF2] to-[#9B64FA] p-10 text-center text-white shadow-sm flex flex-col items-center justify-center min-h-[240px]">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url('/src/assets/vector1.png')`,
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

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#51C772] to-[#128F60] p-10 text-center text-white shadow-sm flex flex-col items-center justify-center min-h-[240px]">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `url('/src/assets/vector1.png')`,
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
