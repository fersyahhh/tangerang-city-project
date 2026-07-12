import React from 'react';
import Navbar from '../components/Navbar';
import VisionMissionSection from '../components/VisionMissionSection';
import TransparencySection from '../components/TransparencySection';
import Footer from '../components/Footer';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32">
        <div className="container mx-auto px-6 md:px-12 mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-dark-slate mb-4">Profil Kota Tangerang</h1>
          <p className="text-muted-slate text-lg max-w-2xl">Mengenal lebih dekat visi, misi, dan pimpinan daerah yang mengabdi untuk kemajuan kota tercinta.</p>
        </div>
        <VisionMissionSection />
        <TransparencySection />
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
