import React from 'react';

const CityStatsSection: React.FC = () => {
  const stats = [
    {
      value: "78.80",
      label: "Indeks Pembangunan Manusia",
      desc: "Kategori Tinggi (BPS 2024)",
      suffix: ""
    },
    {
      value: "150",
      label: "Taman Tematik & RTH",
      desc: "Ruang Terbuka Hijau Inklusif",
      suffix: "+"
    },
    {
      value: "98",
      label: "Cakupan Layanan Kesehatan",
      desc: "Fasilitas Kesehatan Tingkat Pertama",
      suffix: "%"
    },
    {
      value: "10",
      label: "UMKM Terdigitalisasi",
      desc: "Ribuan pelaku usaha binaan daerah",
      suffix: "rb+"
    }
  ];

  return (
    <section className="py-20 bg-slate-gray relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-dark-slate tracking-tight mb-4">
            Indikator Kemajuan Kota
          </h2>
          <p className="text-muted-slate text-base md:text-lg font-medium px-2 md:px-0">
            Bukti nyata komitmen kami dalam membangun kota yang berdaya saing dan nyaman dihuni bagi seluruh lapisan masyarakat.
          </p>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-y-10 md:gap-y-12">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex-1 text-center w-full md:w-auto px-4">
                <div className="font-display text-5xl md:text-6xl font-black text-royal-blue mb-2 tracking-tighter">
                  {stat.value}<span className="text-emerald-green">{stat.suffix}</span>
                </div>
                <h3 className="font-bold text-dark-slate text-lg mb-1">{stat.label}</h3>
                <p className="text-muted-slate text-sm font-medium">{stat.desc}</p>
              </div>
              
              {/* Divider (Hidden on mobile) */}
              {idx !== stats.length - 1 && (
                <div className="hidden md:block w-px h-24 bg-gray-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityStatsSection;
