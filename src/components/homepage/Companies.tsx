import React from 'react';

import MockLogo from '@/public/assets/img/logo.png';

function Companies() {
  return (
    <section className="m-0 flex w-full flex-col items-center justify-center gap-0 bg-white p-0">
      <section className="max-w-theme font-theme flex w-full flex-col items-center justify-center gap-14 px-5 py-20">
        <h2 className="text-4xl font-medium text-zinc-900">Firmalarımız</h2>
        <ul className="flex flex-wrap items-center justify-center gap-14">
          <li className="flex flex-col items-center justify-center gap-3 transition-all duration-150 hover:scale-110">
            <img
              alt="Logo"
              src={MockLogo.src}
              className="w-full max-w-[150px] object-contain"
            />
            <p className="text-lg font-medium text-zinc-700">MURATLAR</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-3 transition-all duration-150 hover:scale-110">
            <img
              alt="Logo"
              src={MockLogo.src}
              className="w-full max-w-[150px] object-contain"
            />
            <p className="text-lg font-medium text-zinc-700">
              Murat Geri Dönüşüm
            </p>
          </li>
          <li className="flex flex-col items-center justify-center gap-3 transition-all duration-150 hover:scale-110">
            <img
              alt="Logo"
              src={MockLogo.src}
              className="w-full max-w-[150px] object-contain"
            />
            <p className="text-lg font-medium text-zinc-700">MG Lojistik</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-3 transition-all duration-150 hover:scale-110">
            <img
              alt="Logo"
              src={MockLogo.src}
              className="w-full max-w-[150px] object-contain"
            />
            <p className="text-lg font-medium text-zinc-700">Mcook</p>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Companies;
