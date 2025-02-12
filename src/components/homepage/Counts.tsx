import React from 'react';
import CountUp from 'react-countup';

function Counts() {
  return (
    <section className="m-0 flex w-full items-center justify-center bg-white p-0">
      <section
        data-aos="fade-in"
        className="max-w-theme font-theme flex w-full flex-col items-center justify-center gap-14 px-5 py-20"
      >
        <h2 className="text-center text-4xl font-medium text-zinc-900">
          Alüminyum İmalat ve Geri Dönüşüm
        </h2>
        <section className="flex w-full flex-wrap items-center justify-center gap-10 gap-y-5">
          <section className="flex flex-col items-center justify-end text-center lg:items-start lg:text-start">
            <p className="relative text-4xl font-light text-black">
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                redraw={false}
                delay={1}
                duration={3}
                start={0}
                end={30}
              />
              <span className="absolute -top-2 -right-4 text-lg font-bold text-black">
                K
              </span>
            </p>
            <p className="text-lg">Ton Yıllık Üretim Kapasitesi</p>
          </section>
          <section className="flex flex-col items-center justify-end text-center lg:items-start lg:text-start">
            <p className="relative text-4xl font-light text-black">
              <CountUp
                enableScrollSpy
                scrollSpyOnce
                redraw={false}
                delay={1}
                duration={3}
                start={0}
                end={30}
              />
              <span className="absolute -top-2 -right-4 text-lg font-bold text-black">
                K
              </span>
            </p>
            <p className="text-lg">Ton Yıllık Üretim Kapasitesi</p>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Counts;
