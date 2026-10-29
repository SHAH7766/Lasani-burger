import React from 'react';
import { Utensils, Heart, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <Utensils className="w-6 h-6 text-[#FF8A4C]" />,
      title: 'Burger & BBQ Variety',
      description: 'From crispy zinger burgers to charcoal-grilled tikka and kebabs, we satisfy every craving under one roof.'
    },
    {
      icon: <Heart className="w-6 h-6 text-[#FF7438]" />,
      title: 'Something for Every Craving',
      description: 'Whether you want fast-food comfort or smoky traditional Pakistani BBQ, our menu has something delicious for you.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#FF8A4C]" />,
      title: 'A Place to Share Good Food',
      description: 'Warm, welcoming atmosphere designed for families, friends, and food lovers to enjoy memorable meals together.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#FF7438]" />,
      title: 'Convenient Local Location',
      description: 'Easily accessible on Imamia Colony Road, Imamia Colony, Shahdara, Lahore with quick dine-in and takeaway.'
    }
  ];

  return (
    <section className="py-20 bg-[#101B35] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            The Lasani Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#FFF3E6] tracking-wider mb-4">
            WHY FOOD LOVERS CHOOSE US
          </h2>
          <p className="text-sm sm:text-base text-[#AAB8D0]">
            Quality ingredients, passionate preparation, and unforgettable taste in Shahdara.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1B2E52] p-8 rounded-[24px] border border-[#CBD4E5]/10 hover:border-[#FF7438]/50 transition-all group shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#142341] flex items-center justify-center border border-[#CBD4E5]/10 mb-6 group-hover:scale-110 transition-transform shadow-md">
                {benefit.icon}
              </div>
              <h3 className="font-display text-2xl text-[#FFF3E6] mb-3">{benefit.title}</h3>
              <p className="text-sm text-[#AAB8D0] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
