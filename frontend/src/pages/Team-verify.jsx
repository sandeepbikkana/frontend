import React, { useState } from "react";
import { Search, Check, X, Linkedin, MessageCircle, ChevronDown  } from "lucide-react";
import Footer from "./Footer";
import TopBar from "./Topbar";
import Newsletter from "./Newsletter";

const TwitterIcon = "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg";
const LinkedInIcon =
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg";
const TelegramIcon =
  "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg";

const TeamVerify = () => {
  const [selectedChannel, setSelectedChannel] = useState("linkedin");
  const [searchId, setSearchId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const channels = [
    { id: "linkedin", name: "LinkedIn", icon: LinkedInIcon },
    { id: "telegram", name: "Telegram", icon: TelegramIcon },
    { id: "x", name: "X (Twitter)", icon: TwitterIcon },
  ];

  const handleChannelSelect = (channelId) => {
    setSelectedChannel(channelId);
    setIsDropdownOpen(false);
  };

  const handleSearch = async () => {
    if (!searchId.trim()) return;
  
    setIsLoading(true);
    setShowModal(true);
  
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SRAPI_API_PRODUCTION}employees?populate=*`
      );
      const data = await response.json();
  
      if (data.data && data.data.length > 0) {
        let foundEmployee = null;
        let matchedHandle = null;
  
        const normalize = (str) =>
          str.trim().toLowerCase().replace(/\/+$/, '');
  
        const normalizedInput = normalize(searchId);
  
        // Search by offer letter ID
        foundEmployee = data.data.find(
          (emp) => emp.offerLetterId === searchId
        );
  
        if (!foundEmployee) {
          for (const employee of data.data) {
            if (employee.socialHandles && employee.socialHandles.length > 0) {
              const socialHandle = employee.socialHandles.find((handle) => {
                if (!handle.platform || !handle.handle) return false;
  
                const platform = handle.platform.toLowerCase();
                const handleValue = normalize(handle.handle);
  
                const isLinkedIn =
                  selectedChannel === "linkedin" &&
                  platform.includes("linkedin");
  
                const isTelegram =
                  selectedChannel === "telegram" &&
                  platform.includes("telegram");
  
                const isTwitter =
                  selectedChannel === "x" &&
                  (platform.includes("twitter") || platform.includes("x"));
  
                if (isLinkedIn || isTelegram || isTwitter) {
                  return (
                    normalizedInput === handleValue ||
                    normalizedInput.includes(handleValue)
                  );
                }
  
                return false;
              });
  
              if (socialHandle) {
                foundEmployee = employee;
                matchedHandle = socialHandle;
                break;
              }
            }
          }
        }
  
        if (foundEmployee) {
          setVerificationResult({
            isVerified: true,
            employee: foundEmployee,
            matchedHandle: matchedHandle,
            searchTerm: searchId,
          });
        } else {
          setVerificationResult({
            isVerified: false,
            searchTerm: searchId,
          });
        }
      } else {
        setVerificationResult({
          isVerified: false,
          searchTerm: searchId,
        });
      }
  
      setIsLoading(false);
    } catch (error) {
      console.error("Verification failed:", error);
      setVerificationResult({
        isVerified: false,
        searchTerm: searchId,
        error: "Failed to connect to verification service",
      });
      setIsLoading(false);
    }
  };
  

  const closeModal = () => {
    setShowModal(false);
    setVerificationResult(null);
  };

  const getSelectedChannel = () => {
    return channels.find(channel => channel.id === selectedChannel);
  };

  const VerificationModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black/30 bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="backdrop-blur-2xl rounded-2xl p-8 max-w-md w-full mx-4 relative">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>

          {isLoading ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Verifying...
              </h3>
              <p className="text-gray-400">
                Please wait while we verify the employee
              </p>
            </div>
          ) : verificationResult ? (
            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  verificationResult.isVerified ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {verificationResult.isVerified ? (
                  <Check size={32} className="text-white" />
                ) : (
                  <X size={32} className="text-white" />
                )}
              </div>

              <h3
                className={`text-xl font-semibold mb-4 ${
                  verificationResult.isVerified
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {verificationResult.isVerified
                  ? "Verified Official Account"
                  : "Unverified Account"}
              </h3>

              <p className="text-gray-300 mb-6">
                {verificationResult.isVerified
                  ? `Your search [@${verificationResult.searchTerm}] is a verified GTM official account`
                  : `Your search [@${verificationResult.searchTerm}] is not a verified GTM official account`}
              </p>

              {verificationResult.isVerified && verificationResult.employee && (
                <div className="bg-gray-800 rounded-lg p-4 mb-6 text-left">
                  <h4 className="text-white font-semibold mb-2">
                    Employee Details:
                  </h4>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-medium">Name:</span>{" "}
                    {verificationResult.employee.fullName}
                  </p>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-medium">Position:</span>{" "}
                    {verificationResult.employee.position}
                  </p>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-medium">Department:</span>{" "}
                    {verificationResult.employee.department || "Not specified"}
                  </p>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-medium">Employee ID:</span>{" "}
                    {verificationResult.employee.offerLetterId}
                  </p>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-medium">Joined Date:</span>{" "}
                    {new Date(
                      verificationResult.employee.joinedDate
                    ).toLocaleDateString()}
                  </p>
                  <p className="text-gray-300 text-sm mb-1">
                    <span className="font-medium">Current Status:</span>{" "}
                    {verificationResult.employee.currentStatus}
                  </p>
                  {verificationResult.matchedHandle && (
                    <p className="text-gray-300 text-sm">
                      <span className="font-medium">
                        Verified {verificationResult.matchedHandle.platform}:
                      </span>{" "}
                      <a
                        href={verificationResult.matchedHandle.handle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 underline"
                      >
                        {verificationResult.matchedHandle.handle}
                      </a>
                    </p>
                  )}
                </div>
              )}

              {!verificationResult.isVerified && (
                <div className="text-left mb-6">
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>
                      • Please ensure you have selected the correct channel for
                      verification
                    </li>
                    <li>
                      • Please use the correct account format for verification
                    </li>
                  </ul>
                </div>
              )}

              <div className="text-xs text-gray-500 mb-6">
                *Do not disclose your account information and password to
                anyone. *Beware of scams and operate with caution.
              </div>

              <button
                onClick={closeModal}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-medium transition-colors"
              >
                OK
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative bg-black overflow-hidden min-h-screen">
        <TopBar />

        <div
          className="absolute 
  w-[600px] h-[600px] left-[-300px] top-[10%] 
  md:w-[800px] md:h-[800px] md:left-[-400px]
  bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.2)_0%,rgba(48,158,255,0.15)_30%,rgba(48,158,255,0.08)_50%,transparent_70%)]
  md:bg-[radial-gradient(circle_at_center,rgba(48,158,255,0.574)_0%,rgba(48,158,255,0.377)_30%,rgba(48,158,255,0.188)_50%,transparent_70%)]
  rounded-full blur-[60px] md:blur-[80px]  pointer-events-none"
        />
        <div
          className="absolute 
  w-[600px] h-[600px] right-[-300px] top-[10%] 
  md:w-[800px] md:h-[800px] md:right-[-400px]
  bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.2)_0%,rgba(177,69,255,0.15)_30%,rgba(177,69,255,0.08)_50%,transparent_70%)]
  md:bg-[radial-gradient(circle_at_center,rgba(177,69,255,0.574)_0%,rgba(177,69,255,0.377)_30%,rgba(177,69,255,0.188)_50%,transparent_70%)]
  rounded-full blur-[60px] md:blur-[80px]  pointer-events-none"
        />

        <div className="relative z-20 flex flex-col items-center gap-10 max-w-5xl w-full text-center animate-fadeInUp"></div>
        <div className="flex flex-col items-center justify-center text-white px-8 py-24 ">
          {/* Gradient background circles */}
          <div className="w-full max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="bg-gradient-to-tr font-sora font-light text-3xl md:text-5xl lg:text-5xl mb-0 from-[#30A0FF] to-[#B145FF] bg-clip-text text-transparent">
                GTM Team Verification
              </h1>
              <p className="text-gray-300 text-lg max-w-lg mx-auto">
                Get to know the real GTM team verify identities through
                official, linked social accounts and engage confidently
              </p>
            </div>

            <div className="rounded-4xl p-4 sm:p-8 shadow-2xl max-w-6xl mx-auto">
              {/* Integrated Search Bar */}
              <div className="bg-gray-800/50 backdrop-blur-2xl bg-black\34 border border-gray-600/50 rounded-2xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
                {/* Custom Dropdown for Channel Selector */}
                <div className="relative w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="bg-gray-700/50 hover:bg-gray-700/70 transition-colors text-gray-300 w-full sm:w-auto px-4 py-3 focus:outline-none cursor-pointer text-sm font-medium min-w-[180px] border border-gray-600/50 rounded-full flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      {selectedChannel ? (
                        <>
                          <img
                            src={getSelectedChannel()?.icon}
                            alt={getSelectedChannel()?.name}
                            className="w-5 h-5 filter invert"
                          />
                          <span>{getSelectedChannel()?.name}</span>
                        </>
                      ) : (
                        <>
                          <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          </div>
                          <span>Select Social Media</span>
                        </>
                      )}
                    </div>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-lg border border-gray-600/50 rounded-xl shadow-2xl z-50 overflow-hidden">
                      {channels.map((channel) => (
                        <button
                          key={channel.id}
                          onClick={() => handleChannelSelect(channel.id)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-700/50 transition-colors flex items-center gap-3 text-gray-300 hover:text-white"
                        >
                          <img
                            src={channel.icon}
                            alt={channel.name}
                            className="w-5 h-5 filter invert"
                          />
                          <span className="font-medium">{channel.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Search Input */}
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    placeholder="Please enter verified ID"
                    className="w-full bg-transparent text-white px-4 py-2 focus:outline-none placeholder-gray-400 border border-gray-600/50 rounded-full"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                </div>

                {/* Search Button */}
                <button
                  onClick={handleSearch}
                  disabled={!searchId.trim() || isLoading}
                  className="w-full sm:w-auto flex justify-center items-center gap-2 rounded-full bg-gradient-to-tr from-[#B145FF] to-[#30A0FF] py-2 px-6 cursor-pointer transition-all duration-300 border-none shadow-lg hover:-translate-y-1 hover:shadow-xl hover:from-[#C155FF] hover:to-[#40B0FF] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Search size={18} />
                  Search
                </button>
              </div>
            </div>
          </div>
          <VerificationModal /> 
        </div>
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default TeamVerify;
