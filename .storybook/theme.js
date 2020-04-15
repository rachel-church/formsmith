import { create } from '@storybook/theming';

export const formSmithTheme = create({
  base: 'light',

  colorPrimary: '#AD6B8F',
  colorSecondary: '#52A9D8',

  // UI
  // appBg: '#fbfbfb',
  appContentBg: 'white',
  appBorderColor: '#e0e0e0',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#253338',

  // Toolbar default and active colors
  barTextColor: '#253338',
  barSelectedColor: '#AD6B8F',
  barBg: '#F4F4F4',

  brandTitle: 'FormSmith',
});
