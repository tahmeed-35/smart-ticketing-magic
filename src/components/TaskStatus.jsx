export default function TaskStatus() {
    return (
        <div className="stats shadow-sm w-full border border-base-200/50 bg-base-100 mb-8 rounded-2xl overflow-hidden shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
            <div className="stat place-items-center py-6">
                <div className="stat-figure text-primary/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="stat-title text-base-content/70 font-medium">Total Tickets</div>
                <div className="stat-value text-4xl text-base-content font-bold tracking-tight">3</div>
                <div className="stat-desc text-primary font-medium mt-1">From all time</div>
            </div>

            <div className="stat place-items-center py-6 border-l border-base-200/50">
                <div className="stat-figure text-success/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="stat-title text-base-content/70 font-medium">Resolved</div>
                <div className="stat-value text-4xl text-success font-bold tracking-tight">1</div>
                <div className="stat-desc text-success/80 font-medium mt-1">Tasks completed</div>
            </div>

            <div className="stat place-items-center py-6 border-l border-base-200/50">
                <div className="stat-figure text-warning/20">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                </div>
                <div className="stat-title text-base-content/70 font-medium">Pending & Open</div>
                <div className="stat-value text-4xl text-warning font-bold tracking-tight">2</div>
                <div className="stat-desc text-warning/80 font-medium mt-1">Requires attention</div>
            </div>
        </div>
    );
}
