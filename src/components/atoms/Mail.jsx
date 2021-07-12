import React from 'react';
import styled from 'styled-components';

const StyledMail = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
  text-decoration: none;

  > span {
    display: inline-flex;
    overflow: hidden;
    max-width: 0px;
    font-weight: 300;
    font-size: 16px;
    transition: max-width 0.7s ease;

    :first-child {
      font-weight: bold;
    }
  }

  :hover {
    > span {
      max-width: 100px;
    }
  }
`;

const Mail = ({ children, ...props }) => (
  <StyledMail {...props}>{children}</StyledMail>
);

export default Mail;
