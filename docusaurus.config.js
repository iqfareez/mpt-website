// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Malaysia Prayer Time',
  tagline: 'Modern and easy to use',
  url: 'https://mywaktusolat.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'iqfareez', // Usually your GitHub org/user name.
  projectName: 'app_waktu_solat_malaysia', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Waktu Solat Malaysia',
        logo: {
          alt: 'MPT Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://waktusolat.web.app',
            label: 'Web App',
            position: 'right',
          },
          {
            href: 'https://github.com/iqfareez/app_waktu_solat_malaysia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Features',
                to: '/docs/features/show-other-prayer-times',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshoot/notifications',
              },
            ],
          },
          {
            title: 'Legalese',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy-policy',
              },
              {
                label: 'Terms & Conditions',
                to: '/terms-and-conditions',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Changelog',
                href: 'https://github.com/iqfareez/app_waktu_solat_malaysia/wiki/Changelog',
              },
              {
                label: 'Devlogs',
                href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODcyMTc0ODcwODEzNjM1',
              }
            ],
          },
        ],
        copyright: '<div>Copyright © 2023 <a style="color: #24daaf" href="https://iqfareez.com">Muhammad Fareez</a></div>',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
