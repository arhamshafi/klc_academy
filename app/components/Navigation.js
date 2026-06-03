"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Close mobile menu on window resize (if screen becomes desktop)
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Don't render until mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? "bg-black shadow-2xl"
        : "bg-transparent backdrop-blur-sm"
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">

            {/* Logo Section - Responsive */}
            <div className="flex justify-start gap-1 items-center">
              <figure className="flex items-center gap-2 sm:gap-3 shrink-0">
                <Image width={100} height={100} src={"/logo.webp"} alt="KLC Academy Building in Gujranwala" className="w-15" priority />
              </figure>
              <div className="">
                <h1 className={` ${isScrolled ? "text-blue-400" : "text-blue-600"} font-bold text-md `}>KeyStone Learning Center</h1>
                <p className={`font-mono ${isScrolled ? "text-white" : "text-black"} text-xs `}> Excellent Through Education </p>
              </div>
            </div>

            {/* Desktop Menu - Hidden on mobile, visible on md and up */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              {["Our Story", "Collaboration", "Courses", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className={`font-medium transition-all hover:scale-105 relative group text-sm lg:text-base ${isScrolled ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-900"
                    }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isScrolled ? "bg-white" : "bg-blue-900"
                    }`}></span>
                </a>
              ))}
              <button className={`relative px-4 py-2 lg:px-5 lg:py-2 rounded-full font-medium overflow-hidden group shadow-lg hover:shadow-xl transition-all text-sm lg:text-base ${isScrolled
                ? "bg-white text-black"
                : "bg-blue-900 text-white"
                }`}>
                <span className="relative z-10 whitespace-nowrap">Enroll Now →</span>
                <div className={`absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${isScrolled ? "bg-gray-200" : "bg-blue-800"
                  }`}></div>
              </button>
            </div>

            {/* Mobile Menu Button - Visible only on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition shrink-0"
              aria-label="Toggle menu"
            >
              <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? "text-white" : "text-gray-700"
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu - Slide down animation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}>
            <div className="space-y-3 pb-4">
              {["Our Story", "Collaboration", "Courses", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className={`block font-medium py-2 px-2 rounded-lg transition ${isScrolled
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className={`w-full py-2.5 rounded-full font-medium transition ${isScrolled
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-blue-900 text-white hover:bg-blue-800"
                }`}>
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add this to prevent content from hiding under fixed navbar */}
      <style jsx global>{`
        /* Add padding to body to prevent content from hiding under navbar */
        body {
          padding-top: 0;
        }
        
        /* For very small screens */
        @media (max-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }
        
        /* Custom breakpoint for extra small devices */
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }
        
        /* Smooth mobile menu animation */
        .max-h-96 {
          max-height: 24rem;
        }
      `}</style>
    </>
  );
}