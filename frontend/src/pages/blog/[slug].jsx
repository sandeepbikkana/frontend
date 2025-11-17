import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Topbar from "../Topbar";
import Link from "next/link";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
import { toast } from "react-hot-toast";
import SEO from "@/Component/SEO/SEO";
import SafeDate from "./SafeDate"

const SingleBlog = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showShare, setShowShare] = useState(false);

  const blogUrl = typeof window !== "undefined" ? window.location.href : "";

  console.log(relatedBlogs);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}blogs?filters[slug][$eq]=${slug}&populate=coverImage`
        );
        const data = await res.json();

        if (data?.data?.length > 0) {
          setBlog(data.data[0]);
        } else {
          setBlog(null);
        }

        const relatedRes = await fetch(
          `${process.env.NEXT_PUBLIC_SRAPI_API_PRODUCTION}blogs?populate=coverImage&pagination[limit]=3`
        );
        const relatedData = await relatedRes.json();
        setRelatedBlogs(relatedData.data.filter((b) => b.slug !== slug));
      } catch (err) {
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleTwitter = () => {
    const text = `Check out this blog: ${blog?.title || ""}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(blogUrl)}`,
      "_blank"
    );
    setShowShare(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(blogUrl);
      toast.success("Copied");
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = blogUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("Link copied to clipboard!");
    }
    setShowShare(false);
  };

  const toggleShare = () => {
    setShowShare(!showShare);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showShare && !event.target.closest(".share-container")) {
        setShowShare(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showShare]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="w-12 h-12 border-4 border-t-[#30A0FF] border-r-[#B145FF] border-b-[#30A0FF] border-l-[#B145FF] rounded-full animate-spin" />
        <p className="mt-4 text-lg font-sora text-white/80">Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-sora mb-4">Blog not found</h2>
        <p className="text-white/60 text-sm sm:text-base">
          Sorry, the blog you're looking for doesn't exist or was removed.
        </p>
        <Link
          href="/blog"
          className="mt-6 text-blue-400 underline hover:text-blue-500 font-sora"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  const coverImageUrl = blog?.coverImage?.url || "/placeholder-image.jpg";

  return (
    <>
      {/* For SEO */}

      <SEO
        title={`${blog.title} – GTM Labs`}
        description={blog.metaDesc}
        image={blog.coverImage?.url}
        url={`https://gtmlabs.xyz/blog/${blog.slug}`}
        author={blog.author}
        type="article"
        publishedTime={blog.publishedAt}
      />

      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <Topbar />
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
          <div className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 mx-auto mb-6 sm:mb-8 rounded-2xl border border-[#5B5B7B] border-opacity-40 bg-transparent overflow-hidden shadow-[0_0_32px_4px_rgba(255,255,255,0.15)]">
            <Image
              src={coverImageUrl}
              alt={blog?.title || "Cover"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              className="object-contain rounded-2xl"
              priority
            />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sora font-normal mt-6 sm:mt-8 mb-6 sm:mb-8 text-center leading-tight px-2">
            {blog?.title}
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 mb-6 sm:mb-8 p-4 sm:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/80 font-sora text-sm sm:text-base">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                className="text-[#30A0FF]"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="truncate">{blog?.author || "Anonymous"}</span>
            </div>

            <div className="flex items-center gap-2 text-white/80 font-sora text-sm sm:text-base">
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                className="text-[#B145FF]"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
                />
              </svg>
              <span className="whitespace-nowrap">
                {blog?.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                  : "No date"}
              </span>
            </div>

            <div className="relative share-container">
              <button
                onClick={toggleShare}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3  text-white rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-200 font-sora text-sm sm:text-base shadow-lg"
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  className="text-[#ff457d]"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  />
                </svg>
                <span className="truncate">Share</span>
              </button>

              {showShare && (
                <div className="absolute right-0 sm:right-0 left-0 sm:left-auto mt-2 bg-[#181824] border border-[#2d2d4d] rounded-lg shadow-xl p-3 z-50 min-w-[160px] flex flex-col gap-1 backdrop-blur-md">
                  <button
                    onClick={handleTwitter}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-[#23234b] rounded-lg text-white font-sora text-sm transition-colors duration-200 w-full text-left"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        fill="#1DA1F2"
                        d="M22.46 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 001.965-2.475 8.94 8.94 0 01-2.828 1.082A4.48 4.48 0 0016.11 4c-2.488 0-4.505 2.02-4.505 4.51 0 .353.04.697.116 1.025-3.746-.188-7.066-1.983-9.29-4.71a4.51 4.51 0 00-.61 2.27c0 1.566.797 2.948 2.01 3.76a4.48 4.48 0 01-2.04-.564v.057c0 2.188 1.556 4.014 3.624 4.43-.38.104-.78.16-1.194.16-.292 0-.573-.028-.85-.08.574 1.792 2.24 3.096 4.215 3.13A8.98 8.98 0 012 19.54a12.67 12.67 0 006.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0024 4.59a8.98 8.98 0 01-2.54.697z"
                      />
                    </svg>
                    Twitter
                  </button>

                  <button
                    onClick={() => {
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          blogUrl
                        )}`,
                        "_blank"
                      );
                      setShowShare(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-[#23234b] rounded-lg text-white font-sora text-sm transition-colors duration-200 w-full text-left"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path
                        fill="#0077B5"
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      />
                    </svg>
                    LinkedIn
                  </button>

                  <button
                    onClick={() => {
                      window.open(
                        `https://www.instagram.com/?url=${encodeURIComponent(
                          blogUrl
                        )}`,
                        "_blank"
                      );
                      setShowShare(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-[#23234b] rounded-lg text-white font-sora text-sm transition-colors duration-200 w-full text-left"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <radialGradient
                        id="ig-gradient"
                        cx="50%"
                        cy="50%"
                        r="50%"
                      >
                        <stop offset="0%" stopColor="#f9ce34" />
                        <stop offset="50%" stopColor="#ee2a7b" />
                        <stop offset="100%" stopColor="#6228d7" />
                      </radialGradient>
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        stroke="url(#ig-gradient)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="5"
                        stroke="url(#ig-gradient)"
                        strokeWidth="2"
                        fill="none"
                      />
                      <circle cx="17" cy="7" r="1.5" fill="url(#ig-gradient)" />
                    </svg>
                    Instagram
                  </button>

                  <div className="border-t border-gray-600 my-1"></div>

                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-[#23234b] rounded-lg text-white font-sora text-sm transition-colors duration-200 w-full text-left"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <rect
                        x="9"
                        y="9"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="#30A0FF"
                        strokeWidth="2"
                      />
                      <rect
                        x="2"
                        y="2"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="#B145FF"
                        strokeWidth="2"
                      />
                    </svg>
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-6 sm:mb-8 font-sora text-sm sm:text-base leading-relaxed">
            {blog?.content?.map((block, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {block?.children?.map((child, i) => (
                  <span
                    key={i}
                    className={`${child.bold ? "font-bold" : ""} ${child.italic ? "italic" : ""
                      }`}
                  >
                    {child.text}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center lg:px-8 py-8 sm:py-12">
          {relatedBlogs && (
            <h2 className="text-2xl md:text-3xl lg:text-5xl text-white mb-12">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Related Blogs
              </span>
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {relatedBlogs?.length > 0 &&
              relatedBlogs.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <div className="h-[420px] bg-white/5 backdrop-blur-2xl rounded-2xl p-4 w-full flex flex-col hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                    {/* Image */}
                    <div className="h-48 rounded-xl border border-[#5B5B7B] border-opacity-40 bg-transparent mb-4 overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={related?.coverImage?.url || "/placeholder-blog.jpg"}
                        alt={related?.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-xl"
                        onError={(e) => {
                          e.target.src = "/placeholder-blog.jpg";
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-sora font-normal mb-3 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2 h-18 flex items-start">
                        {related?.title}
                      </h3>

                      <p className="text-gray-300 text-sm font-sora mb-4 line-clamp-3 flex-1">
                        {related?.content?.[0]?.children?.[0]?.text?.slice(
                          0,
                          120
                        ) || "No description available"}
                        {related?.content?.[0]?.children?.[0]?.text?.length >
                          120 && "..."}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-xs text-white/90 font-sora mt-auto py-2 border-t border-white/10">
                        <p className="text-[12px] mr-2 opacity-60">{`By ${related?.author || "Anonymous"
                          }`}</p>
                        <span className="flex items-center gap-2 flex-shrink-0">
                          {/* Calendar Icon */}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="14"
                              height="13"
                              rx="2"
                              fill="url(#calendar-gradient)"
                            />
                            <rect
                              x="3"
                              y="4"
                              width="14"
                              height="13"
                              rx="2"
                              stroke="url(#calendar-gradient)"
                              strokeWidth="1.5"
                            />
                            <rect
                              x="7"
                              y="2"
                              width="1.5"
                              height="3"
                              rx="0.75"
                              fill="url(#calendar-gradient)"
                            />
                            <rect
                              x="11.5"
                              y="2"
                              width="1.5"
                              height="3"
                              rx="0.75"
                              fill="url(#calendar-gradient)"
                            />
                            <defs>
                              <linearGradient
                                id="calendar-gradient"
                                x1="3"
                                y1="4"
                                x2="17"
                                y2="17"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#30A0FF" />
                                <stop offset="1" stopColor="#B145FF" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <SafeDate isoString={related?.publishedAt} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default SingleBlog;
