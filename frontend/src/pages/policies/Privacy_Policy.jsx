"use client";

import React from "react";
import Footer from "../Footer";
import TopBar from "../Topbar";

function Privacy_Policy() {
  return (
    <div className="bg-black">
      <TopBar />
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    {/* bacground design */}
        <div className="absolute 
  w-[600px] h-[600px] left-[-300px] top-[10%] 
  md:w-[800px] md:h-[800px] md:left-[-400px]
  bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.2)_0%,rgba(48,158,255,0.15)_30%,rgba(48,158,255,0.08)_50%,transparent_70%)]
  md:bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.574)_0%,rgba(48,158,255,0.377)_30%,rgba(48,158,255,0.188)_50%,transparent_70%)]
  rounded-full blur-[60px] md:blur-[80px]  pointer-events-none"
        />
        <div className="absolute 
  w-[600px] h-[600px] right-[-300px] top-[10%] 
  md:w-[800px] md:h-[800px] md:right-[-400px]
  bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.2)_0%,rgba(177,69,255,0.15)_30%,rgba(177,69,255,0.08)_50%,transparent_70%)]
  md:bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.574)_0%,rgba(177,69,255,0.377)_30%,rgba(177,69,255,0.188)_50%,transparent_70%)]
  rounded-full blur-[60px] md:blur-[80px]  pointer-events-none"
        />
        <div className="relative z-20 flex flex-col items-center gap-10 max-w-5xl w-full text-center animate-fadeInUp"></div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-sm p-6 sm:p-8 lg:p-10">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Introduction
                </h2>
                <p className="text-white leading-relaxed mb-4">
                  GTM Labs ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you visit
                  our website or use our services.
                </p>
                <p className="text-white leading-relaxed">
                  As a full-stack growth and marketing agency helping Web3, AI,
                  and tech start-ups scale efficiently, we understand the
                  importance of data privacy and are committed to transparent
                  practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Information We Collect
                </h2>

                <h3 className="text-xl font-medium text-white mb-3">
                  Personal Information
                </h3>
                <ul className="list-disc pl-6 mb-4 text-white space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Communication preferences</li>
                  <li>
                    Information provided in forms, surveys, or communications
                  </li>
                </ul>

                <h3 className="text-xl font-medium text-white mb-3">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 mb-4 text-white space-y-2">
                  <li>IP address and browser information</li>
                  <li>Device and operating system details</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-white leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-white space-y-2">
                  <li>Provide and improve our marketing and growth services</li>
                  <li>Communicate with you about our services and updates</li>
                  <li>
                    Respond to your inquiries and provide customer support
                  </li>
                  <li>Analyze website usage and optimize user experience</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal obligations and protect our rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-white leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information in the following
                  circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 text-white space-y-2">
                  <li>
                    With trusted service providers who assist in our operations
                  </li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transaction or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Data Security
                </h2>
                <p className="text-white leading-relaxed">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                  However, no method of transmission over the internet is 100%
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Your Rights and Choices
                </h2>
                <p className="text-white leading-relaxed mb-4">
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-white space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability and restriction of processing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-white leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your
                  experience on our website. You can control cookie settings
                  through your browser preferences, though disabling cookies may
                  affect website functionality.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy_Policy;
