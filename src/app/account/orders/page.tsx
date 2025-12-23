"use client";

import { MOCK_ORDERS } from "@/lib/mock-data";
import { Order } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight, Calendar, ArrowRight, Clock, CheckCircle2, XCircle, Package } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const StatusBadge = ({ status }: { status: Order['status'] }) => {
  const configs = {
    delivered: { color: "text-green-600 bg-green-50", icon: CheckCircle2, label: "Delivered" },
    processing: { color: "text-brand-primary bg-brand-secondary/40", icon: Clock, label: "Processing" },
    cancelled: { color: "text-red-600 bg-red-50", icon: XCircle, label: "Cancelled" },
  };

  const config = configs[status];
  const Icon = config.icon;

  return (
    <span className={cn(
      "flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
      config.color
    )}>
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
};

export default function OrdersPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-2 px-4">
        <h1 className="text-3xl font-black text-brand-dark uppercase italic tracking-tighter">Order History</h1>
        <div className="bg-brand-secondary/40 px-4 py-1.5 rounded-2xl">
          <span className="text-xs font-black text-brand-primary uppercase tracking-widest">{MOCK_ORDERS.length} Orders</span>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_ORDERS.map((order) => (
          <div 
            key={order.id} 
            className="bg-white rounded-[2.5rem] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Image & Main Info */}
              <div className="flex gap-4 flex-1">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <Image src={order.restaurantImage} alt={order.restaurantName} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-black text-xl text-brand-dark truncate group-hover:text-brand-primary transition-colors">
                      {order.restaurantName}
                    </h3>
                    <StatusBadge status={order.status} />
                  </div>
                  <div className="flex items-center gap-4 text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{order.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{order.items.length} Items</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center gap-4 border-t md:border-t-0 md:border-l border-gray-50 pt-4 md:pt-0 md:pl-8">
                <div className="text-right">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Total Amount</p>
                  <p className="text-2xl font-black text-brand-dark">${order.total.toFixed(2)}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="rounded-xl font-bold text-xs h-10 border-2">Details</Button>
                  <Button className="rounded-xl font-bold text-xs h-10 px-6 shadow-lg shadow-brand-primary/20">Reorder</Button>
                </div>
              </div>
            </div>

            {/* Items Summary (Expandable or truncated) */}
            <div className="mt-6 pt-6 border-t border-gray-50 flex flex-wrap gap-2">
              {order.items.map((item: any, i: number) => (
                <span key={i} className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg">
                  {item.quantity}x {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {MOCK_ORDERS.length === 0 && (
        <div className="bg-white rounded-[2.5rem] p-12 text-center border border-dashed border-gray-200">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Package className="w-10 h-10 text-gray-300" />
          </div>
          <h3 className="text-2xl font-black text-brand-dark mb-2 uppercase italic">No orders yet</h3>
          <p className="text-gray-400 font-bold mb-8">Ready to order your first meal?</p>
          <Button className="rounded-2xl px-10 h-14 text-lg font-black uppercase tracking-widest shadow-xl shadow-brand-primary/20">
            Find Food
          </Button>
        </div>
      )}
    </div>
  );
}
