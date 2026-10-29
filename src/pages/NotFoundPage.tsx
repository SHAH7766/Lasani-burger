import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#101B35] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4 text-center">
        <div className="w-24 h-24 rounded-3xl bg-[#1B2E52] flex items-center justify-center text-[#FF8A4C] mx-auto mb-6 border border-[#CBD4E5]/10 shadow-2xl">
          <span className="font-display text-5xl">404</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-[#FFF3E6] mb-2">PAGE NOT FOUND</h1>
        <p className="text-sm text-[#AAB8D0] mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold px-6 py-3.5 rounded-full text-xs transition-all shadow-lg shadow-[#FF7438]/25"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-[#1B2E52] hover:bg-[#142341] text-[#FFF3E6] font-semibold px-6 py-3.5 rounded-full text-xs transition-all border border-[#CBD4E5]/15 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};
