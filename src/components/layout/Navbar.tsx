import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import Logo from '@/public/assets/img/logo.png';
import {
  NavbarLink,
  MobileMenuProps,
  NavbarClass,
} from '@/types/boilerplate.types';

const ClassNames: NavbarClass = {
  desktop:
    'hover:text-white letter-spacing-3 transition-all font-normal text-xs duration-150 uppercase',
  mobile: 'text-white uppercase',
};

export const NavbarLinks: NavbarLink[] = [
  {
    id: 0,
    name: 'navbar.home',
    url: '/',
    classNames: ClassNames,
  },
  {
    id: 1,
    name: 'navbar.us-in-the-sector',
    url: '/us-in-the-sector',
    classNames: ClassNames,
  },
  {
    id: 2,
    name: 'navbar.production',
    url: '/production',
    classNames: ClassNames,
  },
  {
    id: 3,
    name: 'navbar.contact',
    url: '/contact',
    classNames: ClassNames,
  },
];

function MobileMenu({ isActive, children }: MobileMenuProps): React.ReactNode {
  return (
    <div
      className={`${isActive ? 'translate-x-0' : 'translate-x-full'} font-theme fixed top-0 left-0 z-[49] flex h-full w-full flex-col items-center justify-start bg-black px-5 transition-all duration-500 lg:hidden`}
    >
      <ul className="flex h-full w-full flex-col items-center justify-center gap-10 overflow-y-auto py-[150px]">
        {children}
      </ul>
    </div>
  );
}

export default function Navbar(): React.ReactNode {
  const Router = useRouter();
  const { t, i18n } = useTranslation();
  const [scrolledDown, setScrolledDown] = React.useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = React.useState<boolean>(false);

  const getDesktopElements = (): React.ReactNode[] => {
    const elements = NavbarLinks.map(
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

  const getMobileElements = (): React.ReactNode[] => {
    const elements = NavbarLinks.map(
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

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${scrolledDown ? 'bg-black/60 backdrop-blur-xl' : 'bg-transaparent backdrop-blur-none'} font-theme fixed top-0 left-0 z-[50] flex w-full items-center justify-center`}
      >
        <section
          className={`${scrolledDown ? 'py-4' : 'py-6'} max-w-theme flex w-full flex-wrap items-center justify-between gap-5 px-5 transition-all duration-150`}
        >
          <Link href="/" className="relative z-[50]">
            <img
              alt="Logo"
              src={Logo.src}
              className="w-full max-w-[100px] object-contain invert transition-all duration-150"
            />
          </Link>
          <nav className="hidden w-fit items-center justify-end gap-5 lg:flex">
            <ul
              className={` ${scrolledDown ? 'text-zinc-300' : 'text-white'} flex w-fit items-center justify-end gap-10 transition-all duration-150`}
            >
              {getDesktopElements()}
              <li>
                <Link
                  className={ClassNames.desktop}
                  href={Router.asPath}
                  locale={i18n.language === 'tr' ? 'en' : 'tr'}
                >
                  {i18n.language === 'tr' ? 'ENG' : 'TR'}
                </Link>
              </li>
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
              } h-8 w-8 text-center text-white transition-all duration-500`}
            />
          </button>
        </section>
      </header>
      <MobileMenu isActive={mobileMenu}>
        {getMobileElements()}
        <li>
          <Link
            href={Router.asPath}
            className={ClassNames.mobile}
            locale={i18n.language === 'tr' ? 'en' : 'tr'}
          >
            {i18n.language === 'tr' ? 'ENG' : 'TR'}
          </Link>
        </li>
      </MobileMenu>
    </>
  );
}
