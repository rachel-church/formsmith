module.exports = {
  stories: ['../src/**/*.stories.tsx', '../src/**/*.stories.jsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
  ],
  webpackFinal: async config => {
    config.watch = true;

    return config;
  }
};
