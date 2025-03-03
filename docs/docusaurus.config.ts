module.exports = {
  title: 'Crypto Tracker Docs',
  tagline: 'Documentation for Crypto Price Tracker',
  url: 'https://yourwebsite.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
