import React from 'react';

import Abstarct1 from '@/public/assets/img/abstract-1.webp';

function VisionMision() {
  return (
    <section
      style={{
        backgroundPosition: 'center',
        backgroundImage: `url(${Abstarct1.src})`,
        backgroundRepeat: 'no-repeat',
      }}
      className="relative flex w-full flex-col items-center justify-center bg-cover px-5 py-20"
    >
      <div className="absolute top-0 left-0 z-[1] h-full w-full bg-black/50 backdrop-blur-lg" />
      <section className="font-theme max-w-theme z-[2] flex w-full flex-col items-start justify-center gap-14 text-start lg:items-center lg:text-center">
        <h2 className="text-4xl font-medium text-white">Vizyon & Misyon</h2>
        <section className="flex flex-col items-start gap-5 text-start lg:items-center lg:text-center">
          <p className="max-w-xl text-sm text-zinc-300">
            Sektörün bugününü iyi analiz eden, yarınını da bugünden
            planlayabilen, fark yaratmaya ve değer katmaya inanan, gerçekçi,
            yapılabilir, ölçülebilir hedeflerin takipçisi olan kurumsallık ve
            profesyonellik anlayışını sürdürmektir.
          </p>
          <p className="max-w-xl text-sm text-zinc-300">
            Hedeflerimize ulaşma yolunda, çağdaş bilgi ve teknolojileri
            kullanarak, kuruluşumuzda kalite anlayışını, şeffaflığı, katılımcı
            yaklaşımı ilke edinmek ve tüm iş ortaklarımıza değer katacak şekilde
            bir yönetim şekli sunmak.
          </p>
        </section>
      </section>
    </section>
  );
}

export default VisionMision;
