import React from 'react';
import { Leva } from 'leva';

import { Loader } from 'components/layouts';
import { SEO } from 'containers';
import ThemeContainer, { GlobalStyle } from 'styles/index';

const Layout = ({ children, location }) => (
  <ThemeContainer>
    <SEO />
    <GlobalStyle />
    <main>{children}</main>
    <Leva hidden={location.hash !== '#debug'} />
    {/* <Loader /> */}
  </ThemeContainer>
);

export default Layout;
