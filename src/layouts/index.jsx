import React from 'react';
// import styled from 'styled-components';

import ThemeContainer, { GlobalStyle } from 'styles/index';

// const StyledLayout = styled.main`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const Layout = ({ children }) => {
  return (
    <ThemeContainer>
      <GlobalStyle />
      {/* <StyledLayout>{children}</StyledLayout> */}
      <main>{children}</main>
    </ThemeContainer>
  );
};

export default Layout;
