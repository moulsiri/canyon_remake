"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const [footerHeight, setFooterHeight] = useState(0);
  const innerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (innerRef.current) {
        setFooterHeight(innerRef.current.offsetHeight);
      }
    };
    
    // Initial measurement + attach observer for responsive layout shifts
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    if (innerRef.current) {
      ro.observe(innerRef.current);
    }
    
    return () => ro.disconnect();
  }, []);

  return (
    <div 
      className="relative w-full overflow-hidden" 
      style={{ height: footerHeight || "auto" }}
    >
      <div className="fixed bottom-0 left-0 w-full z-[-1] pointer-events-auto">
        <footer 
          ref={innerRef}
          className="w-full bg-[#F4F4F1] dark:bg-stone-950 pt-16 md:pt-24 pb-8 flex flex-col items-center"
        >
          <div className="w-full max-w-[1400px] px-6 md:px-12 flex flex-col items-center">
            {/* LOGO */}
            <div className="mb-10 cursor-pointer">
              <h2
                className="text-2xl md:text-3xl text-[#b35930] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                CanyonRanch.
              </h2>
            </div>

            {/* 4-COLUMN LINK GRID */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-20 text-left">
              
              {/* COLUMN 1: RESERVATIONS */}
              <div className="flex flex-col gap-5">
                <h4 className="text-xs font-semibold tracking-[0.2em] text-stone-800 dark:text-stone-200 uppercase mb-2">
                  Reservations
                </h4>
                <div className="flex flex-col gap-4 text-sm text-stone-600 dark:text-stone-400 font-medium">
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">(866) 494-9279</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Contact Us</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">FAQs</span>
                </div>
              </div>

              {/* COLUMN 2: EXPLORE */}
              <div className="flex flex-col gap-5">
                <h4 className="text-xs font-semibold tracking-[0.2em] text-stone-800 dark:text-stone-200 uppercase mb-2">
                  Explore
                </h4>
                <div className="flex flex-col gap-4 text-sm text-stone-600 dark:text-stone-400 font-medium">
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Ways to Stay</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Events</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Day Pass</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Group & Corporate Stays</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Membership</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Shop</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Blog</span>
                </div>
              </div>

              {/* COLUMN 3: ABOUT */}
              <div className="flex flex-col gap-5">
                <h4 className="text-xs font-semibold tracking-[0.2em] text-stone-800 dark:text-stone-200 uppercase mb-2">
                  About
                </h4>
                <div className="flex flex-col gap-4 text-sm text-stone-600 dark:text-stone-400 font-medium">
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">About Us</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Meet Our Experts</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Leadership Team</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Careers</span>
                  <span className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors cursor-pointer">Travel Advisors</span>
                </div>
              </div>

              {/* COLUMN 4: ACTIONS & SOCIAL */}
              <div className="flex flex-col gap-6 pt-2">
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold tracking-[0.15em] text-[#b35930] uppercase border-b-2 border-[#b35930] pb-1 w-max cursor-pointer hover:opacity-80 transition-opacity">
                    SIGN UP FOR EMAIL
                  </span>
                  <span className="text-xs font-bold tracking-[0.15em] text-[#b35930] uppercase border-b-2 border-[#b35930] pb-1 w-max cursor-pointer hover:opacity-80 transition-opacity">
                    SIGN UP FOR MOBILE ALERTS
                  </span>
                </div>
                
                <div className="mt-6 flex flex-col gap-4">
                  <h4 className="text-xs font-semibold tracking-[0.2em] text-stone-800 dark:text-stone-200 uppercase">
                    SOCIAL
                  </h4>
                  <div className="flex items-center gap-4 text-[#b35930]">
                    <FacebookIcon className="w-5 h-5 cursor-pointer hover:opacity-75 transition-opacity" />
                    <LinkedinIcon className="w-5 h-5 cursor-pointer hover:opacity-75 transition-opacity" />
                    <InstagramIcon className="w-5 h-5 cursor-pointer hover:opacity-75 transition-opacity" />
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM METADATA BAR */}
            <div className="w-full flex flex-col items-center gap-6 border-t border-stone-300 dark:border-stone-700 pt-8 mt-4 text-xs font-medium text-stone-500 dark:text-stone-400">
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 px-4">
                <Link href="#" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Terms & Conditions</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="#" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Accessibility</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="#" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Privacy</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="#" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Legal</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="#" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Directory</Link>
                <span className="hidden sm:inline">|</span>
                <Link href="#" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Sitemap</Link>
              </div>
              
              <Link href="#" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">
                Cookie Settings
              </Link>

              <p className="font-light mt-2">© 2026 Canyon Ranch. All Rights Reserved.</p>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
