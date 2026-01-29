
import Link from "next/link";
import { Cloud, Menu } from "lucide-react";

export function SiteHeader() {
    return (
        <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-black text-white p-2 rounded-lg">
                        <Cloud className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-xl text-gray-900 tracking-tight">CloudVault</span>
                </div>

                <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-500">
                    <Link href="#" className="text-black">Home</Link>
                    <Link href="#features" className="hover:text-black transition-colors">Features</Link>
                    <Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link>
                    <Link href="#" className="hover:text-black transition-colors">About</Link>
                </nav>

                <div className="flex items-center gap-6">
                    <Link
                        href="/login"
                        className="hidden md:block text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="hidden md:block bg-black text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Get Started
                    </Link>
                    <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <Menu className="w-6 h-6 text-gray-900" />
                    </button>
                </div>
            </div>
        </header>
    );
}
