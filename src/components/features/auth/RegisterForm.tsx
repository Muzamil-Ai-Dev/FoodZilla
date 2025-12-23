"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Loader2, Facebook } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { MOCK_USER } from "@/lib/mock-data";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuthStore();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      login({ ...MOCK_USER, name });
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-brand-dark">Create an Account</h2>
        <p className="text-gray-500 mt-2 text-sm">Join FoodZilla and start ordering today</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Full Name</label>
          <div className="relative">
            <input
              type="text"
              required
              className="w-full pl-10 pr-4 py-3 bg-brand-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

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

        <p className="text-xs text-gray-500 leading-relaxed">
          By creating an account, you agree to FoodZilla&apos;s 
          <button type="button" className="text-brand-primary mx-1 hover:underline">Terms of Service</button> 
          and 
          <button type="button" className="text-brand-primary mx-1 hover:underline">Privacy Policy</button>.
        </p>

        <Button type="submit" className="w-full py-6 rounded-xl text-lg font-bold" disabled={isLoading}>
          {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign Up"}
        </Button>

        <div className="relative my-8">
           <div className="absolute inset-0 flex items-center">
             <div className="w-full border-t border-gray-200"></div>
           </div>
           <div className="relative flex justify-center text-sm">
             <span className="px-2 bg-white text-gray-500 uppercase tracking-wider text-xs font-bold">Or sign up with</span>
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