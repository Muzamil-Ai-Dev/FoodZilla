import Link from "next/link";
import { Container } from "../ui/container";
import { ShoppingCart, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="bg-brand-primary p-1.5 rounded-xl group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">foodzilla</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed max-w-xs">
              Delivering happiness to your doorstep with every meal. Join the food revolution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link href="/newsroom" className="hover:text-brand-primary transition-colors">Newsroom</Link></li>
              <li><Link href="/careers" className="hover:text-brand-primary transition-colors">Careers</Link></li>
              <li><Link href="/zilla-ads" className="hover:text-brand-primary transition-colors">Zilla Ads</Link></li>
              <li><Link href="/partner-with-us" className="hover:text-brand-primary transition-colors">Partner with us</Link></li>
            </ul>
          </div>

          {/* Popular Cuisines */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Cuisines</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/search?q=burgers" className="hover:text-brand-primary transition-colors">Burgers</Link></li>
              <li><Link href="/search?q=pizza" className="hover:text-brand-primary transition-colors">Pizza</Link></li>
              <li><Link href="/search?q=sushi" className="hover:text-brand-primary transition-colors">Sushi</Link></li>
              <li><Link href="/search?q=desserts" className="hover:text-brand-primary transition-colors">Desserts</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-brand-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact Support</Link></li>
              <li><Link href="/help" className="hover:text-brand-primary transition-colors">Help Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 FoodZilla. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
