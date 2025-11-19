import React, { useState } from "react";
import { toast } from "react-hot-toast";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_STRING_EMAILSUBSCRIPTION; // Replace this

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    try {
      toast.loading("Subscribing...");

      const form = new FormData();
      form.append("email", email);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.dismiss();
      toast.success("You're subscribed! 🎉");

      setEmail("");
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <section className="py-8 sm:py-12 my-8 flex items-center justify-center rounded-2xl bg-transparent relative overflow-hidden px-4">
      <div
        className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.18) 0%, transparent 100%)",
        }}
      />
      <div className="max-w-[95vw] md:max-w-2xl w-full mx-auto text-center relative z-10 px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 text-white font-sora">
          Join Our Newsletter
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-xl mx-auto font-sora">
          Get the latest from GTM Labs delivered straight to your inbox.
          Subscribe now and never miss an update on Web3, blockchain, and tech
          innovation.
        </p>
        <form
          className="w-full max-w-md sm:max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center items-center sm:flex-row bg-transparent border border-white/30 md:rounded-full sm:rounded-3xl rounded-3xl md:p-0 sm:p-0 p-3 overflow-hidden w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email ID"
              className="w-full sm:flex-1 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-transparent text-white text-sm sm:text-base lg:text-lg focus:outline-none placeholder:text-white/60 font-sora mb-3 sm:mb-0"
            />
            <button
              type="submit"
              className="w-32 sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#B145FF] to-[#30A0FF] text-white text-sm sm:text-base lg:text-lg rounded-full font-semibold focus:outline-none transition-all hover:scale-105 cursor-pointer font-sora"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
