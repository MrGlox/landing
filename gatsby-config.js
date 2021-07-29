module.exports = {
  siteMetadata: {
    title: 'Morgan Leroux',
    titleTemplate: '%s - Creative Developer',
    description:
      'I’m Morgan "MrGlox", Creative developer from France. I like to build beautiful websites with clean interactions and animations.',
    url: 'https://www.morgan-leroux.com',
    siteUrl: 'https://www.morgan-leroux.com',
    image: '/images/banner.jpg',
    twitterUsername: '@MisterGlox',
  },
  plugins: [
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          components: 'src/components/',
          containers: 'src/containers/',
          contexts: 'src/contexts/',
          styles: 'src/styles',
          utils: 'src/utils',
        },
      },
    },
    'gatsby-image',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-926RVV5KTB',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/, // See below to configure properly
        },
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Inconsolata'],
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
