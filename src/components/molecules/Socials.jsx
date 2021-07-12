import React from 'react';
import styled from 'styled-components';

const StyledSocials = styled.ul`
  display: inline-flex;
  align-items: center;
  padding: 0;
  list-style: none;
  margin-right: -8px;

  > li {
    display: inline-flex;
    align-items: center;
    padding: 0 12px;
  }
`;

const Socials = ({ children }) => <StyledSocials>{children}</StyledSocials>;

export default Socials;
