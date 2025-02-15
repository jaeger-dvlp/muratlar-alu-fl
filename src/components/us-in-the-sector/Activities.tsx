import React from 'react';
import { useTranslation } from 'next-i18next';
import { AllCompanies } from '@/components/homepage/Companies';

function Activities() {
  const { t } = useTranslation();
  return (
    <section className="m-0 flex w-full items-start justify-center gap-0 bg-white p-0">
      <section
        data-aos="fade-in"
        data-aos-delay="750"
        className="max-w-theme font-theme flex w-full flex-col items-start justify-start gap-14 px-5 py-20"
      >
        <h3 className="text-4xl font-medium text-zinc-900">
          {t('us-in-the-sector.activities.title')}
        </h3>
        <ul className="m-0 flex flex-col items-start justify-start gap-14 p-0">
          {AllCompanies.map(({ id, name, content, logo }, key) => (
            <>
              <li
                data-aos="fade-in"
                data-aos-offset="100"
                key={`act-company-${id}`}
                className="flex w-full flex-wrap items-end justify-start gap-10 lg:flex-nowrap"
              >
                <img
                  src={logo}
                  alt={name}
                  className="w-full max-w-[124px] object-contain object-center lg:max-w-[200px]"
                />
                <section className="flex flex-col items-start justify-center gap-0">
                  <h4 className="text-2xl font-medium text-zinc-900">{name}</h4>
                  <p className="text-sm font-light text-zinc-700">
                    {t(content)}
                  </p>
                </section>
              </li>
              {key !== AllCompanies.length - 1 && (
                <span
                  data-aos="fade-in"
                  data-aos-offset="100"
                  className="flex w-full flex-row items-center justify-center gap-2"
                >
                  <span className="aspect-square h-1 w-1 bg-zinc-400" />
                  <span className="h-px w-full bg-zinc-300" />
                  <span className="aspect-square h-1 w-1 bg-zinc-400" />
                  <span className="h-px w-full bg-zinc-300" />
                  <span className="aspect-square h-1 w-1 bg-zinc-400" />
                </span>
              )}
            </>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Activities;
