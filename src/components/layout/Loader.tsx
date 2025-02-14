import React from 'react';
import { useRouter } from 'next/router';
import Wait from '@/common/utils/Wait.util';
import { AiOutlineLoading } from 'react-icons/ai';

function Loader(): React.ReactNode {
  const Router = useRouter();
  const [loader, setLoader] = React.useState({
    inHTML: true,
    isActive: true,
  });

  const HideLoader = async () => {
    await Wait(500);
    setLoader({
      inHTML: true,
      isActive: false,
    });
    await Wait(500);
    setLoader({
      inHTML: false,
      isActive: false,
    });
  };

  const ShowLoader = async () => {
    setLoader({
      inHTML: true,
      isActive: true,
    });
  };

  React.useEffect(() => {
    Router.events.on('routeChangeStart', () => ShowLoader());
    Router.events.on('routeChangeComplete', () => HideLoader());
    Router.events.on('routeChangeError', () => HideLoader());

    return () => {
      Router.events.off('routeChangeStart', () => ShowLoader());
      Router.events.off('routeChangeComplete', () => HideLoader());
      Router.events.off('routeChangeError', () => HideLoader());
    };
  }, []);

  React.useEffect(() => {
    HideLoader();
  }, []);

  return (
    (loader.inHTML && (
      <div
        style={{
          transition: loader.isActive ? 'none' : 'all 0.5s',
        }}
        className={` ${loader.isActive ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 !z-[999999] flex h-full w-full items-center justify-center bg-zinc-900`}
      >
        <AiOutlineLoading
          style={{
            animationDuration: '0.85s',
          }}
          className="h-6 w-6 animate-spin rounded-full bg-white/5 p-1 text-white"
        />
      </div>
    )) ||
    null
  );
}

export default Loader;
