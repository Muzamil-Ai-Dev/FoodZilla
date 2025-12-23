"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Check, Package, MapPin, Calendar, ArrowRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function OrderSuccessPage() {
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    // Generate a mock order ID
    setOrderId(`FZ-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
  }, []);

  return (
    <div className="bg-white min-h-[80vh] flex items-center py-12">
      <Container className="max-w-2xl text-center">
        {/* Success Icon Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
          className="w-32 h-32 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-primary/40 relative"
        >
          <Check className="w-16 h-16 text-white stroke-[4px]" />
          
          {/* Decorative Circles */}
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-4 border-brand-primary"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark mb-4 tracking-tight">
            ORDER CONFIRMED!
          </h1>
          <p className="text-xl text-gray-500 mb-12">
            Your delicious meal is being prepared and will be with you shortly.
          </p>

          {/* Order Details Card */}
          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10 mb-12 text-left grid md:grid-cols-2 gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
              <Package className="w-40 h-40 text-brand-dark" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Order Number</p>
                <p className="text-xl font-black text-brand-dark">{orderId}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Estimated Delivery</p>
                <p className="text-xl font-black text-brand-primary">25 - 35 Minutes</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Delivery to</p>
                  <p className="text-sm font-bold text-brand-dark">Home (123 Maple Street)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                  <Calendar className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Order Date</p>
                  <p className="text-sm font-bold text-brand-dark">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/account/orders">
              <Button className="w-full sm:w-auto h-16 px-10 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20">
                Track Order
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="outline" className="w-full sm:w-auto h-16 px-10 rounded-2xl text-lg font-bold flex items-center justify-center gap-2 border-2">
              <Share2 className="w-5 h-5" />
              Share Status
            </Button>
          </div>

          <p className="mt-12 text-sm text-gray-400 font-medium">
            A confirmation email has been sent to your registered address.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
