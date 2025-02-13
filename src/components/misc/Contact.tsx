import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import ScrapImg from '@/public/assets/img/aluminum-scraps-1.webp';

function Contact() {
  const { t } = useTranslation();
  return (
    <section
      style={{
        backgroundPosition: 'center',
        backgroundImage: `url(${ScrapImg.src})`,
        backgroundRepeat: 'no-repeat',
      }}
      className="font-theme relative m-0 flex w-full items-center justify-center bg-gradient-to-r from-zinc-800 to-zinc-600 p-0"
    >
      <div className="absolute top-0 left-0 z-[1] h-full w-full bg-black/80 backdrop-blur" />
      <section className="max-w-theme relative z-[2] flex w-full flex-col items-center justify-center gap-5 px-5 py-20 text-center">
        <h3 className="text-3xl font-medium text-white">
          {t('misc.contact-sect.title')}
        </h3>
        <p className="max-w-sm text-sm text-zinc-100">
          {t('misc.contact-sect.content')}
        </p>
        <Link
          href="/contact"
          className="relative flex items-center justify-center bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-150 hover:scale-110"
        >
          {t('misc.contact-sect.button')}
        </Link>
      </section>
    </section>
  );
}

export default Contact;
