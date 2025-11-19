"use client";

import React, { useCallback, useEffect, useState, useMemo } from "react";
import Image from "next/image";
import gtmlogonew from "../Assets/gtmlogonew.png";
import { Button } from "../Component/Button/Button.jsx";
import { Typography } from "../Component/Typography/Typography.jsx";
import Link from "next/link";
import { useRouter } from "next/router";


const TOPBAR_CONTAINER = "w-full flex justify-center px-4 sm:px-6 lg:px-10 py-6 lg:py-10 mt-0";
const TOPBAR_HEADER = "w-full flex justify-center";
const TOPBAR_DIV = "topbar w-full max-w-7xl relative";
const MAIN_NAV = "transition-all duration-300 rounded-2xl border shadow-2xl bg-[#13142d]/95 backdrop-blur-xl border-white/10 relative";
const NAVBAR_INNER = "flex items-center justify-between px-4 sm:px-6 py-4";

const TopBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navigationItems = useMemo(
    () => [
      { id: "home", label: "HOME", href: "#HeroBanner", route: "/" },
      { id: "about", label: "ABOUT", href: "#About", route: "/" },
      { id: "services", label: "SERVICES", href: "#ServiceSection", route: "/" },
      { id: "packages", label: "PACKAGES", href: "#Packages", route: "/" },
      { id: "blogs", label: "BLOGS", href: "/blog", route: "/blog" },
      { id: "contact", label: "CONTACT", href: "#Contact", route: "/" },
    ],
    []
  );

  const socialLinks = useMemo(() => [
    {
      id: "x",
      href: "https://x.com/gtmlabsxyz",
      icon: <XLogo />,
      alt: "X (Twitter)",
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/company/gtmlabspage/",
      icon: <LinkedInLogo />,
      alt: "LinkedIn",
    },
  ], []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleNavClick = useCallback(
    (href, route) => {
      const currentPath = router.pathname;
      
      // If it's a regular page route (not hash)
      if (!href.startsWith("#")) {
        router.push(href);
        closeMobileMenu();
        return;
      }
      
      // If it's a hash route and we're on the correct page
      if (currentPath === route) {
        // We're on the right page, just scroll to element
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        closeMobileMenu();
      } else {
        // We're on a different page, need to navigate to home first
        closeMobileMenu();
        router.push(route).then(() => {
          // Small delay to ensure page has loaded
          setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        });
      }
    },
    [closeMobileMenu, router]
  );

  const handleCtaClick = useCallback(() => {
    window.open(
      "https://calendly.com/gtmlabsxyz/consult",
      "_blank",
      "noopener,noreferrer"
    );
    closeMobileMenu();
  }, [closeMobileMenu]);

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".topbar")) {
        closeMobileMenu();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMobileMenu]);

  return (
    <>
      {/* Backdrop for mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-500 backdrop-blur ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />

     <div className={TOPBAR_CONTAINER} id="TopBar"> 
        <header className={TOPBAR_HEADER}> 
          <div className={TOPBAR_DIV}>
            {/* Main Navigation Bar */}
            <nav className={MAIN_NAV}>
              <div className={NAVBAR_INNER}>
                {/* Logo */}
                <Logo />
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-center flex-1 px-4 xl:px-8">
                  <NavigationLinks items={navigationItems} onNavClick={handleNavClick} />
                </div>
                
                {/* Desktop Social & CTA */}
                <div className="hidden lg:flex items-center">
                  <SocialSection socialLinks={socialLinks} onCtaClick={handleCtaClick} />
                </div>
                
                {/* Mobile Menu Toggle */}
                <div className="lg:hidden">
                  <MobileMenuToggle isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
                </div>
              </div>
            </nav>
            
            {/* Mobile Navigation Menu */}
            <MobileMenu 
              isOpen={isMobileMenuOpen} 
              navigationItems={navigationItems} 
              socialLinks={socialLinks} 
              onNavClick={handleNavClick} 
              onCtaClick={handleCtaClick}
              onClose={closeMobileMenu}
            />
          </div>
        </header>
      </div>
    </>
  );
};

const Logo = React.memo(() => {
  const router = useRouter();
  
  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className="flex items-center justify-start flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
      <Image 
        src={gtmlogonew} 
        alt="GTM Labs Logo" 
        height={50} 
        width={120}
        className="h-[40px] sm:h-[50px] w-auto object-contain transition-all duration-300 hover:scale-105"
        priority
      />
    </div>
  );
});

const NavigationLinks = React.memo(({ items, onNavClick }) => (
  <div className="flex items-center justify-center gap-3 lg:gap-6 xl:gap-10">
    {items.map((item) => (
      <div
        key={item.id}
        className="relative group cursor-pointer transition-all duration-300 py-2"
        onClick={() => onNavClick(item.href, item.route)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onNavClick(item.href, item.route);
          }
        }}
      >
        <Typography 
          variant="h3" 
          className="font-medium text-white/90 text-xs lg:text-sm tracking-wider font-sora whitespace-nowrap transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#30A0FF] group-hover:to-[#B145FF] group-hover:bg-clip-text"
        >
          {item.label}
        </Typography>
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#30A0FF] to-[#B145FF] transition-all duration-300 group-hover:w-full" />
      </div>
    ))}
  </div>
));

const SocialSection = React.memo(({ socialLinks, onCtaClick }) => (
  <div className="flex items-center gap-3">
    {socialLinks.map((link) => (
      <a
        key={link.id}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.alt}
        className="opacity-80 hover:opacity-100 
        hover:scale-110 transition-all duration-300 p-1.5 lg:p-2"
      >
        {link.icon}
      </a>
    ))}
    <Button
    className="flex justify-center items-center rounded-full bg-gradient-to-tr from-[#B145FF] to-[#30A0FF] cursor-pointer transition-all duration-300 border-none shadow-lg hover:-translate-y-1 hover:shadow-xl hover:from-[#C155FF] hover:to-[#40B0FF] ml-2 py-2 px-4 lg:py-3 lg:px-6 h-10 lg:h-12 min-w-[120px] lg:min-w-[150px] text-xs lg:text-sm"
      onClick={onCtaClick}
      text={
        <Typography className="font-sora font-semibold text-black tracking-wide text-sm" variant="h2">
          Schedule a call
        </Typography>
      }
    />
  </div>
));

const MobileMenuToggle = React.memo(({ isOpen, onToggle }) => (
  <button
    className="flex flex-col justify-center items-center w-10 h-10 cursor-pointer p-2 z-[80] bg-[#13142d]/80 border border-white/20 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#13142d]"
    onClick={onToggle}
    aria-label="Toggle mobile menu"
    aria-expanded={isOpen}
  >
    <span 
      className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
        isOpen ? 'rotate-45 translate-y-1.5' : 'mb-1'
      }`}
    />
    <span 
      className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
        isOpen ? 'opacity-0 scale-0' : 'mb-1'
      }`}
    />
    <span 
      className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ease-out ${
        isOpen ? '-rotate-45 -translate-y-1.5' : ''
      }`}
    />
  </button>
));

const MobileMenu = React.memo(({
  isOpen,
  navigationItems,
  socialLinks,
  onNavClick,
  onCtaClick,
  onClose,
}) => (
  <div className={`lg:hidden fixed inset-0 flex items-start justify-center pt-16 px-4 transition-all duration-500 ease-in-out z-[70] ${
    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`}>
  
    <div className={`bg-[#1a1b3a]/98 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden w-full max-w-xs mx-auto max-h-[calc(100vh-8rem)] transition-all duration-500 ${
      isOpen ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-4'
    }`}>
      
      {/* Header with Logo and Close Button */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <Image 
          src={gtmlogonew} 
          alt="GTM Labs Logo" 
          height={32} 
          width={80}
          className="h-[32px] w-auto object-contain" 
          priority
        />
        <button
          onClick={onClose}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110"
          aria-label="Close menu"
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Scrollable Navigation Links */}
      <div className="py-2 overflow-y-auto max-h-[50vh]">
        {navigationItems.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-pointer transition-all duration-300 py-3 px-4 hover:bg-white/5 text-center"
            onClick={() => onNavClick(item.href, item.route)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onNavClick(item.href, item.route);
              }
            }}
          >
            <Typography 
              variant="h3" 
              className="font-medium text-white/90 text-base tracking-wider font-sora transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#30A0FF] group-hover:to-[#B145FF] group-hover:bg-clip-text"
            >
              {item.label}
            </Typography>
          </div>
        ))}
      </div>
      
      {/* Footer with Social Links and CTA */}
      <div className="p-4 bg-[#13142d]/50 border-t border-white/10">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
              className="opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 p-2"
            >
              {link.icon}
            </a>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            className="flex justify-center items-center rounded-full bg-gradient-to-tr from-[#B145FF] to-[#30A0FF] py-3 px-6 cursor-pointer transition-all duration-300 border-none h-10 w-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:from-[#C155FF] hover:to-[#40B0FF] hover:scale-105"
            onClick={onCtaClick}
            text={
              <Typography className="font-sora font-semibold text-black text-sm tracking-wide" variant="h2">
                Schedule a call
              </Typography>
            }
          />
        </div>
      </div>
    </div>
  </div>
));

const XLogo = () => (
  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);


const LinkedInLogo = () => (
  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default TopBar;