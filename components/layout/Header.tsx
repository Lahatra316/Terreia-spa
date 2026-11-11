// components/layout/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Nos Soins", href: "/soins" },
    { name: "Formules", href: "/formules" },
    { name: "Terreia Saveur", href: "/terreia-saveur" },
    { name: "À Propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  const activeLink = navLinks.find(link => link.href === pathname) || navLinks[0];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // OPTIMISATION DU SCROLL : requestAnimationFrame pour éviter les saccades
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      
      const currentScrollY = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
            setIsCollapsed(true);
          } else if (currentScrollY < lastScrollY.current || currentScrollY <= 120) {
            setIsCollapsed(false);
          }
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* 
        LA CLÉ DE LA PERFORMANCE : On utilise plus Framer Motion pour la structure.
        On utilise des transitions CSS natives (beaucoup plus rapides).
      */}
      <header
        onClick={() => {
          if (isCollapsed) {
            setIsCollapsed(false);
            setIsMobileMenuOpen(false);
          }
        }}
        className={`fixed top-4 z-50 bg-[#0a160c]/90 backdrop-blur-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/10 rounded-full overflow-hidden transform-gpu transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isCollapsed 
            ? "left-4 w-[210px] h-[64px] cursor-pointer hover:bg-[#122416]" 
            : "left-1/2 -translate-x-1/2 w-[95%] max-w-[1280px] h-[80px]"
        }`}
      >
        <div className="h-full px-6 lg:px-8 flex items-center justify-between relative">
          
          {/* Logo */}
          <div className="flex items-center shrink-0 z-10 w-1/4">
            <Link href="/" className="flex flex-col group">
              <span className={`font-headline-md tracking-tight text-white group-hover:text-[#fcb797] transition-colors duration-300 leading-none ${
                isCollapsed ? "text-[18px]" : "text-[24px]"
              }`}>
                Terreia
              </span>
              
              <div className="h-4 flex items-center mt-1 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={isCollapsed ? activeLink.name : "Spa Sanctuaire"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`font-label-sm uppercase text-[#fcb797]/80 truncate max-w-[150px] ${
                      isCollapsed ? "tracking-[0.1em] text-[9px]" : "tracking-[0.3em] text-[10px]"
                    }`}
                  >
                    {isCollapsed ? activeLink.name : "Spa Sanctuaire"}
                  </motion.span>
                </AnimatePresence>
              </div>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <div className={`hidden lg:flex items-center justify-center flex-1 transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}>
            <nav className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} className="relative block">
                    <div
                      className={`relative whitespace-nowrap font-label-md text-[11px] tracking-wider uppercase px-5 py-2.5 rounded-full transition-colors duration-300 flex items-center justify-center hover:scale-105 active:scale-95 transform-gpu ${
                        isActive 
                          ? "text-[#fcb797] font-semibold" 
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 bg-white/10 rounded-full shadow-[0_0_15px_rgba(252,183,151,0.2)]"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bouton Mobile */}
          <div className={`flex lg:hidden items-center justify-end z-10 transition-opacity duration-300 ${
            isCollapsed ? "w-full" : "w-1/4"
          }`}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (!isMobileMenuOpen) setIsCollapsed(false);
              }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:scale-110 active:scale-90 transform-gpu"
            >
              <div className={`transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.95 }}
              transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
              className="fixed top-[100px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-[#0a160c]/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden z-50 lg:hidden"
            >
              <div className="p-3 flex flex-col gap-1">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
                    >
                      <Link href={link.href}>
                        <div
                          className={`flex items-center justify-between py-4 px-5 rounded-2xl text-sm font-label-md uppercase tracking-widest transition-all active:scale-95 ${
                            isActive
                              ? "bg-white/10 text-[#fcb797] font-semibold border border-white/10"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.name}
                          {isActive && (
                            <ChevronRight className="w-4 h-4 text-[#fcb797]" />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}