import Image from "next/image";
import WhoWeAre from "../Assets/WhoWeAre.png";
import GradientGlowText from "@/Component/Typography/Heading";
import GradientButton from "@/Component/GradientButton/GradientButton";

const AboutSection = () => {
  return (
    <section
      id="About"
      className="relative bg-black text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-30 pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left mb-10 lg:mb-0">
          <GradientGlowText>
            <h2 className="text-5xl md:text-6xl font-bold text-white/20 uppercase tracking-widest leading-none">
              WHO WE ARE?
            </h2>
          </GradientGlowText>

          <h3 className="text-2xl sm:text-4xl md:text-4xl leading-snug">
            Built To Launch, <br />
            <span className="text-transparent bg-gradient-to-r mt-2 from-blue-400 to-purple-500 bg-clip-text">
              Structured To Scale.
            </span>
          </h3>
          <p className="text-lg md:text-xl font-medium text-gray-300">
            Your Full-Stack GTM Partner For Web3, AI, And Emerging Tech
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            GTM Labs is a full-stack growth and marketing agency, helping Web3,
            AI, and tech start-ups scale efficiently. From go-to-market strategy
            to post-funding execution, we serve as a committed partner to help
            start-ups accelerate with clarity and confidence.
          </p>
          <GradientButton>Get to know us</GradientButton>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          {}
          <Image
            src={WhoWeAre}
            alt="Servers illustration"
            width={500}
            height={500}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-[0_0_20px_rgba(100,0,255,0.7)]" // Adds a subtle glow
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
