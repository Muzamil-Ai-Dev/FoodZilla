"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ClipboardList, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Search", icon: Search, href: "/search" },
  { label: "Orders", icon: ClipboardList, href: "/account/orders" },
  { label: "Profile", icon: User, href: "/account" },
];

export const MobileNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 md:hidden pb-safe">
      <div className="flex justify-around items-center h-16">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors",
                isActive ? "text-brand-primary" : "text-gray-400"
              )}
            >
              <Icon className={cn("w-6 h-6", isActive && "stroke-[2.5px]")} />
              <span className="text-[10px] font-medium uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
