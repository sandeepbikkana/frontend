"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Cookie, X, Check } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setVisible(true);
      setTimeout(() => setAnimate(true), 100);
    }
  }, []);

  const handleAccept = () => {
    setAnimate(false);
    setTimeout(() => {
      Cookies.set("cookieConsent", "true", { expires: 365 });
      setVisible(false);
    }, 200);
  };

  const handleDecline = () => {
    setAnimate(false);
    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] rounded-3xl backdrop-blur-2xl z-50 transition-all duration-500 ease-out ${
        animate
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-full opacity-0 scale-95"
      }`}
    >
      <div className="relative bg-gray-600/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl">
        <h1 className="text-2xl text-left md:text-2xl lg:text-3xl font-sora mb-1">
          <div className="flex justify-between">
            <p className="bg-gradient-to-r from-purple-500 to-blue-500 mb-2 bg-clip-text text-transparent">
              Cookie Concent
            </p>
            <Cookie className="text-white mt-1" />
          </div>
        </h1>
        <p className="text-white/90 text-sm leading-relaxed mb-6">
          We use cookies to enhance your browsing experience, analyze site
          traffic, and personalize content.
          <span className="text-white/70"> Your privacy matters to us.</span>
        </p>
        <button
          onClick={handleAccept}
          className="flex-1 bg-gradient-to-r cursor-pointer from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium px-4 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center w-full my-3 justify-center gap-2 group"
        >
          <Check className="w-4 h-4 group-hover:scale-110 transition-transform" />
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="px-4 py-3 flex-1 gap-2 text-white/80 cursor-pointer hover:text-white border border-white/20 hover:border-white/40 rounded-2xl transition-all duration-300 w-full flex items-center justify-center hover:bg-white/5"
        >
          <X className="w-4 h-4" />
          Decline
        </button>
        <div className="mt-4 text-center">
          <a
            href="/policies/Privacy_Policy"
            target="_black"
            className="text-xs text-white/60 hover:text-white/80 transition-colors underline decoration-dotted underline-offset-2"
          >
            Learn more about our privacy policy
          </a>
        </div>
      </div>
    </div>
  );
}
