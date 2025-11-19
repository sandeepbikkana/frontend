"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import GradientGlowText from "@/Component/Typography/Heading";
import Image from "next/image";

// logos for event slides
import blockChainLive from "../Assets/Logos/BlockChainLive.jpg";
import CoinDesk from "../Assets/Logos/CoinDesk.jpg";
import IndiaBlockMonth from "../Assets/Logos/IndiaBlockMonth.jpg";
import Token2049 from "../Assets/Logos/Token2029.jpg";
import IndiaBlockchainWeek from "../Assets/Logos/IndiaBlockchainWeek.jpg";
import India_Blockchain_Tour_2025 from "../Assets/Logos/India_Blockchain_Tour_2025.jpeg";
import CoinFestAsia2025 from "../Assets/Logos/CoinFestAsia2025.jpeg";

const LogoMarquee = ({ logos, direction = "left", speed = 50 }) => (
  <Marquee
    direction={direction}
    speed={speed}
    gradient={false}
    pauseOnHover={true}
  >
    {logos.map((logo, index) => (
      <div key={index} className="mx-8 flex-shrink-0">
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 sm:h-12 lg:h-14 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
          />
        </a>
      </div>
    ))}
  </Marquee>
);

const partnersLogos = [
  // {
  //   src: "https://chainly.studio/static/media/p3.2ae25f02e04babc94cbbd5f23deb3f1b.svg",
  //   alt: "CoinMarketCap",
  //   link: "https://coinmarketcap.com/",
  // },
  {
    src: "https://cdn.brandfetch.io/idst-2-NAE/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1747723676342",
    alt: "CoinGecko",
    link: "https://www.coingecko.com/",
  },
  {
    src: "https://cdn.brandfetch.io/idwI4W-BDC/w/1671/h/480/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1674741044269",
    alt: "DEXTools",
    link: "https://dextools.io/",
  },
  {
    src: "https://cdn.brandfetch.io/idFTnbWf6E/w/400/h/400/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1754157344645",
    alt: "Edu3Labs",
    link: "https://edu3labs.com/",
  },
  {
    src: "https://cdn.brandfetch.io/idp1cbAu26/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1741805295340",
    alt: "GT Protocol",
    link: "https://gt-app.io/",
  },
  {
    src: "https://cdn.brandfetch.io/idUpJEIKBP/w/237/h/56/theme/light/logo.png?c=1bxid64Mup7aczewSAYMX&t=1720859957629",
    alt: "NFTFN",
    link: "https://nftfn.xyz/",
  },
];

const LAUNCHPADS = [
  {
    src: "https://cdn.brandfetch.io/idK1bply8_/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1750975287706",
    alt: "ChainGPT",
    link: "https://www.chaingpt.org/",
  },
  // {
  //   src: "https://chainly.studio/static/media/l6.05e3fda3f166f1992bffe99b820810c8.svg",
  //   alt: "DAO maker",
  //   link: "https://www.daomaker.com/",
  // },
  {
    src: "https://cdn.brandfetch.io/idFVj3M9sY/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746545691465",
    alt: "Seedify",
    link: "https://seedify.fund/",
  },
  // {
  //   src: "https://chainly.studio/static/media/l4.065c4af008e02001f2b6f8888ba7c558.svg",
  //   alt: "Kommunitas",
  //   link: "https://kommunitas.net/",
  // },
  {
    src: "https://cdn.brandfetch.io/idtbRMlk0t/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1711331466860",
    alt: "Zelwin",
    link: "https://zelwin.agency/",
  },
  {
    src: "https://cdn.brandfetch.io/id8TjWkdoY/w/88/h/88/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1750542129062",
    alt: "Polkastarter",
    link: "https://polkastarter.com/",
  },
  {
    src: "https://cdn.brandfetch.io/id5tjQHtyo/w/180/h/180/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1721477604891",
    alt: "xLaunchpad",
    link: "https://xLaunchpad.com/",
  },
];

const exchange = [
  {
    src: "https://cdn.brandfetch.io/id-pjrLx_q/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1675846244018",
    alt: "Binance",
    link: "https://binance.com/",
  },
  {
    src: "https://cdn.brandfetch.io/idWaJPxgbY/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1748961236822",
    alt: "Gate",
    link: "https://gate.com/",
  },
  {
    src: "https://cdn.brandfetch.io/idOHWcAMJY/w/310/h/96/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1748910943815",
    alt: "Bitget",
    link: "https://bitget.site/",
  },
  {
    src: "https://www.coinroutes.com/static/8efb3275f19122028391461734d9122d/7efda/okx.webp",
    alt: "OKX",
    link: "https://okx.com/",
  },
  {
    src: "https://cdn.brandfetch.io/idCHi7bZkV/w/1245/h/771/theme/dark/icon.png?c=1bxid64Mup7aczewSAYMX&t=1754032360344",
    alt: "MEXC",
    link: "https://mexc.com/",
  },
  {
    src: "https://cdn.brandfetch.io/idwDWo4ONQ/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668070447103",
    alt: "Coinbase",
    link: "https://coinbase.com/",
  },
  // {
  //   src: "https://chainly.studio/static/media/e3.2b3e37b84e6ac466a383e31c725ac346.svg",
  //   alt: "htx",
  //   link: "https://htx.com/",
  // },
  {
    src: "https://cdn.brandfetch.io/idpjmprSKf/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667590062988",
    alt: "crypto",
    link: "https://crypto.com/",
  },
];

const events = [
  {
    src: blockChainLive,
    alt: "BlockChainLive",
    link: "https://blockchain-life.com",
  },
  {
    src: CoinDesk,
    alt: "CoinDesk",
    link: "https://events.coindesk.com/",
  },
  {
    src: IndiaBlockchainWeek,
    alt: "IndiaBlockchainWeek",
    link: "https://indiablockchainweek.com/",
  },
  {
    src: Token2049,
    alt: "Token 2049",
    link: "https://www.token2049.com/",
  },
  {
    src: IndiaBlockMonth,
    alt: "IndiaBlockMonth",
    link: "https://www.indiablockchainmonth.com/inbm2025/",
  },
  {
    src: India_Blockchain_Tour_2025,
    alt: "IndiaBlockchain 2025",
    link: "https://octaloop.com/indiablockchaintour/",
  },
  {
    src: CoinFestAsia2025,
    alt: "CoinFestAsia2025",
    link: "https://coinfest.asia/",
  },
];

const PartnersSection = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-30 pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 mx-1 sm:mx-4 lg:mx-22  px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center">
          <GradientGlowText
            className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-gray-600 mb-11 cursor-pointer text-center whitespace-nowrap overflow-hidden"
            circleSize={120}
            baseTextColor="text-gray-600"
          >
            GTM ECOSYSTEM
          </GradientGlowText>
        </div>

        {/* Partners / Platforms */}
        <div className="text-center mb-12">
          <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            PARTNERS / PLATFORMS / CLIENTS
          </h1>
          <LogoMarquee logos={partnersLogos} direction="left" speed={40} />
        </div>

        {/* Launchpads */}
        <div className="text-center mb-12">
          <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            LAUNCHPADS
          </h1>
          <LogoMarquee logos={LAUNCHPADS} direction="right" speed={70} />
        </div>

        {/* Exchanges */}
        <div className="text-center mb-6">
          <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            EXCHANGE
          </h1>
          <LogoMarquee logos={exchange} direction="left" speed={90} />
        </div>

        {/* EVENTS */}
        {/* <div className="text-center my-6 ">
          <h1 className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-bold mb-8">
            EVENTS / FEST
          </h1>
          <Marquee
            direction="right"
            speed={60}
            gradient={false}
            pauseOnHover={true}
          >
            {events.map((logo, index) => (
              <div key={index} className="mx-8 flex-shrink-0">
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <div className="p-2 bg-gradient-to-r from-purple-400/40 to-blue-500 backdrop-blur-2xl  transition-opacity rounded-2xl duration-300">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={80}
                      className="h-34 sm:h-26 lg:h-42 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="py-3">
                    <span className="mt-2 text-sm text-white/80">{logo.alt}</span>
                  </div>
                </a>
              </div>
            ))}
          </Marquee>
        </div> */}
      </div>
    </div>
  );
};

export default PartnersSection;
