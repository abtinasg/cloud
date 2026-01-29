
import { CheckCircle, AlertCircle, HardDrive } from "lucide-react";

export function SystemStatus({ compact = false }: { compact?: boolean }) {
    // Mock data - in real app this could fetch from an API
    const isHealthy = true;
    const storageUsed = 65; // Percentage

    if (compact) {
        return (
            <div className="flex items-center gap-2 text-xs font-medium bg-white/10 backdrop-blur-sm py-1.5 px-3 rounded-full text-white/90 border border-white/10">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Systems Operational
            </div>
        );
    }

    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-white w-full max-w-xs">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">System Status</h3>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium">All Services</span>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded">Online</span>
                </div>

                <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-white/70">
                        <span className="flex items-center gap-1.5"><HardDrive className="w-3 h-3" /> Storage Usage</span>
                        <span>{storageUsed}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                        <div
                            className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000"
                            style={{ width: `${storageUsed}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
