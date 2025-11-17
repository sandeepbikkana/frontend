"use client";

import React, { useState } from "react";
import GradientButton from "../Component/GradientButton/GradientButton";
import Newsletter from "./Newsletter";
import { Toaster, toast } from "react-hot-toast";

const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_STRING_CONTACT_US;

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > 250) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.telegram) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      toast.loading("Submitting...");

      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("telegram", formData.telegram);
      form.append("message", formData.message);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.dismiss();
      toast.success("Thank you! We'll get back to you soon.");

      setFormData({
        name: "",
        email: "",
        telegram: "",
        message: "",
      });
    } catch (err) {
      toast.dismiss();
      toast.error("Something went wrong!");
    }
  };

  return (
    <section
      className="relative bg-black text-white py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 overflow-hidden font-sora"
      id="Contact"
    >
      {/* for seo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact GTM Labs",
            description:
              "Reach out to GTM Labs for marketing and development services.",
            url: "https://gtmlabs.xyz/#Contact",
            mainEntity: {
              "@type": "Organization",
              name: "GTM Labs",
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@gtmlabs.xyz",
                contactType: "Customer Support",
                url: "https://gtmlabs.xyz",
              },
            },
          }),
        }}
      ></script>

      <div className="max-w-4xl mx-auto z-10 relative mb-18">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to explore the future? Get in touch with our team and let's
            build something amazing together.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-600/5 rounded-3xl"></div>

            <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="block text-white text-sm sm:text-base font-semibold tracking-wide">
                      Full Name<span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-gray-600/50"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-white text-sm sm:text-base font-semibold tracking-wide">
                      Email Address<span className="text-red-400 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-gray-600/50"
                        required
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-white text-sm sm:text-base font-semibold tracking-wide">
                    Telegram Username
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      placeholder="@your_telegram_username"
                      className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-gray-600/50"
                      required
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-white text-sm sm:text-base font-semibold tracking-wide">
                    Message
                    <span className="text-gray-400 font-normal ml-2 text-sm">
                      (Optional)
                    </span>
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows="4"
                      className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl px-4 py-4 text-white placeholder-gray-500 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-gray-600/50"
                    ></textarea>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Share your vision with us
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm font-mono">
                      {formData.message.length}/250
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flex justify-center">
                    <div className="w-full sm:w-auto">
                      <GradientButton
                        type="submit"
                        className="w-full sm:w-auto min-w-[200px] py-4 text-base sm:text-lg font-semibold"
                      >
                        Send Message
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default ContactUsSection;
