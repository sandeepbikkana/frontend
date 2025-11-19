import Image from "next/image";

const socialMediaLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/gtmlabspage/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/gtmlabsxyz",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    url: "https://t.me/gtmlabsxyz",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/gtmlabsxyz/",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.78 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#171B22] text-white px-4 py-10 md:py-14 z-50 overflow-hidden">
      {/* Mobile Layout */}
      <div className="flex flex-col gap-8 md:hidden">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src={require("../Assets/Gtm.png")}
            alt="GTM Labs Logo"
            width={360}
            height={360}
            className="object-contain"
            style={{ width: 120, height: 120 }}
          />
        </div>

        {/* Contact Info */}
        <div className="flex flex-row flex-wrap gap-6">
          <div className="flex flex-col gap-3">
          <h3 className="font-bold text-md mb-2">Contact Information</h3>
            <div className="flex gap-2">
              <span className="inline-block w-5 h-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6V6.01L12 13L4 6.01V6H20ZM4 18V8.99L12 16L20 8.99V18H4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <a className="text-base" href="mailto:contact@gtmlabs.xyz">
                contact@gtmlabs.xyz
              </a>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-5 h-5">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
              </span>
              <span className="text-base">+91 7011844199</span>
            </div>
            <div className="flex gap-2">
              <span className="inline-block w-5 h-5">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <span className="text-base">Gurugram, Delhi NCR</span>
            </div>
          </div>
          
          <div className="flex flex-col min-w-[130px]">
            <h3 className="font-bold text-md mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/#HeroBanner" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/#About" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/#ServiceSection" className="hover:underline">
                  Service
                </a>
              </li>
              {/* <li>
                <a href="/#EventSection" className="hover:underline">
                  Events
                </a>
              </li> */}
              <li>
                <a href="/blog" className="hover:underline">
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
        

        {/* Quick Links & Policies */}
        <div className="flex flex-row flex-wrap justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-md mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://deck.gtmlabs.xyz"
                  className="hover:underline"
                  target="_black"
                >
                  Deck
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1qpPj4wl8NEp7VhmWjRjNcqQjaZWpSbhK?usp=sharing"
                  className="hover:underline"
                  target="_black"
                >
                  Brand Kit
                </a>
              </li>
              <li>
                <a href="https://www.notion.so/gtmlabsxyz/GTM-Labs-Careers-209f4f72eba2806780dec4e4c83d8a6f" className="hover:underline" target="_black">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/Team-verify"
                  className="hover:underline"
                  target="_black"
                >
                  Team-Verify
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 min-w-[130px]">
            <h3 className="font-bold text-md mb-2">Policies</h3>
            <ul className="space-y-1">
              <li>
                <a href="/policies/Privacy_Policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/policies/TermsConditions" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/policies/Disclaimer" className="hover:underline">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop/Tablet Layout */}
      <div className="hidden md:flex flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start w-[140px] flex-shrink-0">
          <Image
            src={require("../Assets/Gtm.png")}
            alt="GTM Labs Logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-2 min-w-[120px]">
          <h3 className="font-bold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="/#HeroBanner" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/#About" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/#ServiceSection" className="hover:underline">
                Service
              </a>
            </li>
            {/* <li>
              <a href="/#EventSection" className="hover:underline">
                Events
              </a>
            </li> */}
            <li>
              <a href="/blog" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-2 min-w-[120px]">
          <h3 className="font-bold text-lg mb-2">Resources</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://deck.gtmlabs.xyz"
                className="hover:underline"
                target="_black"
              >
                Deck
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1qpPj4wl8NEp7VhmWjRjNcqQjaZWpSbhK?usp=sharing"
                className="hover:underline"
                target="_black"
              >
                Brand Kit
              </a>
            </li>
            <li>
              <a href="https://www.notion.so/gtmlabsxyz/GTM-Labs-Careers-209f4f72eba2806780dec4e4c83d8a6f" className="hover:underline" target="_black">
                Careers
              </a>
            </li>
            <li>
              <a
                href="/Team-verify"
                className="hover:underline"
                target="_black"
              >
                Team-Verify
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start gap-2 min-w-[180px]">
          <h3 className="font-bold text-lg mb-2">Contact Information</h3>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6V6.01L12 13L4 6.01V6H20ZM4 18V8.99L12 16L20 8.99V18H4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <a className="text-base" href="mailto:contact@gtmlabs.xyz">
                contact@gtmlabs.xyz
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
              </span>
              <span className="text-base">+91 7011844199</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-5 h-5">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <span className="text-base">Gurugram, Haryana</span>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="flex flex-col items-start gap-2 min-w-[150px]">
          <h3 className="font-bold text-lg mb-2">Policies</h3>
          <ul className="space-y-2">
            <li>
              <a href="/policies/Privacy_Policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/policies/TermsConditions" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/policies/Disclaimer" className="hover:underline">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
      </div>
      <div className="flex flex-col items-center text-center gap-2 mt-12">
        <h3 className="font-bold text-lg mb-2">Social Media</h3>
        <div className="flex gap-4 mt-1">
          {socialMediaLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-[#B0B3B8]">
        GTM Labs © 2025. All rights reserved
      </div>
    </footer>
  );
}
