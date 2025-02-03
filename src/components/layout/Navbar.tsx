import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import Logo from '@/public/assets/img/beyond.png';
import {
  NavbarLink,
  MobileMenuProps,
  NavbarClass,
} from '@/types/boilerplate.types';

const ClassNames: NavbarClass = {
  desktop: 'text-black',
  mobile: 'text-white',
};

function MobileMenu({ isActive, children }: MobileMenuProps): JSX.Element {
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'} fixed top-0 left-0 z-[49] flex h-full w-full flex-col items-center justify-start bg-zinc-500 px-5 transition-all duration-500 lg:hidden`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-auto py-[150px]">
        {children}
      </ul>
    </div>
  );
}

export default function Navbar(): JSX.Element {
  const Router = useRouter();
  const t = (name: string) => name;
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  const HeaderLinks: NavbarLink[] = [
    {
      id: 0,
      name: 'header.home',
      url: '/',
      classNames: ClassNames,
    },
  ];

  const getDesktopElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { desktop: className }, external }) => (
        <li key={`d-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t(name)}
            </a>
          ) : (
            <Link className={className} href={url}>
              {t(name)}
            </Link>
          )}
        </li>
      ),
    );

    return elements;
  };

  const getMobileElements = (): JSX.Element[] => {
    const elements = HeaderLinks.map(
      ({ url, name, id, classNames: { mobile: className }, external }) => (
        <li key={`m-elm-${id}`}>
          {external ? (
            <a
              className={className}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {t(name)}
            </a>
          ) : (
            <Link className={className} href={url}>
              {t(name)}
            </Link>
          )}
        </li>
      ),
    );

    return elements;
  };

  React.useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenu]);

  React.useEffect(() => {
    setMobileMenu(false);
  }, [Router]);

  return (
    <header className="font-theme fixed top-0 left-0 z-[10] flex min-h-[100px] w-full items-center justify-center bg-zinc-300">
      <section className="max-w-theme flex w-full flex-wrap items-center justify-between gap-5 p-5">
        <Link href="/" className="relative z-[50]">
          <img
            alt="Logo"
            src={Logo.src}
            className="aspect-square w-10 bg-black object-contain p-1 opacity-80 transition-all duration-150"
          />
        </Link>
        <nav className="hidden w-fit items-center justify-end gap-5 lg:flex">
          <ul className="flex w-fit items-center justify-end gap-5">
            {getDesktopElements()}
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="z-[100] flex max-w-fit items-center justify-center lg:hidden"
        >
          <HiOutlineMenuAlt3
            className={`${
              mobileMenu ? 'rotate-180' : 'rotate-0'
            } h-8 w-8 text-center transition-all duration-500`}
          />
        </button>
      </section>
      <MobileMenu isActive={mobileMenu}>{getMobileElements()}</MobileMenu>
    </header>
  );
}
