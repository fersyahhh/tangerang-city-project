import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import imgAlAzhom from '../assets/al-azhom.jpg';
import imgPasarLama from '../assets/pasar-lama.jpg';
import imgCipondoh from '../assets/situ-cipondoh.jpeg';
import imgTamanTematik from '../assets/taman-tematik.webp';

const DestinationSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const destinations = [
    {
      id: 1,
      name: "Masjid Al-A'zhom",
      type: "Wisata Religi",
      image: imgAlAzhom,
      fallback: "https://images.unsplash.com/photo-1584551246679-0daf3d375eb9?w=800&q=80",
      desc: "Masjid terbesar dengan 5 kubah megah ikon spiritual kota.",
      mapsUrl: "https://www.google.com/maps/search/Masjid+Raya+Al-A'zhom+Tangerang"
    },
    {
      id: 2,
      name: "Kawasan Pasar Lama",
      type: "Budaya & Kuliner",
      image: imgPasarLama,
      fallback: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
      desc: "Jejak sejarah dan surga kuliner malam yang tak pernah tidur.",
      mapsUrl: "https://www.google.com/maps/search/Kawasan+Pasar+Lama+Tangerang"
    },
    {
      id: 3,
      name: "Situ Cipondoh",
      type: "Wisata Alam",
      image: imgCipondoh,
      fallback: "https://images.unsplash.com/photo-1518182170546-0766de6f6aca?w=800&q=80",
      desc: "Danau asri tempat rekreasi air favorit keluarga.",
      mapsUrl: "https://www.google.com/maps/search/Situ+Cipondoh+Tangerang"
    },
    {
      id: 4,
      name: "Taman Tematik",
      type: "Ruang Terbuka",
      image: imgTamanTematik,
      fallback: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80",
      desc: "Puluhan taman tematik cantik yang tersebar di seluruh penjuru kota.",
      mapsUrl: "https://www.google.com/maps/search/Taman+Tematik+Kota+Tangerang"
    }
  ];

  return (
    <section className="py-24 bg-slate-gray overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold text-dark-slate mb-4 tracking-tight">Eksplorasi Kota</h2>
          <p className="text-muted-slate text-lg font-medium">Temukan keindahan dan keragaman destinasi ikonik Tangerang.</p>
        </div>

        {/* Expanding Cards Layout */}
        <div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-4 w-full max-w-6xl mx-auto">
          {destinations.map((dest, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div 
                key={dest.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-shrink-0 shadow-lg ${
                  isActive ? 'lg:w-[55%] w-full h-[320px] md:h-[400px] lg:h-full' : 'lg:w-[15%] w-full h-24 lg:h-full'
                }`}
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = dest.fallback;
                  }}
                />
                
                {/* Premium Gradient Overlay matching new palette */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive 
                    ? 'bg-gradient-to-t from-royal-blue/95 via-royal-blue/40 to-transparent' 
                    : 'bg-dark-slate/60 hover:bg-dark-slate/40'
                }`}></div>
                
                {/* Content */}
                <div className={`absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full transition-all duration-500 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 md:opacity-100 md:translate-y-0'
                }`}>
                  
                  {/* Vertical Title (when inactive on desktop) */}
                  <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap transform -rotate-90 origin-bottom-left transition-opacity duration-300 hidden md:block ${
                    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 text-pure-white font-bold tracking-widest text-sm uppercase'
                  }`}>
                    {dest.name}
                  </div>

                  {/* Full Content (when active) */}
                  <div className={`transition-all duration-500 delay-100 ${
                    isActive ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8 absolute pointer-events-none'
                  }`}>
                    <span className="inline-block px-4 py-1.5 bg-pure-white text-royal-blue text-[11px] font-black tracking-widest uppercase mb-4 rounded-full shadow-sm">
                      {dest.type}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-extrabold text-pure-white mb-3 tracking-tight">{dest.name}</h3>
                    <p className="text-pure-white/90 text-base max-w-md line-clamp-2 md:line-clamp-none mb-8 font-medium">
                      {dest.desc}
                    </p>
                    <a 
                  href={dest.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pure-white text-royal-blue px-6 py-3 rounded-xl font-bold hover:bg-amber-yellow hover:text-dark-slate transition-colors shadow-lg w-fit cursor-pointer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MapPin size={18} /> Jelajahi Sekarang
                </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
