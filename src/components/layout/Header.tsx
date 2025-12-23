"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, ShoppingCart, MapPin, X, Menu, User, Settings, ClipboardList, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useUIStore } from "@/lib/store/useUIStore";
import { useLocationStore } from "@/lib/store/useLocationStore";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { useSearchStore } from "@/lib/store/useSearchStore";
import { useCartStore } from "@/lib/store/useCartStore";
import { cn } from "@/lib/utils";
import * as Popover from "@radix-ui/react-popover";

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const setLocationModalOpen = useUIStore((state) => state.setLocationModalOpen);
  const toggleCart = useUIStore((state) => state.toggleCart);
  const currentLocation = useLocationStore((state) => state.currentLocation);
  
  const { query, setQuery, setFiltering } = useSearchStore();
  const { isAuthenticated, user, logout } = useAuthStore();
  const totalItems = useCartStore((state) => state.getTotalItems());
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  
  // Local state for search input to avoid hydration mismatch if query comes from persisted store
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Sync local search query with store after mount
    setSearchQuery(query);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [query]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setQuery(searchQuery); // Update store
      setFiltering(true);
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Newsroom", href: "/newsroom" },
    { name: "Partners", href: "/partner-with-us" },
    { name: "zilla ads", href: "/zilla-ads" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] w-full transition-all duration-200 ease-in-out border-b border-transparent dark:border-gray-800",
        isScrolled 
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-md py-2" 
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg py-3 md:py-4"
      )}
    >
      <Container className="flex items-center justify-between gap-2 md:gap-4 h-12 md:h-14">
        {isSearchOpen ? (
          <form onSubmit={onSearchSubmit} className="flex-1 flex items-center gap-3 md:gap-6 animate-in fade-in slide-in-from-right-5 duration-300">
            <Search className="w-5 h-5 text-brand-primary flex-shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for restaurants..."
              className="flex-1 text-base md:text-lg font-bold placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none bg-transparent text-brand-dark dark:text-white min-w-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex-shrink-0">
              <X className="w-5 h-5 md:w-6 md:h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </form>
        ) : (
          <>
            <div className="flex items-center gap-2 md:gap-8 min-w-0">
              {/* Mobile Hamburger */}
              <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 lg:hidden text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl flex-shrink-0">
                <Menu className="w-6 h-6 md:w-7 md:h-7" />
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-1.5 md:gap-2 mr-1 md:mr-2 group flex-shrink-0">
                <div className="bg-brand-primary p-1.5 rounded-lg md:rounded-xl shadow-md group-hover:scale-105 transition-transform">
                  <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-lg md:text-xl font-extrabold text-brand-primary tracking-tighter">foodzilla</span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-4 2xl:gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="group relative text-[13px] 2xl:text-[14px] font-bold text-gray-500 dark:text-gray-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors whitespace-nowrap"
                  >
                    {link.name}
                    {link.name === "zilla ads" && (
                      <span className="ml-1 text-[8px] bg-brand-primary text-white px-1 py-0.5 rounded-sm uppercase font-black animate-pulse">New</span>
                    )}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full rounded-full" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-5 flex-shrink-0">
              {/* Location Selector */}
              <button 
                onClick={() => setLocationModalOpen(true)} 
                className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all group"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-1.5 rounded-full group-hover:bg-white dark:group-hover:bg-gray-600 group-hover:shadow-sm transition-all">
                   <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-primary" />
                </div>
                <div className="text-left">
                  <span className="text-[8px] md:text-[10px] font-bold text-brand-primary uppercase tracking-wide block leading-none mb-0.5">Delivering to</span>
                  <span 
                    suppressHydrationWarning
                    className="text-[12px] md:text-sm font-bold text-brand-dark dark:text-white truncate max-w-[80px] md:max-w-[140px] block leading-none group-hover:text-brand-primary transition-colors"
                  >
                    {currentLocation?.address || "Choose location"}
                  </span>
                </div>
              </button>

              <div className="flex items-center gap-1.5 md:gap-4 sm:border-l border-gray-100 dark:border-gray-800 sm:pl-4 md:pl-6">
                {/* Search Trigger */}
                <button onClick={() => setIsSearchOpen(true)} className="p-2 md:p-2.5 hover:bg-brand-secondary dark:hover:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-brand-primary transition-colors">
                  <Search className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5px]" />
                </button>

                {/* Theme Toggle */}
                <ThemeToggle />

                {/* Auth */}
                <div className="hidden lg:flex items-center gap-2 min-w-[140px] justify-end">
                  {mounted && isAuthenticated ? (
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <button className="outline-none">
                          <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-brand-secondary dark:bg-gray-800 flex items-center justify-center border-2 border-transparent hover:border-brand-primary transition-all overflow-hidden shadow-sm">
                            {user?.avatarUrl ? <Image src={user.avatarUrl} alt={user.name || "User"} width={40} height={40} className="w-full h-full object-cover" /> : <User className="w-5 h-5 md:w-6 md:h-6 text-brand-dark dark:text-white" />}
                          </div>
                        </button>
                      </Popover.Trigger>
                      <Popover.Portal>
                        <Popover.Content className="z-[110] w-64 bg-white dark:bg-gray-900 rounded-[2rem] p-3 shadow-2xl border border-gray-100 dark:border-gray-800 animate-in fade-in zoom-in-95 duration-200" align="end" sideOffset={10}>
                          <div className="px-4 py-3 border-b border-gray-50 dark:border-gray-800 mb-2 text-brand-dark dark:text-white font-black truncate">{user?.name}</div>
                          <Link href="/account"><button className="w-full text-left px-4 py-2.5 rounded-2xl hover:bg-brand-secondary dark:hover:bg-gray-800 text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-3 transition-colors"><User className="w-4 h-4"/> Profile</button></Link>
                          <Link href="/account/orders"><button className="w-full text-left px-4 py-2.5 rounded-2xl hover:bg-brand-secondary dark:hover:bg-gray-800 text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-3 transition-colors"><ClipboardList className="w-4 h-4"/> My Orders</button></Link>
                          <Link href="/account/settings"><button className="w-full text-left px-4 py-2.5 rounded-2xl hover:bg-brand-secondary dark:hover:bg-gray-800 text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-3 transition-colors"><Settings className="w-4 h-4"/> Settings</button></Link>
                          <button onClick={() => { logout(); router.push("/"); }} className="w-full text-left px-4 py-2.5 rounded-2xl hover:bg-red-50 dark:hover:bg-red-900/10 text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-3 mt-1 border-t border-gray-50 dark:border-gray-800 pt-3"><LogOut className="w-4 h-4"/> Logout</button>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>
                  ) : (
                    <>
                      <Link href="/login"><Button variant="ghost" className="font-bold text-[10px] md:text-[11px] h-9 md:h-10 px-3 md:px-4 text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">Log in</Button></Link>
                      <Link href="/register"><Button className="rounded-xl px-4 md:px-5 font-bold text-[10px] md:text-[11px] h-9 md:h-10 shadow-lg shadow-brand-primary/20">Sign up</Button></Link>
                    </>
                  )}
                </div>

                {/* Cart */}
                <Button variant="primary" size="icon" className="relative rounded-full w-9 h-9 md:w-10 md:h-10 shadow-sm hover:scale-105 transition-transform flex-shrink-0" onClick={toggleCart}>
                  <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                  {mounted && totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-brand-dark text-white text-[9px] md:text-[10px] font-bold w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-900 shadow-sm animate-in zoom-in duration-300">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </>
        )}
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[200] w-screen h-dvh bg-white dark:bg-gray-950 p-6 space-y-8 animate-in slide-in-from-left duration-300 overflow-y-auto">
          <div className="flex items-center justify-between">
             <span className="text-xl font-black text-brand-primary uppercase italic">foodzilla</span>
             <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full"><X className="w-6 h-6 text-gray-500 dark:text-gray-400" /></button>
          </div>
          <nav className="grid gap-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-black text-brand-dark dark:text-white italic uppercase">{link.name}</Link>
            ))}
          </nav>
          <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-4">
             {!isAuthenticated ? (
               <>
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}><Button variant="outline" className="w-full py-6 rounded-2xl font-black uppercase tracking-widest text-brand-dark dark:text-white border-gray-200 dark:border-gray-800">Log In</Button></Link>
                  <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}><Button className="w-full py-6 rounded-2xl font-black uppercase tracking-widest">Sign Up</Button></Link>
               </>
             ) : (
               <button onClick={() => { logout(); setIsMobileMenuOpen(false); router.push("/"); }} className="text-xl font-black text-red-600 dark:text-red-400 italic uppercase">Logout</button>
             )}
          </div>
        </div>
      )}
    </header>
  );
};
