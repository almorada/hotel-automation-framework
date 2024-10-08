import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hotel Automation Framework',
  tagline: 'Is letting cloud do the work the same as being in heaven?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://framework.almorada.es',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'almorada', // Usually your GitHub org/user name.
  projectName: 'hotel-automation-framework', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'fr', 'es'],
  },

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-57J24CZ6LQ',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/almorada/hotel-automation-framework/edit/main',
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'automation, hotel, accomodation, guide, framework, encyclopedia' },
    ],
    tableOfContents: {
      maxHeadingLevel: 4,
    },
    image: 'img/social-card.jpeg',
    navbar: {
      title: 'Hotel Automation Framework',
      logo: {
        alt: 'Logo',
        src: 'img/logo.webp',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/almorada/hotel-automation-framework',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://saas.almorada.es',
          label: 'Almorada',
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
              label: 'Introduction',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/jqkaypNE',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@hotel_automation_framework',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/hotel-automation-framework',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/people/Hotel-Automation-Framework/61564911578999/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/hotel_automation_framework/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/almorada/hotel-automation-framework',
            },
            {
              label: 'Almorada',
              href: 'https://saas.almorada.es',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hotel Automation Framework. Built with Docusaurus by Almorada.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
