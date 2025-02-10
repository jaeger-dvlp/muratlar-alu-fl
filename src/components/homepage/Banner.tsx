import React from 'react';

import Logo from '@/public/assets/img/logo-wtext.png';

function Banner() {
  return (
    <section className="relative m-0 grid h-screen w-full grid-cols-1 overflow-hidden p-0">
      <div className="absolute top-0 left-0 z-10 flex h-full w-full flex-col items-center justify-center gap-5 bg-black/70 p-5">
        <img
          src={Logo.src}
          alt="Logo"
          className="w-full max-w-[500px] invert"
        />
      </div>
      <video
        loop
        muted
        autoPlay
        playsInline
        controls={false}
        className="h-full w-full object-cover object-center"
      >
        <source src="/assets/img/banner-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Banner;
