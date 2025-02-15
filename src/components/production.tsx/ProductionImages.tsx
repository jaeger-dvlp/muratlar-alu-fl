import React from 'react';
import { useTranslation } from 'next-i18next';

import ImgAluProfile1 from '@/public/assets/img/alu-profile-1.webp';
import ImgAluProfile2 from '@/public/assets/img/alu-profile-2.webp';
import ImgAluProfile3 from '@/public/assets/img/alu-profile-3.webp';
import ImgAluProfile4 from '@/public/assets/img/alu-profile-4.webp';

function ProductionImages() {
  const { t } = useTranslation();
  return (
    <section className="m-0 flex w-full items-start justify-center gap-0 bg-white p-0">
      <section
        data-aos="fade-in"
        data-aos-delay="750"
        className="max-w-theme font-theme flex w-full flex-col items-start justify-start gap-14 px-5 py-20"
      >
        <section className="flex flex-col items-start justify-start gap-5 text-left">
          <h3 className="text-4xl font-medium text-zinc-900">
            {t('production.images.title')}
          </h3>
          <p className="text-sm font-light text-zinc-700">
            {t('production.images.content')}
          </p>
        </section>
        <section className="flex w-full flex-wrap items-center justify-center gap-[2%]">
          <img
            alt="Aluminium Profile"
            src={ImgAluProfile2.src}
            className="h-[200px] w-full max-w-[calc(25%_-_2%)] object-cover object-center transition-all duration-200 hover:scale-110"
          />
          <img
            alt="Aluminium Profile"
            src={ImgAluProfile1.src}
            className="h-[200px] w-full max-w-[calc(50%)] object-cover object-center transition-all duration-200 hover:scale-110"
          />
          <img
            alt="Aluminium Profile"
            src={ImgAluProfile3.src}
            className="h-[200px] w-full max-w-[calc(25%_-_2%)] object-cover object-center transition-all duration-200 hover:scale-110"
          />
          <img
            alt="Aluminium Profile"
            src={ImgAluProfile4.src}
            className="mt-[2%] h-[200px] w-full object-cover object-center transition-all duration-200 hover:scale-110"
          />
        </section>
      </section>
    </section>
  );
}

export default ProductionImages;
