import React from 'react';
import Navbar from '../components/Navbar';
import PublicServicesSection from '../components/PublicServicesSection';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-6 md:px-12 mb-8">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-dark-slate mb-4">Layanan Publik</h1>
          <p className="text-muted-slate text-lg max-w-2xl">Katalog integrasi layanan masyarakat yang disediakan secara transparan oleh Pemerintah Kota Tangerang.</p>
        </div>
        <PublicServicesSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
