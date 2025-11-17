import { FaChartLine, FaCode, FaUsers } from "react-icons/fa";
import boxfirstcard from "../Assets/boxfirstcard.png";
import internrtconection from "../Assets/internetconection.png";
import Bitcoine from "../Assets/Bitcoine.png";
import quibic from  "../Assets/quibic.png";
import Web3 from "../Assets/Web3illustratioin.png";
import Marketing from "../Assets/MarketingIllustration.png";

export const servicesData = [
  {
    title: "ADVISORY SERVICES",
    subtitle: "Master Every Stage That Matters",
    description:
      "Roadmap, tokenomics, white paper, GTM, and compliance guidance for successful project launches",
    icon: boxfirstcard,
    iconType: "image", 
    features: [
      { point: "Roadmap Planning", paragraph: "Align strategy with goals & market fit" },
      { point: "Tokenomics Design", paragraph: "Optimize for long-term ecosystem growth" },
      { point: "White Paper Creation", paragraph: "Clearly present vision & technicals" },
      { point: "GTM Strategy", paragraph: "Drive early traction & positioning" },
      { point: "Regulatory Advisory", paragraph: "Ensure compliance & strong foundation" },
    ],
  },
  {
    title: "WEB 3 SERVICES",
    subtitle: "Web3 advisory for token launches, listings & growth",
    description:
      "From tokenomics to TGE, fundraising, listings, and marketing - we help launch and grow blockchain projects end-to-end",
    icon: Web3,
    iconType: "image", 
    features: [
      { point: "Advisory", paragraph: "Tokenomics, compliance & ecosystem growth" },
      { point: "Lifecycle Support", paragraph: "Pre, during & post-TGE execution" },
      { point: "Fundraising", paragraph: "IDO & strategic capital raising" },
      { point: "Listings", paragraph: "Advisory & end-to-end DEX/CEX support" },
      { point: "Market Making", paragraph: "Liquidity stabilization with partners" },
      { point: "Promotion", paragraph: "Trending & token marketing across blockchain/crypto platforms" },
    ],
  },
  {
    title: "MARKETING",
    subtitle: "Dominate the Platforms That Matter.",
    description:
      "We turn attention into traction with high-impact content, social strategy, and KOL-powered campaigns",
    icon: Marketing,
    iconType: "image", 
    features: [
      { point: "Marketing", paragraph: "Traditional & digital campaigns with performance focus" },
      { point: "Web3 Creative", paragraph: "Content and viral marketing tailored for Web3" },
      { point: "Social Media", paragraph: "Management across major platforms" },
      { point: "Influencer/PR", paragraph: "KOL marketing and digital PR via global/local outlets" },
      { point: "Community Growth", paragraph: "Global physical ads, shilling, and raiding" },
    ],
  },
  {
    title: "GO-TO-MARKET SERVICES",
    subtitle: "Traction-first strategies for high-velocity teams",
    description:
      "Our team designs and drives growth strategies aligned to your startup's stage, delivering measurable outcomes",
    icon: Bitcoine,
    iconType: "image", 
    features: [
      { point: "GTM Strategy", paragraph: "Development aligned with business goals and target markets" },
      { point: "Research", paragraph: "Market analysis and competitive insights for informed decisions" },
      { point: "Positioning", paragraph: "Product messaging for unique market differentiation" },
      { point: "Partnerships", paragraph: "Channel and alliance planning for market penetration" },
      { point: "Launch", paragraph: "Coordinated marketing and sales execution" },
      { point: "Optimization", paragraph: "Performance tracking to maximize growth and ROI" },
    ],
  },
  {
    title: "ADITIONAL SERVICES",
    subtitle: "Build Web3 Projects. Securely. Seamlessly",
    description:
      "End-to-end Web3 support for development, security, compliance, infrastructure, and project management",
    icon: internrtconection,
    iconType: "image",
    features: [
      { point: "Development", paragraph: "In-house and partner support for projects of all sizes" },
      { point: "Security", paragraph: "Web3 protection via trusted industry partners" },
      { point: "Legal", paragraph: "Combined in-house and partner compliance support" },
      { point: "Advisory", paragraph: "Blockchain integration, smart contracts, and post-launch tech support" },
      { point: "Infrastructure", paragraph: "Advanced Web3 integration for scalability and analytics" },
      { point: "Management", paragraph: "End-to-end project and operations with roadmap and risk mitigation" },
    ],
  },
  {
    title: "EVENT SERVICES",
    subtitle: "Create Experiences That Build Community",
    description:
      "Host unforgettable events, from ideation to execution, IRL or virtual, to post-event amplification",
    icon: quibic,
    iconType: "image",
    features: [
      { point: "Event Management", paragraph: "End-to-end operations and organizing support for clients" },
      { point: "Logistics", paragraph: "Merchandise, travel, accommodation, and itinerary coordination" },
      { point: "Content", paragraph: "Professional shoots and media capture for impact" },
      { point: "Proprietary Events", paragraph: "Regular global event series" },
      { point: "Conference Alignment", paragraph: "Events synced with major Web3 and AI conferences worldwide" },
    ],
  },
];
