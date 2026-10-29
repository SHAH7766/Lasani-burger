import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { PromoMarquee } from '../components/home/PromoMarquee';
import { FeaturedMenu } from '../components/home/FeaturedMenu';
import { SignatureDish } from '../components/home/SignatureDish';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FoodGallery } from '../components/home/FoodGallery';
import { ReviewsSection } from '../components/home/ReviewsSection';
import { LocationSection } from '../components/home/LocationSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PromoMarquee />
      <FeaturedMenu />
      <SignatureDish />
      <WhyChooseUs />
      <FoodGallery />
      <ReviewsSection />
      <LocationSection />
    </div>
  );
};
