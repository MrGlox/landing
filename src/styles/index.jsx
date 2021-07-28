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

    overflow: hidden;
    overscroll-behavior: none;
    max-width: 100vw;

    background-color: ${theme.colors.background};
    color: ${theme.colors.texts[0]};
    font-weight: 300;
    font-family: ${theme.fonts['body']};
    letter-spacing: 0.8px;
    line-height: ${theme.lineHeights['body']}; // ADD LINE HEIGHT FOR GOTHAM
  }
  
  #___gatsby {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  .perf-stats{
    z-index: 10000;
  }
`;

const ThemeContainer = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { GlobalStyle, theme };
export default ThemeContainer;
