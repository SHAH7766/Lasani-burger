import React from 'react';
import { Utensils, Heart, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section className="py-20 bg-[#101B35] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FF7438]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            The Lasani Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-[#FFF3E6] tracking-wider mb-4">
            WHY FOOD LOVERS CHOOSE US
          </h2>
          <p className="text-sm sm:text-base text-[#AAB8D0]">
            Quality ingredients, passionate preparation, and unforgettable taste in Shahdara.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-[#1B2E52] p-8 rounded-[24px] border border-[#CBD4E5]/10 hover:border-[#FF7438]/50 transition-colors group shadow-xl relative overflow-hidden"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF7438]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 rounded-2xl bg-[#142341] flex items-center justify-center border border-[#CBD4E5]/10 mb-6 shadow-md relative z-10"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="font-display text-2xl text-[#FFF3E6] mb-3 relative z-10">{benefit.title}</h3>
              <p className="text-sm text-[#AAB8D0] leading-relaxed relative z-10">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
