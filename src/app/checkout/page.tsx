"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
  MapPin, 
  Clock, 
  CreditCard, 
  Wallet, 
  ChevronRight, 
  ShoppingBag,
  Info,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/useCartStore";
import { useAuthStore } from "@/lib/store/useAuthStore";
import { useNotificationStore } from "@/lib/store/useNotificationStore";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SAVED_ADDRESSES = [
  { id: "1", type: "Home", address: "123 Maple Street, Springfield", icon: MapPin },
  { id: "2", type: "Work", address: "456 Corporate Plaza, Downtown", icon: MapPin },
];

const DELIVERY_TIMES = [
  { id: "standard", label: "Standard", time: "25-35 min", price: 2.99 },
  { id: "priority", label: "Priority", time: "15-25 min", price: 4.99 },
];

const PAYMENT_METHODS = [
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "cash", label: "Cash on Delivery", icon: Wallet },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const { items, getSubtotal, clearCart, activeRestaurantName } = useCartStore();
  const { addNotification } = useNotificationStore();
  
  const [mounted, setMounted] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(SAVED_ADDRESSES[0].id);
  const [selectedTime, setSelectedTime] = useState(DELIVERY_TIMES[0].id);
  const [selectedPayment, setSelectedPayment] = useState(PAYMENT_METHODS[0].id);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (mounted && !isAuthenticated) {
      router.push("/login?redirect=/checkout");
    }
  }, [mounted, isAuthenticated, router]);

  if (!mounted) return null;

  const subtotal = getSubtotal();
  const deliveryFee = DELIVERY_TIMES.find(t => t.id === selectedTime)?.price || 0;
  const serviceFee = 1.50;
  const tax = subtotal * 0.1;
  const total = subtotal + deliveryFee + serviceFee + tax;

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    // Simulate API call
    setTimeout(() => {
      clearCart();
      addNotification("Order Placed Successfully! Your food is on the way.", "success");
      router.push("/checkout/success");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <Container className="py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-brand-primary" />
          </div>
          <h1 className="text-3xl font-bold text-brand-dark mb-4">Your cart is empty</h1>
          <p className="text-gray-500 mb-8">You need to add items to your cart before checking out.</p>
          <Link href="/restaurants">
            <Button className="rounded-2xl px-8 h-12 text-lg">Browse Restaurants</Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12 pt-8">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <Link href="/restaurants" className="text-sm font-bold text-brand-primary hover:underline">
                Back to Restaurants
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-500">Checkout</span>
            </div>
            
            <h1 className="text-4xl font-black text-brand-dark tracking-tight mb-8">
              CHECKOUT
            </h1>

            {/* Delivery Address Section */}
            <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-secondary rounded-xl flex items-center justify-center text-brand-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-brand-dark">Delivery Address</h2>
              </div>
              
              <div className="grid gap-4">
                {SAVED_ADDRESSES.map((addr) => (
                  <button
                    key={addr.id}
                    onClick={() => setSelectedAddress(addr.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all",
                      selectedAddress === addr.id 
                        ? "border-brand-primary bg-brand-secondary/20" 
                        : "border-gray-100 hover:border-brand-primary/30"
                    )}
                  >
                    <div className={cn(
                      "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                      selectedAddress === addr.id ? "border-brand-primary" : "border-gray-300"
                    )}>
                      {selectedAddress === addr.id && <div className="w-2 h-2 rounded-full bg-brand-primary" />}
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark">{addr.type}</p>
                      <p className="text-sm text-gray-500">{addr.address}</p>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Delivery Time Section */}
            <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-brand-dark">Delivery Time</h2>
              </div>

              <div className="flex flex-wrap gap-4">
                {DELIVERY_TIMES.map((time) => (
                  <button
                    key={time.id}
                    onClick={() => setSelectedTime(time.id)}
                    className={cn(
                      "flex-1 min-w-[150px] p-4 rounded-2xl border-2 text-center transition-all",
                      selectedTime === time.id 
                        ? "border-brand-primary bg-brand-secondary/20" 
                        : "border-gray-100 hover:border-brand-primary/30"
                    )}
                  >
                    <p className="font-bold text-brand-dark">{time.label}</p>
                    <p className="text-sm text-gray-500">{time.time}</p>
                    <p className="text-xs font-bold text-brand-primary mt-1">${time.price}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Payment Method Section */}
            <section className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-brand-dark">Payment Method</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {PAYMENT_METHODS.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all",
                      selectedPayment === method.id 
                        ? "border-brand-primary bg-brand-secondary/20" 
                        : "border-gray-100 hover:border-brand-primary/30"
                    )}
                  >
                    <method.icon className={cn(
                      "w-6 h-6",
                      selectedPayment === method.id ? "text-brand-primary" : "text-gray-400"
                    )} />
                    <span className="font-bold text-brand-dark">{method.label}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar / Summary */}
          <div className="lg:w-[400px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-brand-dark rounded-[2.5rem] p-8 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <p className="text-white/50 text-sm">From {activeRestaurantName}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-brand-primary font-black text-sm">{item.quantity}x</span>
                        <span className="text-sm font-bold truncate">{item.name}</span>
                      </div>
                      <span className="text-sm font-bold flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-8 border-t border-white/10 mb-8">
                  <div className="flex justify-between text-white/60 text-sm font-medium">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/60 text-sm font-medium">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/60 text-sm font-medium">
                    <span>Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/60 text-sm font-medium">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <span className="text-lg font-bold text-white/60">Total Amount</span>
                  <span className="text-4xl font-black text-brand-primary">${total.toFixed(2)}</span>
                </div>

                <Button 
                  onClick={handlePlaceOrder}
                  disabled={isPlacingOrder}
                  className="w-full h-16 rounded-2xl text-lg font-black uppercase tracking-widest bg-brand-primary hover:bg-brand-primary/90 text-white shadow-xl shadow-brand-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100"
                >
                  {isPlacingOrder ? (
                    <div className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <AlertCircle className="w-5 h-5" />
                      </motion.div>
                      Processing...
                    </div>
                  ) : "Place Order"}
                </Button>

                <p className="text-center text-[10px] text-white/40 mt-6 px-4 uppercase font-bold tracking-widest leading-relaxed">
                  By placing your order, you agree to FoodZilla&apos;s 
                  <Link href="/terms" className="text-brand-primary hover:underline"> Terms of Service</Link>
                </p>
              </div>

              {/* Promo Section */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-brand-secondary rounded-lg flex items-center justify-center">
                    <Info className="w-4 h-4 text-brand-primary" />
                  </div>
                  <h3 className="font-bold text-brand-dark">Got a promo code?</h3>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Enter code" 
                    className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-primary/20 outline-none"
                  />
                  <Button variant="outline" className="rounded-xl font-bold">Apply</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
