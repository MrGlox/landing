import React from 'react';

import LoaderImage from 'images/loader.svg';
import styled from 'styled-components';

const Loader = ({ ...props }) => (
  <div {...props}>
    <LoaderImage />
  </div>
);

const StyledLoader = styled(Loader)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  svg {
    min-width: 140vw;
    min-height: 180vw;
  }
`;

export default StyledLoader;
