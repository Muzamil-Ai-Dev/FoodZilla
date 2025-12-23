"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag, X } from "lucide-react";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription 
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { MenuItem, RestaurantExtended } from "@/lib/mock-data";
import { useCartStore } from "@/lib/store/useCartStore";
import { useNotificationStore } from "@/lib/store/useNotificationStore";

interface ModalProps {
  item: MenuItem | null;
  restaurant: RestaurantExtended;
  isOpen: boolean;
  onClose: () => void;
}

export const ItemModal = ({ item, restaurant, isOpen, onClose }: ModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState<Record<string, string | string[]>>({});
  const { addItem, activeRestaurantId, clearCart } = useCartStore();
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    if (isOpen) {
      setQuantity(1);
      setOptions({});
    }
  }, [isOpen]);

  if (!item) return null;

  const handleAddToCart = () => {
    const cartItem = {
      id: `${item.id}-${Math.random().toString(36).substr(2, 9)}`, // Unique instance
      name: item.name,
      price: item.price,
      quantity,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      image: item.image,
      options,
    };

    const result = addItem(cartItem);

    if (result.success) {
      addNotification(`Added ${quantity}x ${item.name} to cart`);
      onClose();
    } else {
      // Trigger "Clear Cart" Guard logic
      if (confirm(result.error)) {
        clearCart();
        addItem(cartItem);
        addNotification(`Cart cleared and ${item.name} added`);
        onClose();
      }
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <ModalContent className="sm:max-w-[600px] p-0 overflow-hidden border-none rounded-[3rem]">
        <div className="relative h-64 w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-brand-dark uppercase italic tracking-tighter mb-2">
              {item.name}
            </h2>
            <p className="text-gray-500 font-bold leading-relaxed">{item.description}</p>
          </div>

          <div className="max-h-[300px] overflow-y-auto pr-2 space-y-10 custom-scrollbar">
            {item.optionGroups?.map((group) => (
              <div key={group.id}>
                <h3 className="text-sm font-black text-brand-primary uppercase tracking-widest mb-6 flex items-center gap-3">
                  {group.name}
                  <span className="h-px bg-brand-primary/10 flex-1" />
                  <span className="text-[10px] bg-brand-primary/5 px-2 py-0.5 rounded text-brand-primary lowercase font-bold italic">
                    {group.type === 'radio' ? 'Required' : 'Optional'}
                  </span>
                </h3>

                {group.type === "radio" ? (
                  <RadioGroup 
                    onValueChange={(val) => setOptions({ ...options, [group.id]: val })}
                    className="space-y-4"
                  >
                    {group.options.map((opt) => (
                      <div key={opt.id} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value={opt.id} id={opt.id} />
                          <label htmlFor={opt.id} className="font-bold text-gray-700 cursor-pointer group-hover:text-brand-primary transition-colors">
                            {opt.name}
                          </label>
                        </div>
                        {opt.price > 0 && (
                          <span className="text-sm font-black text-brand-dark">+${opt.price.toFixed(2)}</span>
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <div className="space-y-4">
                    {group.options.map((opt) => (
                      <div key={opt.id} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3">
                          <Checkbox 
                            id={opt.id}
                            onCheckedChange={(checked) => {
                              const current = (options[group.id] as string[]) || [];
                              const next = checked 
                                ? [...current, opt.id]
                                : current.filter(id => id !== opt.id);
                              setOptions({ ...options, [group.id]: next });
                            }}
                          />
                          <label htmlFor={opt.id} className="font-bold text-gray-700 cursor-pointer group-hover:text-brand-primary transition-colors">
                            {opt.name}
                          </label>
                        </div>
                        {opt.price > 0 && (
                          <span className="text-sm font-black text-brand-dark">+${opt.price.toFixed(2)}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-2xl">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-brand-dark hover:text-brand-primary transition-colors disabled:opacity-50"
                disabled={quantity <= 1}
              >
                <Minus className="w-5 h-5 stroke-[3px]" />
              </button>
              <span className="w-8 text-center font-black text-xl text-brand-dark">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-brand-dark hover:text-brand-primary transition-colors"
              >
                <Plus className="w-5 h-5 stroke-[3px]" />
              </button>
            </div>

            <Button 
              onClick={handleAddToCart}
              className="flex-1 h-14 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-brand-primary/20"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart — ${(item.price * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};
