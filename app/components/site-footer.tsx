
import Link from "next/link";
import { Cloud, Github, Twitter, Linkedin } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="bg-[#0f0f0f] text-white py-16 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-white text-black p-2 rounded-lg">
                                <Cloud className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-lg">CloudVault</span>
                        </div>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            The modern cloud storage platform built for teams that value security and speed.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-300 mb-6 uppercase tracking-wider">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Enterprise</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-300 mb-6 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-sm text-gray-300 mb-6 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-gray-600 text-sm">
                        © 2025 CloudVault. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3">
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
