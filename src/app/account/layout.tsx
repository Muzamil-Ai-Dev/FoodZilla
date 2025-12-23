"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, ClipboardList, MapPin, Settings, Bell, CreditCard, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Profile", href: "/account", icon: User },
  { name: "Order History", href: "/account/orders", icon: ClipboardList },
  { name: "Saved Addresses", href: "/account/addresses", icon: MapPin },
  { name: "Payment Methods", href: "/account/payments", icon: CreditCard },
  { name: "Notifications", href: "/account/notifications", icon: Bell },
  { name: "Settings", href: "/account/settings", icon: Settings },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-2xl font-black text-brand-dark px-4 mb-6 uppercase italic">My Account</h2>
              <nav className="space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between group p-4 rounded-2xl transition-all font-bold",
                        isActive 
                          ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20" 
                          : "text-gray-500 hover:bg-brand-secondary/50 hover:text-brand-primary"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <link.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-gray-400 group-hover:text-brand-primary")} />
                        <span>{link.name}</span>
                      </div>
                      <ChevronRight className={cn("w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity", isActive && "opacity-100")} />
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </Container>
    </div>
  );
}
