import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { NavbarLinks } from '@/components/layout/Navbar';
import { FooterSocialLink } from '@/types/boilerplate.types';
import { AllCompanies } from '@/components/homepage/Companies';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

import Logo from '@/public/assets/img/logo-wtext.png';

const FooterSocialLinks: FooterSocialLink[] = [
  {
    id: 0,
    name: 'Instagram',
    url: 'https://www.instagram.com',
    icon: BsInstagram,
  },
  {
    id: 1,
    name: 'Linkedin',
    url: 'https://www.linkedin.com',
    icon: BsLinkedin,
  },
  {
    id: 2,
    name: 'Facebook',
    url: 'https://www.facebook.com',
    icon: BsFacebook,
  },
];

function Footer(): React.ReactNode {
  const { t } = useTranslation();

  const getSocialLinks = (): React.ReactNode => {
    const elements = FooterSocialLinks.map(({ id, url, icon: Icon }) => (
      <li key={`fs-elm-${id}`} className="m-0 flex p-0">
        <a className="m-0 p-0" href={url} target="_blank" rel="noreferrer">
          <Icon className="h-4 w-4 text-zinc-300 transition-all duration-150 hover:text-white" />
        </a>
      </li>
    ));

    return elements;
  };

  return (
    <footer className="font-theme m-0 flex min-h-[100px] w-full flex-wrap items-center justify-center bg-zinc-900 p-0">
      <section className="max-w-theme grid-col-1 grid w-full flex-wrap place-content-center items-stretch gap-5 gap-x-10 p-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:place-content-between">
        <ul className="flex h-full flex-col items-start justify-start gap-2">
          <Link href="/" className="relative mb-5">
            <img
              alt="Logo"
              src={Logo.src}
              className="h-[43px] w-full max-w-[300px] object-contain invert transition-all duration-150"
            />
          </Link>
          {NavbarLinks.map(({ name, url, id }) => (
            <li
              key={`footer-link-main-${id}`}
              className="flex w-full items-center justify-start border-b border-b-zinc-800 pb-2 text-sm"
            >
              <Link className="text-zinc-400 hover:text-white" href={url}>
                {t(name)}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex h-full flex-col justify-start gap-2">
          <h3 className="my-2.5 h-[43px] self-start text-xl font-semibold text-white">
            {t('footer.companies.title')}
          </h3>
          {AllCompanies.map(({ id, name }) => (
            <li
              key={`footer-company-${id}`}
              className="flex w-full items-center justify-start border-b border-b-zinc-800 pb-2 text-sm"
            >
              <Link className="text-zinc-400 hover:text-white" href="/markalar">
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex h-full flex-col justify-start gap-2">
          <h3 className="my-2.5 h-[43px] self-start text-xl font-semibold text-white">
            {t('footer.contact.title')}
          </h3>
          <li className="flex w-full items-center justify-start self-end border-b border-b-zinc-800 pb-2 text-sm">
            <p className="text-zinc-400">{t('footer.contact.address')}</p>
          </li>
          <li className="flex w-full items-center justify-start border-b border-b-zinc-800 pb-2 text-sm">
            <p>
              <span className="text-white">{t('footer.contact.phone')}: </span>
              <Link
                className="text-zinc-400 hover:text-white"
                href="tel:+902124863773"
              >
                +90 (212) 486 37 73
              </Link>
            </p>
          </li>
          <li className="flex w-full items-center justify-start border-b border-b-zinc-800 pb-2 text-sm">
            <p>
              <span className="text-white">{t('footer.contact.fax')}: </span>
              <Link
                className="text-zinc-400 hover:text-white"
                href="tel:+902124863773"
              >
                +90 (212) 486 37 73
              </Link>
            </p>
          </li>
          <li className="flex w-full items-center justify-start border-b border-b-zinc-800 pb-2 text-sm">
            <p>
              <span className="text-white">{t('footer.contact.email')}: </span>
              <Link
                className="text-zinc-400 hover:text-white"
                href="mailto:info@muratgeridonusum.com"
              >
                info@muratgeridonusum.com
              </Link>
            </p>
          </li>
        </ul>
      </section>
      <section className="flex w-full items-center justify-center bg-zinc-950">
        <section className="max-w-theme flex w-full items-center justify-end gap-5 p-3 px-5">
          {getSocialLinks()}
        </section>
      </section>
    </footer>
  );
}

export default Footer;
