// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Malaysia Prayer Time App',
    tagline: 'Modern and easy to use',
    url: 'https://help.waktusolat.app/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'mptwaktusolat', // Usually your GitHub org/user name.
    projectName: 'app_waktu_solat_malaysia', // Usually your repo name.
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
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
                        href : 'https://api.waktusolat.app/docs',
                        label: 'API',
                        position: 'left',
                    },
                    {
                        href: 'https://waktusolat.web.app',
                        label: 'Web App',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/mptwaktusolat/app_waktu_solat_malaysia',
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
                        title: 'More',
                        items: [
                            {
                                label: 'Changelog',
                                href: 'https://waktusolat.app/en/changelog',
                            },
                            {
                                label: 'Devlogs',
                                href: 'https://www.instagram.com/s/aGlnaGxpZ2h0OjE3ODcyMTc0ODcwODEzNjM1',
                            }
                        ],
                    },
                ],
                copyright: '<div>Copyright © 2024 <a style="color: #24daaf" href="https://waktusolat.app">Waktu Solat Malaysia Project</a></div>',
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
