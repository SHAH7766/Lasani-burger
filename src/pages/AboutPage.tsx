import React from 'react';
import { Utensils, Heart, ShieldCheck, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#101B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-2">
            Our Story & Heritage
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-[#FFF3E6] tracking-wider mb-4">
            WELCOME TO LASANI BURGER & BBQ
          </h1>
          <p className="text-sm sm:text-base text-[#AAB8D0]">
            Serving Shahdara, Lahore with mouth-watering burgers, authentic smoky BBQ platters, and warm hospitality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[450px] rounded-[28px] overflow-hidden border border-[#CBD4E5]/15 shadow-2xl bg-[#1B2E52]">
              <img
                src="/images/bbq/chicken-tikka-boti-plate.jpg"
                alt="Lasani Burger & BBQ Spread"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#142341]/90 backdrop-blur-md rounded-2xl border border-[#CBD4E5]/15">
                <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-wider block mb-1">
                  Shahdara's Favorite Spot
                </span>
                <p className="text-sm text-[#FFF3E6] font-medium">
                  "Where tradition meets modern fast-food passion on Imamia Colony Road."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block">
              The Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#FFF3E6] tracking-wider">
              CRAFTING MEMORABLE MEALS FOR SHAHDARA
            </h2>
            <p className="text-sm text-[#AAB8D0] leading-relaxed">
              Located in the heart of Imamia Colony, Shahdara, Lahore, Lasani Burger & BBQ was founded with a singular mission: to serve high-quality, delicious food that brings people together. Whether you are craving the smoky crunch of our Zinger Burgers or the tender, coal-smoked perfection of our Special Beef Seekh Kebabs and Chicken Tikka Boti, we prepare every dish with care and authenticity.
            </p>
            <p className="text-sm text-[#AAB8D0] leading-relaxed">
              We source fresh local ingredients and authentic spices to ensure that every bite delivers an unforgettable flavor explosion. Our commitment to cleanliness, prompt service, and unbeatable taste has made us a trusted culinary home for families and food enthusiasts across Shahdara.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-[#FF7438]/25"
              >
                Explore Menu
              </Link>
              <Link
                to="/contact"
                className="bg-[#1B2E52] hover:bg-[#142341] text-[#FFF3E6] font-semibold px-7 py-3.5 rounded-full text-sm transition-all border border-[#CBD4E5]/15"
              >
                Contact & Location
              </Link>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-[#1B2E52] p-8 rounded-[24px] border border-[#CBD4E5]/10 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF8A4C] mb-6 border border-[#CBD4E5]/10 shadow-md">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-[#FFF3E6] mb-3">Fresh Ingredients</h3>
            <p className="text-sm text-[#AAB8D0] leading-relaxed">
              We use only fresh meats, crisp vegetables, and premium spices in every burger, pizza, and BBQ skewer.
            </p>
          </div>

          <div className="bg-[#1B2E52] p-8 rounded-[24px] border border-[#CBD4E5]/10 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF7438] mb-6 border border-[#CBD4E5]/10 shadow-md">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-[#FFF3E6] mb-3">Made with Passion</h3>
            <p className="text-sm text-[#AAB8D0] leading-relaxed">
              Our chefs take pride in every recipe, ensuring authentic flavors that keep our customers coming back.
            </p>
          </div>

          <div className="bg-[#1B2E52] p-8 rounded-[24px] border border-[#CBD4E5]/10 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF8A4C] mb-6 border border-[#CBD4E5]/10 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-[#FFF3E6] mb-3">Hygiene & Quality</h3>
            <p className="text-sm text-[#AAB8D0] leading-relaxed">
              We adhere to strict cleanliness and food safety standards to guarantee safe, wholesome meals for your family.
            </p>
          </div>

          <div className="bg-[#1B2E52] p-8 rounded-[24px] border border-[#CBD4E5]/10 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF7438] mb-6 border border-[#CBD4E5]/10 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl text-[#FFF3E6] mb-3">Shahdara's Pride</h3>
            <p className="text-sm text-[#AAB8D0] leading-relaxed">
              Recognized for outstanding taste and friendly service right here on Imamia Colony Road.
            </p>
          </div>
        </div>

        {/* Location Highlight Banner */}
        <div className="bg-[#1B2E52] rounded-[28px] p-8 sm:p-12 border border-[#CBD4E5]/15 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#142341] flex items-center justify-center text-[#FF8A4C] shrink-0 border border-[#CBD4E5]/10 shadow-md">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold text-[#FF8A4C] uppercase tracking-widest block mb-1">
                Visit Us Today
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#FFF3E6] mb-1">
                Imamia Colony Road, Shahdara, Lahore
              </h3>
              <p className="text-sm text-[#AAB8D0]">Open daily from 4:30 PM onwards for dine-in & takeaway.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="bg-[#FF7438] hover:bg-[#FF8A4C] text-[#101B35] font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-[#FF7438]/25 shrink-0"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </div>
  );
};
