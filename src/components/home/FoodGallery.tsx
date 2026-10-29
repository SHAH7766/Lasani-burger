import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, X } from 'lucide-react';
import { GALLERY_IMAGES } from '../../data/gallery';
import type { GalleryImage } from '../../types/menu';
import { motion, AnimatePresence } from 'framer-motion';

export const FoodGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);
  const previewImages = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 bg-[#142341] border-t border-[#CBD4E5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
              Visual Feast
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#FFF3E6] tracking-wider">
              A GLIMPSE OF OUR KITCHEN
            </h2>
          </div>
          <Link
            to="/gallery"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#FF8A4C] hover:text-[#FFF3E6] transition-colors group"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="relative h-72 rounded-[24px] overflow-hidden group cursor-pointer border border-[#CBD4E5]/10 shadow-xl bg-[#1B2E52]"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/90 via-[#101B35]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest mb-1">
                  {img.category}
                </span>
                <h3 className="font-display text-2xl text-[#FFF3E6] mb-2">{img.title}</h3>
                <div className="flex items-center gap-2 text-xs text-[#FFF3E6]/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-[#FF7438]" />
                  <span>Click to view large</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-[#101B35]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-[#1B2E52] rounded-[28px] overflow-hidden border border-[#CBD4E5]/15 shadow-2xl z-10"
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#101B35]/80 backdrop-blur-md text-[#FFF3E6] hover:bg-[#FF7438] hover:text-[#101B35] transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[70vh] bg-[#101B35]">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full h-full max-h-[70vh] object-contain mx-auto"
                />
              </div>
              <div className="p-6 bg-[#1B2E52]">
                <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-wider block mb-1">
                  {activeImage.category}
                </span>
                <h3 className="font-display text-2xl text-[#FFF3E6] mb-2">{activeImage.title}</h3>
                <p className="text-sm text-[#AAB8D0]">{activeImage.description}</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
