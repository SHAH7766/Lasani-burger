import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../../data/reviews';
import { motion } from 'motion/react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#101B35] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF7438]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            Customer Love
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#FFF3E6] tracking-wider mb-4">
            GOOD FOOD SPEAKS FOR ITSELF
          </h2>
          <div className="flex items-center justify-center gap-2 bg-[#1B2E52] py-2 px-4 rounded-full max-w-xs mx-auto border border-[#CBD4E5]/10 shadow-md">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#FF8A4C] fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold text-[#FFF3E6]">4.3 / 5.0</span>
            <span className="text-xs text-[#AAB8D0]">(~54 Reviews)</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-[#1B2E52] p-8 rounded-[24px] border border-[#CBD4E5]/10 hover:border-[#FF7438]/40 relative flex flex-col justify-between shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#FFF3E6]/5 pointer-events-none" />
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FF8A4C] fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#AAB8D0] leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#CBD4E5]/10 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-[#FFF3E6] text-sm">{review.author}</h4>
                  <span className="text-xs text-[#AAB8D0]">{review.date}</span>
                </div>
                <span className="text-[10px] bg-[#142341] text-[#FF8A4C] px-2.5 py-1 rounded-full border border-[#CBD4E5]/10">
                  {review.source}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
