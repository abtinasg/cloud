
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl opacity-60 -z-10 translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-3xl opacity-60 -z-10 -translate-x-1/3 translate-y-1/3" />

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8">
                        {/* Reviews */}
                        <div className="flex items-center gap-2">
                            <div className="flex text-orange-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-gray-900">5.0</span>
                            <span className="text-sm text-gray-500">(120k reviews)</span>
                            <span className="text-red-500">❤️</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                            Future-Ready
                            <br />
                            <span className="relative inline-block">
                                Cloud Storage
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-400" viewBox="0 0 200 12" preserveAspectRatio="none">
                                    <path d="M0 6 Q100 12 200 6" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg text-gray-500 max-w-md leading-relaxed">
                            Store, share, and collaborate on files securely. Built for teams that move fast and think big.
                        </p>

                        <div className="flex items-center gap-4 max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 bg-white border border-gray-200 px-5 py-4 rounded-full text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5"
                            />
                            <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
                                Get Started
                            </button>
                        </div>

                    </div>

                    {/* Visual Content */}
                    <div className="relative">
                        <div className="relative z-10">
                            <Image
                                src="/dashboard-ui.png"
                                alt="CloudVault Dashboard"
                                width={700}
                                height={500}
                                className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                                priority
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 -z-10" />
                        <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-20 -z-10" />
                    </div>

                </div>
            </div>
        </section>
    );
}
