import { create } from '@storybook/theming/create';
// import logo from './static/logo.png'
export default create({
  base: 'light',
  colorPrimary: '#107F62',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'white',
  barBg: '#107F62',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: '7 Boss UI',
  brandUrl: 'www.7-11.com',
  brandImage: 'https://7hub.7-eleven.com/_layouts/images/711.jpg',
});