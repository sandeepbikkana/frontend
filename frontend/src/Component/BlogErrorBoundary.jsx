import React from 'react';

const BlogErrorBoundary = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">
      <h2 className="text-2xl sm:text-3xl font-sora mb-4">Something went wrong</h2>
      <p className="text-white/60 text-sm sm:text-base mb-6">
        {error?.message || 'Failed to load blogs'}
      </p>
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-gradient-to-r from-[#30A0FF] to-[#B145FF] text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        Try Again
      </button>
    </div>
  );
};

export default BlogErrorBoundary;