"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { useUIStore } from "@/lib/store/useUIStore";
import { useCartStore } from "@/lib/store/useCartStore";
import { cn } from "@/lib/utils";

export const CartDrawer = () => {
  const { isCartOpen, setCartOpen } = useUIStore();
  const { 
    items, 
    updateQuantity, 
    removeItem, 
    getSubtotal, 
    activeRestaurantName,
    getFreeDeliveryProgress 
  } = useCartStore();

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const subtotal = getSubtotal();
  const { remaining, percentage } = getFreeDeliveryProgress();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[150]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[151] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h2 className="text-xl font-bold text-brand-dark">Your Cart</h2>
                {activeRestaurantName && (
                  <p className="text-sm text-gray-500">From {activeRestaurantName}</p>
                )}
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length > 0 ? (
                <div className="space-y-6">
                  {/* Delivery Progress */}
                  <div className="bg-brand-secondary/30 p-4 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold text-brand-dark">
                        {remaining > 0 
                          ? `Add $${remaining.toFixed(2)} more for free delivery` 
                          : "You've unlocked free delivery!"}
                      </span>
                      <ShoppingBag className="w-4 h-4 text-brand-primary" />
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        className="h-full bg-brand-primary"
                      />
                    </div>
                  </div>

                  {/* Items List */}
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4 group">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-bold text-brand-dark truncate pr-2">
                              {item.name}
                            </h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm text-brand-primary font-bold mb-3">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          
                          <div className="flex items-center gap-3">
                            <div className="flex items-center bg-gray-50 rounded-lg p-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all"
                              >
                                <Minus className="w-3 h-3 text-gray-600" />
                              </button>
                              <span className="w-8 text-center text-sm font-bold text-brand-dark">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 hover:bg-white hover:shadow-sm rounded-md transition-all"
                              >
                                <Plus className="w-3 h-3 text-gray-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-brand-secondary rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-12 h-12 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-8">
                    Looks like you haven&apos;t added any items yet.
                  </p>
                  <Button
                    onClick={() => setCartOpen(false)}
                    className="rounded-2xl px-8"
                  >
                    Browse Restaurants
                  </Button>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t bg-gray-50/50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-brand-dark">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
                <Link href="/checkout" onClick={() => setCartOpen(false)}>
                  <Button className="w-full py-6 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 group shadow-xl shadow-brand-primary/20">
                    Go to Checkout
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
