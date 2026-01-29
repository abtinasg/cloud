import Link from "next/link";
import Image from "next/image";
import { Cloud, ArrowLeft } from "lucide-react";
import { LoginForm } from "./components/login-form";
import { SystemStatus } from "./components/system-status";

export default function Home() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left Panel - Branding & Visuals */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-[#0d0d0d] text-white">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />

        {/* Branding */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight">CloudVault <span className="text-white/40 font-normal ml-2">Internal</span></span>
        </div>

        {/* Center Visual - Text Only */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 py-12">
          <div className="text-center max-w-md">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10">
                <Cloud className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-6">Enterprise Secure Storage</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Access your team's confidential documents, design assets, and project files in one secure environment.
            </p>
          </div>
        </div>

        {/* Footer / Status */}
        <div className="relative z-10 space-y-6">
          <SystemStatus compact={false} />
          <p className="text-xs text-gray-500 opacity-60">© 2025 CloudVault Inc.</p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex flex-col items-center justify-center p-8 bg-white text-gray-900">
        <div className="lg:hidden w-full max-w-sm mb-12 flex items-center gap-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <Cloud className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg">CloudVault</span>
        </div>

        <LoginForm />

        <div className="mt-12 text-center text-xs text-gray-400">
          Protected by CloudVault Shield. <br />
          Unauthorized access is prohibited.
        </div>
      </div>
    </div>
  );
}

