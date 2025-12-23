"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Navigation } from "lucide-react";
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalTitle, 
  ModalDescription 
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { useLocationStore } from "@/lib/store/useLocationStore";
import { useUIStore } from "@/lib/store/useUIStore";

export const LocationModal = () => {
  const [mounted, setMounted] = useState(false);
  const { isLocationModalOpen, setLocationModalOpen } = useUIStore();
  const { setLocation, currentLocation } = useLocationStore();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSelectLocation = (address: string) => {
    setLocation({ address, city: "London" }); // Mock city
    setLocationModalOpen(false);
  };

  const handleCurrentLocation = () => {
     handleSelectLocation("Current Location (Detected)");
  };

  const mockSuggestions = [
    "Oxford Street, London",
    "Baker Street, London",
    "Piccadilly Circus, London",
    "King's Cross Station, London",
  ].filter(s => s.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Modal open={isLocationModalOpen} onOpenChange={setLocationModalOpen}>
      <ModalContent className="sm:max-w-[500px]">
        <ModalHeader>
          <ModalTitle>Set your delivery location</ModalTitle>
          <ModalDescription>
            Enter your address to see restaurants delivering to you.
          </ModalDescription>
        </ModalHeader>

        <div className="space-y-6 pt-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search for street, city, or area..."
              className="w-full pl-10 pr-4 py-3 bg-brand-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Current Location Button */}
          <Button 
            variant="outline" 
            className="w-full justify-start gap-3 py-6 rounded-xl border-gray-100 hover:bg-brand-secondary"
            onClick={handleCurrentLocation}
          >
            <Navigation className="w-5 h-5 text-brand-primary" />
            <div className="text-left">
              <div className="font-semibold text-sm">Use current location</div>
              <div className="text-xs text-gray-500">Enable location access for better results</div>
            </div>
          </Button>

          {/* Suggestions */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Suggestions
            </h4>
            {mockSuggestions.length > 0 ? (
              mockSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSelectLocation(suggestion)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-brand-secondary transition-colors text-left"
                >
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium">{suggestion}</span>
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">No results found.</p>
            )}
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
};