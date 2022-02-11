import React from "react";
import styled from "styled-components";

const Mail = ({ children, ...props }) => <div {...props}>{children}</div>;

const StyledMail = styled(Mail)`
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



export default StyledMail;
