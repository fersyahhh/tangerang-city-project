import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CityStatsSection from '../components/CityStatsSection';
import DestinationSection from '../components/DestinationSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-24">
        <HeroSection />
        <CityStatsSection />
        <DestinationSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
