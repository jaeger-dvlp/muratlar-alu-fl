import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

type MetaProps = {
  title: string;
  description: string;
  favIconType?: 'png' | 'jpg' | 'jpeg' | 'ico'; // ? You can add more types..
};

function Meta({ title, description, favIconType }: MetaProps): JSX.Element {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon.${favIconType}`}
          type="image/x-icon"
        />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          site_name: process.env.NEXT_PUBLIC_APP_NAME,
        }}
      />
    </>
  );
}

Meta.defaultProps = {
  favIconType: 'ico',
};

export default Meta;
