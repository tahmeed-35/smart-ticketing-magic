export default function TicketCard({ ticket }) {
    // Safe UI fallback defaults
    const {
        title = 'Untitled Ticket',
        status = 'Open',
        priority = 'Normal',
        createdAt = new Date().toISOString()
    } = ticket || {};

    const getStatusColor = (currentStatus) => {
        switch (currentStatus.toLowerCase()) {
            case 'resolved': return 'badge-success text-success-content';
            case 'pending': return 'badge-warning text-warning-content';
            case 'open': return 'badge-info text-info-content';
            default: return 'badge-ghost';
        }
    };

    const getPriorityIcon = (currentPriority) => {
        switch (currentPriority.toLowerCase()) {
            case 'high':
                return <span className="text-error" title="High Priority">↑</span>;
            case 'low':
                return <span className="text-success" title="Low Priority">↓</span>;
            default:
                return <span className="text-base-content/50" title="Medium Priority">-</span>;
        }
    };

    return (
        <div className="card bg-base-100 hover:shadow-md transition-shadow border border-base-200/60 rounded-xl group relative overflow-hidden">
            {/* Tiny left accent color bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${status.toLowerCase() === 'resolved' ? 'bg-success' :
                    status.toLowerCase() === 'pending' ? 'bg-warning' : 'bg-info'
                }`}></div>

            <div className="card-body p-5">
                <div className="flex justify-between items-start gap-4 mb-2">
                    <p className="font-semibold text-lg leading-tight line-clamp-2 text-base-content group-hover:text-primary transition-colors cursor-pointer">
                        {title}
                    </p>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {getPriorityIcon(priority)}
                        <span className={`badge border-none font-medium text-xs px-2.5 py-1 ${getStatusColor(status)}`}>
                            {status}
                        </span>
                    </div>
                </div>

                <div className="text-sm text-base-content/60 font-medium mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-70">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <time dateTime={createdAt}>
                            {new Date(createdAt).toLocaleDateString(undefined, {
                                month: 'short', day: 'numeric', year: 'numeric'
                            })}
                        </time>
                    </div>

                    <button className="text-primary hover:text-primary-focus text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-200">
                        View Details →
                    </button>
                </div>
            </div>
        </div>
    );
}
