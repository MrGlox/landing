import React from 'react';
import { Leva } from 'leva';

import ThemeContainer, { GlobalStyle } from 'styles/index';

const Layout = ({ children, location }) => (
  <ThemeContainer>
    <GlobalStyle />
    <main>{children}</main>
    <Leva hidden={location.hash !== '#debug'} />
  </ThemeContainer>
);

export default Layout;
