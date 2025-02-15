import React from 'react';
import { useTranslation } from 'next-i18next';

import Abstarct1 from '@/public/assets/img/abstract-1.webp';

function VisionMision() {
  const { t } = useTranslation();
  return (
    <section
      style={{
        backgroundPosition: 'center',
        backgroundImage: `url(${Abstarct1.src})`,
        backgroundRepeat: 'no-repeat',
      }}
      className="relative flex w-full flex-col items-center justify-center bg-cover px-5 py-20"
    >
      <div className="absolute top-0 left-0 z-[1] h-full w-full bg-black/60 backdrop-blur" />
      <section
        data-aos="fade-in"
        className="font-theme max-w-theme z-[2] flex w-full flex-col items-start justify-center gap-14 text-left lg:items-center lg:text-center"
      >
        <h2 className="text-4xl font-medium text-white">
          {t('home.vision.title')}
        </h2>
        <section className="flex flex-col items-start gap-5 text-left lg:items-center lg:text-center">
          <p className="max-w-xl text-sm text-zinc-100">
            {t('home.vision.content.0')}
          </p>
          <p className="max-w-xl text-sm text-zinc-100">
            {t('home.vision.content.1')}
          </p>
        </section>
      </section>
    </section>
  );
}

export default VisionMision;
