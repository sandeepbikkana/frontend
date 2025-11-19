import React, { useEffect, useState } from "react";
import Link from "next/link";
import Topbar from "../Topbar";
import GradientGlowText from "@/Component/Typography/Heading";
import SafeDate from "./SafeDate";
import Newsletter from "../Newsletter";
import Footer from "../Footer";
import SEO from "@/Component/SEO/SEO";

const BlogHome = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 25,
    pageCount: 1,
    total: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=coverImage&publicationState=live&pagination[page]=${page}&pagination[pageSize]=6&sort=publishedAt:desc`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const data = await response.json();

      // Handle both Strapi v4 response format
      if (data.data) {
        setBlogs(data.data);
        setPagination(data.meta?.pagination || {
          page: 1,
          pageSize: 6,
          pageCount: 1,
          total: 0,
        });
      } else {
        // Fallback for different response format
        setBlogs(data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);

    // refresh every 5 minutes 
    const interval = setInterval(() => {
      fetchBlogs(currentPage);
    }, 300000);

    return () => clearInterval(interval);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (pagination.pageCount <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(
      pagination.pageCount,
      startPage + maxVisiblePages - 1
    );

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-2 mx-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 rounded-lg transition-all duration-200 font-sora ${i === currentPage
            ? "bg-gradient-to-r from-[#30A0FF] to-[#B145FF] text-white"
            : "bg-white/10 hover:bg-white/20 text-white"
            }`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < pagination.pageCount) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-2 mx-1 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all duration-200 flex items-center"
        >
          Next
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      );
    }

    return (
      <div className="flex flex-wrap justify-center items-center mt-12 mb-8">
        {pages}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Topbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
          <div className="w-12 h-12 border-4 border-t-[#30A0FF] border-r-[#B145FF] border-b-[#30A0FF] border-l-[#B145FF] rounded-full animate-spin" />
          <p className="mt-4 text-lg font-sora text-white/80">
            Loading blogs...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* for seo */}

      <SEO
        title="GTM Labs Blog – Insights, Ideas & Innovation"
        description="Explore startup insights, growth strategies, and innovations from GTM Labs. Full-stack marketing and growth services tailored for future-forward founders."
        image="https://gtmlabs.xyz/meta/og-logo.png"
        url="https://gtmlabs.xyz/blog"
      />

      <div className="min-h-screen bg-black text-white w-full relative overflow-x-hidden">
        <div
          className="pointer-events-none select-none absolute left-0 top-0 bottom-0 w-[700px] h-full z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 0% 50%, rgba(48,160,255,0.32) 0%, transparent 100%)",
          }}
        />
        <div
          className="pointer-events-none select-none absolute right-0 top-0 bottom-0 w-[700px] h-full z-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 100% 60%, rgba(177,69,255,0.28) 0%, transparent 100%)",
          }}
        />
        <Topbar />
        <div className="w-full max-w-6xl mx-auto py-6 md:py-12 px-4">
          <div className="text-center mb-6">
            <GradientGlowText
              className="text-3xl sm:text-3xl md:text-6xl lg:text-7xl font-sora font-bold mb-4"
              circleSize={120}
              baseTextColor="text-gray-600"
            >
              GTM BLOGS
            </GradientGlowText>
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-center mb-5 font-sora font-bold bg-gradient-to-r from-[#30A0FF] to-[#B145FF] bg-clip-text text-transparent"
            style={{ letterSpacing: "0.01em" }}
          >
            Ideas. Insights. Innovation.
          </h2>
          <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto font-sora">
            We help future-forward start-ups tackle traction, community, and
            business with full-stack growth, marketing, and development
            services.
          </p>

          {blogs.length === 0 ? (
            <p className="text-center text-white/60 text-xl font-sora mt-12">
              No blogs available at the moment.
            </p>
          ) : (
            <>
              <div className="text-center mb-8">
                <p className="text-white/70 font-sora">
                  Showing {blogs.length} of {pagination.total} blogs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {blogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="group"
                  >
                    <div className="h-[420px] bg-white/5 backdrop-blur-2xl rounded-2xl p-4 w-full flex flex-col hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                      <div className="h-48 rounded-xl border border-[#5B5B7B] border-opacity-40 bg-transparent mb-4 overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={blog.coverImage?.url || "/placeholder-blog.jpg"}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover rounded-xl"
                          onError={(e) => {
                            e.target.src = "/placeholder-blog.jpg";
                          }}
                        />
                      </div>

                      <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-sora font-normal mb-3 group-hover:text-blue-400 transition-colors leading-tight line-clamp-2 h-18 flex items-start">
                          {blog.title}
                        </h3>

                        <p className="text-gray-300 text-sm font-sora mb-4 line-clamp-3 flex-1">
                          {blog.content?.[0]?.children?.[0]?.text?.slice(
                            0,
                            120
                          ) || "No description available"}
                          {blog.content?.[0]?.children?.[0]?.text?.length >
                            120 && "..."}
                        </p>

                        <div className="flex items-center justify-between text-xs text-white/90 font-sora mt-auto py-2 border-t border-white/10">
                          <p className="text-[12px] mr-2 opacity-60">{`By ${blog.author || "Anonymous"
                            }`}</p>
                          <span className="flex items-center gap-2 flex-shrink-0">
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
                            <SafeDate isoString={blog.publishedAt} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {renderPagination()}
            </>
          )}
        </div>
        <Newsletter />
      </div>
      <Footer />
    </>
  );
};

export default BlogHome;
