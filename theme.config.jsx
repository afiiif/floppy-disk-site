/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
const themeConfig = {
  docsRepositoryBase: 'https://github.com/afiiif/floppy-disk-site/blob/main',
  project: { link: 'https://github.com/afiiif/floppy-disk' },
  logo: (
    <div className="group flex items-center gap-3 py-2.5 pr-2.5 text-xl font-bold">
      <div className="-rotate-12 transition-transform group-hover:rotate-12 group-hover:scale-125">
        💾
      </div>
      <div>Floppy Disk</div>
    </div>
  ),
  useNextSeoProps: () => ({
    titleTemplate: '%s – Floppy Disk',
  }),
  head: () => {
    const { frontMatter } = useConfig();
    const ogImage = frontMatter.image || 'https://floppy-disk.vercel.app/floppy-disk-banner.jpg';
    return (
      <>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
      </>
    );
  },
  gitTimestamp: ({ timestamp }) => {
    const { route, locale } = useRouter();
    if (route === '/') return null;
    return (
      <>
        Last updated on{' '}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </>
    );
  },
  sidebar: {
    titleComponent: ({ title }) => (title.endsWith('Introduction') ? 'Introduction' : title),
  },
};

export default themeConfig;
