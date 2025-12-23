"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Loader2, Facebook } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { MOCK_USER } from "@/lib/mock-data";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      login(MOCK_USER);
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-brand-dark">Welcome Back</h2>
        <p className="text-gray-500 mt-2 text-sm">Login to manage your orders and addresses</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Email Address</label>
          <div className="relative">
            <input
              type="email"
              required
              className="w-full pl-10 pr-4 py-3 bg-brand-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Password</label>
          <div className="relative">
            <input
              type="password"
              required
              className="w-full pl-10 pr-4 py-3 bg-brand-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded text-brand-primary focus:ring-brand-primary" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <button type="button" className="text-brand-primary font-semibold hover:underline">
            Forgot password?
          </button>
        </div>

        <Button type="submit" className="w-full py-6 rounded-xl text-lg font-bold" disabled={isLoading}>
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Log In"}
        </Button>

        <div className="relative my-8">
           <div className="absolute inset-0 flex items-center">
             <div className="w-full border-t border-gray-200"></div>
           </div>
           <div className="relative flex justify-center text-sm">
             <span className="px-2 bg-white text-gray-500 uppercase tracking-wider text-xs font-bold">Or continue with</span>
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <Button variant="outline" className="rounded-xl py-6 gap-2 border-gray-100">
              <Image src="https://www.google.com/favicon.ico" width={16} height={16} alt="Google" />
              Google
           </Button>
           <Button variant="outline" className="rounded-xl py-6 gap-2 border-gray-100">
              <Facebook className="w-4 h-4 text-blue-600 fill-current" />
              Facebook
           </Button>
        </div>
      </form>
    </div>
  );
};