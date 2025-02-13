import React from 'react';
import { useTranslation } from 'next-i18next';

import MockLogo from '@/public/assets/img/logo.png';

export const AllCompanies = [
  {
    id: 0,
    name: 'MURATLAR',
    logo: MockLogo.src,
  },
  {
    id: 1,
    name: 'Murat Geri Dönüşüm',
    logo: MockLogo.src,
  },
  {
    id: 2,
    name: 'MG Lojistik',
    logo: MockLogo.src,
  },
  {
    id: 3,
    name: 'Mcook',
    logo: MockLogo.src,
  },
];

function Companies() {
  const { t } = useTranslation();
  return (
    <section className="m-0 flex w-full flex-col items-center justify-center gap-0 bg-white p-0">
      <section
        data-aos="fade-in"
        className="max-w-theme font-theme flex w-full flex-col items-center justify-center gap-14 px-5 py-20"
      >
        <h2 className="text-4xl font-medium text-zinc-900">
          {t('home.companies.title')}
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-14">
          {AllCompanies.map(({ id, name, logo }) => (
            <li
              key={`company-${id}`}
              className="flex flex-col items-center justify-center gap-3 transition-all duration-150 hover:scale-110"
            >
              <img
                alt="Logo"
                src={logo}
                className="w-full max-w-[124px] object-contain"
              />
              <p className="text-lg font-medium text-zinc-700">{name}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Companies;
