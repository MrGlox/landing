import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

import '@fontsource/inconsolata/300.css';
import '@fontsource/inconsolata/700.css';

import theme from './variables';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    -webkit-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;

    overflow: auto;
    overscroll-behavior: none;
    max-width: 100vw;

    background-color: ${theme.colors.background};
    color: ${theme.colors.texts[0]};
    font-weight: 300;
    font-family: ${theme.fonts['body']};
    letter-spacing: 0.8px;
    line-height: ${theme.lineHeights['body']}; // ADD LINE HEIGHT FOR GOTHAM
  }
`;

const ThemeContainer = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { GlobalStyle, theme };
export default ThemeContainer;
