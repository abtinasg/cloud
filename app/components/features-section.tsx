
import { ArrowUpRight, Download, TrendingUp, Users, Shield, Zap } from "lucide-react";

export function FeaturesSection() {
    return (
        <section id="features" className="bg-[#0f0f0f] py-24 rounded-t-[3rem] -mt-10 relative z-20 overflow-hidden px-6 text-white border-t border-white/5 shadow-2xl">

            <div className="container mx-auto">
                <div className="flex items-center gap-2 mb-12">
                    <h2 className="text-3xl font-bold">Cloud Storage</h2>
                    <span className="text-blue-500 text-2xl">☁️</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">

                    {/* Box 1: Storage Stats */}
                    <div className="lg:col-span-3 bg-[#1a1a1a] rounded-3xl p-6 border border-white/5 relative group hover:border-white/10 transition-colors">
                        <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center mb-6">
                            <Download className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-4xl font-bold mb-2">2.5TB</h3>
                        <p className="text-gray-400 text-sm">Storage Used</p>
                        <div className="mt-6 bg-green-500/10 text-green-400 text-xs px-3 py-1 rounded-full inline-flex items-center gap-1">
                            50% available <TrendingUp className="w-3 h-3" />
                        </div>
                    </div>

                    {/* Box 2: Files Shared */}
                    <div className="lg:col-span-5 bg-white text-black rounded-3xl p-8 relative overflow-hidden group">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            <span className="text-sm font-semibold text-gray-600">Files Shared</span>
                        </div>
                        <h3 className="text-7xl font-bold mb-4 tracking-tighter">1.2M</h3>
                        <p className="text-gray-600 max-w-xs">
                            Over 1.2 million files shared securely across teams worldwide.
                        </p>
                    </div>

                    {/* Box 3: Uptime */}
                    <div className="lg:col-span-4 bg-[#1a1a1a] rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="text-sm font-semibold text-gray-400">Uptime Guarantee</span>
                        </div>
                        <h3 className="text-7xl font-bold mb-4 tracking-tighter text-white">99.9%</h3>
                        <p className="text-gray-400">
                            Enterprise-grade reliability for your critical data.
                        </p>
                    </div>

                    {/* Large Feature Area */}
                    <div className="lg:col-span-12 mt-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl mb-8 relative overflow-hidden flex items-center justify-center">
                                <Shield className="w-24 h-24 text-white/30" />
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                                Secure Storage Built for Modern Teams
                            </h3>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                End-to-end encryption, granular permissions, and audit logs keep your data safe while enabling seamless collaboration.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                                        <span className="bg-blue-500/20 p-2 rounded-lg"><Shield className="w-5 h-5 text-blue-400" /></span>
                                        Enterprise Security
                                    </h4>
                                    <p className="text-gray-500 text-sm">SOC 2 certified with advanced threat protection.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                                        <span className="bg-orange-500/20 p-2 rounded-lg"><Zap className="w-5 h-5 text-orange-400" /></span>
                                        Lightning Fast
                                    </h4>
                                    <p className="text-gray-500 text-sm">Global CDN ensures instant access from anywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
