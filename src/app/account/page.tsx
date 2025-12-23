"use client";

import { useAuthStore } from "@/lib/store/useAuthStore";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Calendar, Edit2 } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 pb-10 border-b border-gray-50">
          <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-brand-secondary shadow-xl">
            {user?.avatarUrl ? (
              <Image src={user.avatarUrl} alt={user.name} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User className="w-12 h-12 text-brand-primary" />
              </div>
            )}
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl font-black text-brand-dark mb-2 uppercase italic tracking-tighter">
              {user?.name || "Guest User"}
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
              FoodZilla Gold Member since Dec 2025
            </p>
          </div>
          <Button className="rounded-2xl px-8 font-black uppercase tracking-widest gap-2">
            <Edit2 className="w-4 h-4" /> Edit Profile
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <h3 className="text-sm font-black text-brand-primary uppercase tracking-widest flex items-center gap-3">
              Personal Info
              <span className="h-px bg-brand-primary/10 flex-1" />
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Email Address</p>
                  <p className="font-bold text-brand-dark">{user?.email || "n/a"}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Phone Number</p>
                  <p className="font-bold text-brand-dark">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Birthday</p>
                  <p className="font-bold text-brand-dark">January 1, 1990</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-sm font-black text-brand-primary uppercase tracking-widest flex items-center gap-3">
              Account Stats
              <span className="h-px bg-brand-primary/10 flex-1" />
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-secondary/30 p-6 rounded-3xl">
                <p className="text-3xl font-black text-brand-primary mb-1">12</p>
                <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest opacity-60">Total Orders</p>
              </div>
              <div className="bg-brand-secondary/30 p-6 rounded-3xl">
                <p className="text-3xl font-black text-brand-primary mb-1">450</p>
                <p className="text-[10px] font-bold text-brand-dark uppercase tracking-widest opacity-60">Zilla Points</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
