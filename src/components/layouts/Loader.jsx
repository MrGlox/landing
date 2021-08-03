import React, { useState } from 'react';

import { a, config, useSpring } from '@react-spring/web';
import styled from 'styled-components';

import Planet from 'images/loader.svg';

const StyledLoader = styled.div`
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 250vw;
  min-height: 250vw;
  transform: translate3d(-50%, -50%, 0);
`;

const Wrapper = styled(a.div)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const StyledPlanet = styled(Planet)`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 150vw;
  min-height: 150vh;
  transform: translate3d(-50%, -50%, 0) scale3d(6, 6, 1);
`;

const Loader = ({ ...props }) => {
  const [display, setDisplay] = useState(true);
  const animation = useSpring({
    config: config.stiff,
    from: { opacity: 1 },
    opacity: 0,
    onRest: () => setDisplay(false),
  });

  return (
    display && (
      <StyledLoader {...props}>
        <Wrapper style={animation}>
          <StyledPlanet />
          {/* <h1>
          I'm M<span className="toHide">o</span>r
          <span className="toReplace">g</span>
          <span className="toHide">a</span>
          <span className="toHide">n</span> <span className="toReplace">L</span>
          <span className="toHide">e</span>
          <span className="toHide">r</span>o<span className="toHide">u</span>x
        </h1> */}
        </Wrapper>
      </StyledLoader>
    )
  );
};

export default Loader;
