/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import 'font-awesome/css/font-awesome.css';
import './slide.js';

import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
