import React from 'react';
import { Utensils, Heart, ShieldCheck, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen theme-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold theme-accent uppercase tracking-widest block mb-2">
            Our Story & Heritage
          </span>
          <h1 className="font-display text-4xl sm:text-6xl theme-text-main tracking-wider mb-4">
            WELCOME TO LASANI BURGER & BBQ
          </h1>
          <p className="text-sm sm:text-base theme-text-muted">
            Serving Shahdara, Lahore with mouth-watering burgers, authentic smoky BBQ platters, and warm hospitality.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative h-[400px] sm:h-[450px] rounded-[28px] overflow-hidden border theme-border shadow-2xl theme-bg-elevated">
              <img
                src="/images/bbq/chicken-tikka-boti-plate.jpg"
                alt="Lasani Burger & BBQ Spread"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg-primary)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 theme-bg-secondary/90 backdrop-blur-md rounded-2xl border theme-border">
                <span className="text-xs font-semibold theme-accent uppercase tracking-wider block mb-1">
                  Shahdara's Favorite Spot
                </span>
                <p className="text-sm theme-text-main font-medium">
                  "Where tradition meets modern fast-food passion on Imamia Colony Road."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-semibold theme-accent uppercase tracking-widest block">
              The Journey
            </span>
            <h2 className="font-display text-3xl sm:text-4xl theme-text-main tracking-wider">
              CRAFTING MEMORABLE MEALS FOR SHAHDARA
            </h2>
            <p className="text-sm theme-text-muted leading-relaxed">
              Located in the heart of Imamia Colony, Shahdara, Lahore, Lasani Burger & BBQ was founded with a singular mission: to serve high-quality, delicious food that brings people together. Whether you are craving the smoky crunch of our Zinger Burgers or the tender, coal-smoked perfection of our Special Beef Seekh Kebabs and Chicken Tikka Boti, we prepare every dish with care and authenticity.
            </p>
            <p className="text-sm theme-text-muted leading-relaxed">
              We source fresh local ingredients and authentic spices to ensure that every bite delivers an unforgettable flavor explosion. Our commitment to cleanliness, prompt service, and unbeatable taste has made us a trusted culinary home for families and food enthusiasts across Shahdara.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="btn-primary px-7 py-3.5 rounded-full text-sm"
              >
                Explore Menu
              </Link>
              <Link
                to="/contact"
                className="btn-secondary px-7 py-3.5 rounded-full text-sm"
              >
                Contact & Location
              </Link>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="theme-bg-elevated p-8 rounded-[24px] border theme-border shadow-xl">
            <div className="w-14 h-14 rounded-2xl theme-bg-secondary flex items-center justify-center theme-accent mb-6 border theme-border shadow-md">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl theme-text-main mb-3">Fresh Ingredients</h3>
            <p className="text-sm theme-text-muted leading-relaxed">
              We use only fresh meats, crisp vegetables, and premium spices in every burger, pizza, and BBQ skewer.
            </p>
          </div>

          <div className="theme-bg-elevated p-8 rounded-[24px] border theme-border shadow-xl">
            <div className="w-14 h-14 rounded-2xl theme-bg-secondary flex items-center justify-center theme-accent mb-6 border theme-border shadow-md">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl theme-text-main mb-3">Made with Passion</h3>
            <p className="text-sm theme-text-muted leading-relaxed">
              Our chefs take pride in every recipe, ensuring authentic flavors that keep our customers coming back.
            </p>
          </div>

          <div className="theme-bg-elevated p-8 rounded-[24px] border theme-border shadow-xl">
            <div className="w-14 h-14 rounded-2xl theme-bg-secondary flex items-center justify-center theme-accent mb-6 border theme-border shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl theme-text-main mb-3">Hygiene & Quality</h3>
            <p className="text-sm theme-text-muted leading-relaxed">
              We adhere to strict cleanliness and food safety standards to guarantee safe, wholesome meals for your family.
            </p>
          </div>

          <div className="theme-bg-elevated p-8 rounded-[24px] border theme-border shadow-xl">
            <div className="w-14 h-14 rounded-2xl theme-bg-secondary flex items-center justify-center theme-accent mb-6 border theme-border shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl theme-text-main mb-3">Shahdara's Pride</h3>
            <p className="text-sm theme-text-muted leading-relaxed">
              Recognized for outstanding taste and friendly service right here on Imamia Colony Road.
            </p>
          </div>
        </div>

        {/* Location Highlight Banner */}
        <div className="theme-bg-elevated rounded-[28px] p-8 sm:p-12 border theme-border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl theme-bg-secondary flex items-center justify-center theme-accent shrink-0 border theme-border shadow-md">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-semibold theme-accent uppercase tracking-widest block mb-1">
                Visit Us Today
              </span>
              <h3 className="font-display text-2xl sm:text-3xl theme-text-main mb-1">
                Imamia Colony Road, Shahdara, Lahore
              </h3>
              <p className="text-sm theme-text-muted">Open daily from 4:30 PM onwards for dine-in & takeaway.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="btn-primary px-8 py-3.5 rounded-full text-sm shrink-0"
          >
            Get Directions
          </Link>
        </div>
      </div>
    </div>
  );
};
