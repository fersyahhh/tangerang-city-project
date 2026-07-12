import React from 'react';
import { HeartPulse, FileText, GraduationCap, Building } from 'lucide-react';

const PublicServicesSection: React.FC = () => {
  const services = [
    {
      id: 0,
      icon: <HeartPulse size={24} />,
      title: "Kesehatan & Sosial",
      items: [
        "Pendaftaran Antrean Puskesmas Online",
        "Jadwal Dokter RSUD Kota Tangerang",
        "Pengecekan Bantuan Sosial Terpadu",
        "Layanan Ambulans 112"
      ],
      color: "text-emerald-green",
      bg: "bg-emerald-green/10"
    },
    {
      id: 1,
      icon: <FileText size={24} />,
      title: "Administrasi Kependudukan",
      items: [
        "Pencetakan KTP Elektronik (e-KTP)",
        "Pembuatan Kartu Keluarga (KK)",
        "Akta Kelahiran & Akta Kematian",
        "Surat Keterangan Pindah WNI (SKPWNI)"
      ],
      color: "text-royal-blue",
      bg: "bg-royal-blue/10"
    },
    {
      id: 2,
      icon: <GraduationCap size={24} />,
      title: "Pendidikan & Beasiswa",
      items: [
        "Informasi PPDB Online",
        "Pendaftaran Beasiswa Berprestasi",
        "Kalender Akademik Daerah",
        "Layanan Perpustakaan Kota"
      ],
      color: "text-amber-yellow",
      bg: "bg-amber-yellow/10"
    },
    {
      id: 3,
      icon: <Building size={24} />,
      title: "Perizinan & Investasi",
      items: [
        "Pendaftaran Izin Usaha (OSS)",
        "Pengecekan Tagihan PBB",
        "Peta Zonasi Komersial & Industri",
        "Layanan Pajak Daerah Terpadu"
      ],
      color: "text-indigo-500",
      bg: "bg-indigo-500/10"
    }
  ];

  return (
    <section className="py-12 bg-pure-white mb-24">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((svc) => (
            <div key={svc.id} className="bg-slate-gray p-6 md:p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${svc.bg} ${svc.color} shrink-0`}>
                  {React.cloneElement(svc.icon as React.ReactElement<any>, { className: 'w-7 h-7 md:w-8 md:h-8' })}
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-dark-slate">{svc.title}</h3>
                </div>
              </div>
              <ul className="space-y-4">
                {svc.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group cursor-pointer">
                    <div className="w-6 h-6 rounded-full bg-pure-white border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-royal-blue group-hover:border-transparent transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-pure-white transition-colors"></div>
                    </div>
                    <span className="font-medium text-[15px] text-muted-slate group-hover:text-royal-blue transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicServicesSection;
