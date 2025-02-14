import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import Abstarct2 from '@/public/assets/img/abstract-2.webp';

type Props = {
  title: string;
};

function RouteBanner({ title }: Props) {
  const { t } = useTranslation();
  return (
    <section
      style={{
        backgroundPosition: 'center',
        backgroundImage: `url(${Abstarct2.src})`,
        backgroundRepeat: 'no-repeat',
      }}
      className="relative flex w-full flex-col items-center justify-center bg-cover py-20"
    >
      <div className="absolute top-0 left-0 z-[1] h-full w-full bg-black/70 backdrop-blur" />
      <section
        data-aos="fade-down"
        className="max-w-theme font-theme relative z-[2] mt-24 flex w-full flex-col items-start justify-center gap-5 px-5"
      >
        <h2 className="text-4xl font-light text-white">{t(title)}</h2>
        <ul className="m-0 flex flex-wrap items-center justify-start gap-2 p-0">
          <li>
            <Link
              className="text-sm font-normal text-zinc-200 transition-all duration-150 hover:text-white hover:underline"
              href="/"
            >
              {t('navbar.home')}
            </Link>
          </li>
          <span className="mt-1 text-white">{'>'}</span>
          <li>
            <p className="text-sm font-normal text-zinc-300">{t(title)}</p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default RouteBanner;
