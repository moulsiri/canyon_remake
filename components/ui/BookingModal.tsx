"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronRight, Minus, Plus, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

type BookingView = "MAIN" | "LOCATION" | "PACKAGE" | "DATES";

export default function BookingModal() {
  const { isBookingModalOpen, setIsBookingModalOpen } = useGlobalContext();

  const [view, setView] = useState<BookingView>("MAIN");
  const [guests, setGuests] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  
  // Date selection states (mock implementation)
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  // Scroll Lock Effect
  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isBookingModalOpen]);

  // Close completely and reset
  const handleClose = () => {
    setIsBookingModalOpen(false);
    setTimeout(() => setView("MAIN"), 300);
  };

  const LOCATIONS = [
    { id: "tucson", name: "Tucson, AZ", img: "https://images.unsplash.com/photo-1549429402-4fc514f77247?w=150&h=150&fit=crop" },
    { id: "lenox", name: "Lenox, MA", img: "https://images.unsplash.com/photo-1590559899731-a382839cecdf?w=150&h=150&fit=crop" },
    { id: "austin", name: "Austin, TX", img: "https://images.unsplash.com/photo-1531218150217-5afc66b55979?w=150&h=150&fit=crop" }
  ];

  const PACKAGES = [
    { id: "wellness", name: "Wellness Retreat", desc: "A perfectly balanced introduction to wellness." },
    { id: "detox", name: "Detox & Reset", desc: "Flush toxins and revitalize your system." },
    { id: "fitness", name: "Optimal Fitness", desc: "Push boundaries and elevate your strength." }
  ];

  return (
    <AnimatePresence>
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[#FDFDFD] w-full max-w-[420px] rounded shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header Area */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                {view !== "MAIN" && (
                  <button onClick={() => setView("MAIN")} className="hover:opacity-60 transition text-stone-500">
                    <ArrowLeft strokeWidth={1.5} size={20} />
                  </button>
                )}
                <h3 className="text-xl md:text-2xl text-[#2a3040] uppercase tracking-widest" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {view === "MAIN" && "BOOK YOUR STAY TODAY"}
                  {view === "LOCATION" && "Choose a Location"}
                  {view === "PACKAGE" && "Choose a Package"}
                  {view === "DATES" && "Stay Dates"}
                </h3>
              </div>
              <button 
                onClick={handleClose}
                className="text-stone-500 hover:text-black transition"
              >
                <X strokeWidth={1} size={24} />
              </button>
            </div>

            {/* Content Area */}
            <div className="px-6 py-4 flex-1 min-h-[400px] overflow-y-auto max-h-[80vh]">
              
              {/* --- VIEW: MAIN --- */}
              {view === "MAIN" && (
                <div className="flex flex-col gap-6">
                  {/* Selectors Group */}
                  <div className="border border-stone-200 divide-y divide-stone-200 text-[#b35930] font-light">
                    
                    {/* Location */}
                    <button 
                      onClick={() => setView("LOCATION")}
                      className="w-full flex items-center justify-between px-4 py-4 hover:bg-stone-50 transition"
                    >
                      {selectedLocation ? (
                        <div className="text-left flex flex-col">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#2a3040]">Location</span>
                          <span className="text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>{selectedLocation}</span>
                        </div>
                      ) : (
                        <span className="text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>Choose a Location</span>
                      )}
                      
                      <div className="flex items-center gap-2">
                        {selectedLocation && (
                          <div 
                            onClick={(e) => { e.stopPropagation(); setSelectedLocation(null); }}
                            className="bg-[#942721] rounded-full w-4 h-4 flex items-center justify-center text-white cursor-pointer hover:opacity-80"
                          >
                            <X size={10} strokeWidth={3} />
                          </div>
                        )}
                        <ChevronRight strokeWidth={1} size={18} className="text-stone-700" />
                      </div>
                    </button>

                    {/* Package */}
                    <button 
                      onClick={() => setView("PACKAGE")}
                      className="w-full flex items-center justify-between px-4 py-4 hover:bg-stone-50 transition"
                    >
                      {selectedPackage ? (
                        <div className="text-left flex flex-col">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#2a3040]">Package</span>
                          <span className="text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>{selectedPackage}</span>
                        </div>
                      ) : (
                        <span className="text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>Choose a Package Stay</span>
                      )}
                      
                      <div className="flex items-center gap-2">
                        {selectedPackage && (
                          <div 
                            onClick={(e) => { e.stopPropagation(); setSelectedPackage(null); }}
                            className="bg-[#942721] rounded-full w-4 h-4 flex items-center justify-center text-white cursor-pointer hover:opacity-80"
                          >
                            <X size={10} strokeWidth={3} />
                          </div>
                        )}
                        <ChevronRight strokeWidth={1} size={18} className="text-stone-700" />
                      </div>
                    </button>

                    {/* Dates */}
                    <button 
                      onClick={() => setView("DATES")}
                      className="w-full flex items-center justify-between px-4 py-4 hover:bg-stone-50 transition"
                    >
                      <span className="text-lg text-stone-500" style={{ fontFamily: "var(--font-cormorant)" }}>
                        {selectedDate ? `Aug ${selectedDate}, 2026` : "Choose Stay Dates"}
                      </span>
                      <ChevronRight strokeWidth={1} size={18} className="text-stone-700" />
                    </button>

                    {/* Guests */}
                    <div className="w-full flex items-center justify-between px-4 py-4 text-[#2a3040]">
                      <span className="text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>Guests</span>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => setGuests(Math.max(1, guests - 1))}
                          className="hover:opacity-60 transition"
                        >
                          <Minus strokeWidth={1.5} size={20} />
                        </button>
                        <div className="border border-stone-200 w-10 text-center py-1 text-sm text-[#b35930]">{guests}</div>
                        <button 
                          onClick={() => setGuests(guests + 1)}
                          className="hover:opacity-60 transition"
                        >
                          <Plus strokeWidth={1.5} size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Continue Booking */}
                  <button className="w-full bg-[#cc957d] hover:bg-[#b07d67] transition-colors py-4 text-white text-[13px] tracking-widest font-bold uppercase flex items-center justify-center gap-2">
                    Continue Booking
                    <ChevronRight size={16} strokeWidth={2} />
                  </button>

                  <p className="text-[#b35930] text-center text-sm px-4" style={{ fontFamily: "var(--font-cormorant)" }}>
                    <span className="text-stone-700">Unsure where to start? Explore</span><br/>
                    Our First Timers Guide <span className="text-stone-700">or Call</span><br/>
                    (844) 417-9315
                  </p>
                </div>
              )}

              {/* --- VIEW: LOCATION --- */}
              {view === "LOCATION" && (
                <div className="flex flex-col gap-4">
                  {LOCATIONS.map((loc) => (
                    <div 
                      key={loc.id}
                      onClick={() => {
                        setSelectedLocation(loc.name);
                        setView("MAIN");
                      }}
                      className="flex items-center gap-6 cursor-pointer hover:bg-stone-50 p-2 rounded transition"
                    >
                      <div className="relative w-20 h-24 rounded overflow-hidden">
                        <img src={loc.img} alt={loc.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[#2a3040] text-xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                        {loc.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* --- VIEW: PACKAGE --- */}
              {view === "PACKAGE" && (
                <div className="flex flex-col gap-4">
                  {PACKAGES.map((pkg) => (
                    <div 
                      key={pkg.id}
                      onClick={() => {
                        setSelectedPackage(pkg.name);
                        setView("MAIN");
                      }}
                      className="flex flex-col gap-1 cursor-pointer hover:bg-stone-50 p-4 border border-transparent hover:border-stone-200 rounded transition"
                    >
                      <span className="text-[#2a3040] text-xl" style={{ fontFamily: "var(--font-cormorant)" }}>
                        {pkg.name}
                      </span>
                      <span className="text-xs text-stone-500 tracking-wide leading-relaxed">
                        {pkg.desc}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* --- VIEW: DATES --- */}
              {view === "DATES" && (
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <button className="text-stone-400 hover:text-stone-800 transition"><ArrowLeft size={16} strokeWidth={1} /></button>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-[#2a3040]">August 2026</span>
                    <button className="text-stone-700 hover:text-stone-900 transition"><ChevronRight size={16} strokeWidth={1} /></button>
                  </div>
                  
                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 text-center text-[10px] uppercase tracking-widest text-[#2a3040] font-bold mb-4">
                    <div>SU</div><div>MO</div><div>TU</div><div>WE</div><div>TH</div><div>FR</div><div>SA</div>
                  </div>
                  <div className="grid grid-cols-7 text-center text-sm gap-y-4 font-medium">
                    {[26, 27, 28, 29, 30, 31].map(n => <div key={'prev'+n} className="text-stone-300">{n}</div>)}
                    {[1,2,3,4,5,6,7].map(n => <div key={n} className="text-stone-300">{n}</div>)}
                    {[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(n => (
                      <div 
                        key={n} 
                        onClick={() => setSelectedDate(n)}
                        className={`cursor-pointer w-8 h-8 mx-auto flex flex-col items-center justify-center transition-all ${
                          selectedDate === n ? "text-[#b35930] font-bold" : "text-[#2a3040] hover:bg-stone-100 rounded-full"
                        }`}
                      >
                        {n}
                        {selectedDate === n && <div className="w-1 h-1 bg-[#b35930] rounded-full mt-0.5" />}
                      </div>
                    ))}
                    {[1,2,3,4,5].map(n => <div key={'next'+n} className="text-[#2a3040]">{n}</div>)}
                  </div>

                  <div className="mt-8 border-t border-dotted border-stone-300 pt-6 flex items-center justify-between gap-4">
                    <button onClick={() => setView("MAIN")} className="flex-1 py-3 text-[#b35930] text-xs font-bold tracking-widest uppercase">
                      CANCEL
                    </button>
                    <button onClick={() => setView("MAIN")} className="flex-1 py-3 border border-[#b35930] text-[#cc957d] text-xs font-bold tracking-widest uppercase">
                      CONFIRM
                    </button>
                  </div>

                  <p className="mt-6 text-[#2a3040] text-center text-[17px] leading-relaxed" style={{ fontFamily: "var(--font-cormorant)" }}>
                    Want something different? We can design an experience that is as individual as you and your goals, call <span className="text-[#b35930] font-medium">(844) 417-9315</span>
                  </p>
                </div>
              )}

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
