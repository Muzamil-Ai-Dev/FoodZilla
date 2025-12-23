import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { LocationModal } from "@/components/features/location/LocationModal";
import { NotificationToast } from "@/components/ui/NotificationToast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins" 
});

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const metadata: Metadata = {
  title: {
    template: "%s | FoodZilla",
    default: "FoodZilla | Delivering Happiness to Your Doorstep",
  },
  description: "Experience the fastest food delivery with FoodZilla. Order from your favorite restaurants today.",
  openGraph: {
    title: "FoodZilla",
    description: "Fast and reliable food delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, poppins.variable, "font-sans antialiased bg-white")}>
        <Header />
        <main className="min-h-screen pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <LocationModal />
        <NotificationToast />
      </body>
    </html>
  );
}

