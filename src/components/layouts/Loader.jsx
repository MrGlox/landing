import React from 'react';

import { animated, config, useSpring } from '@react-spring/web';
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

const Wrapper = styled(animated.div)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const StyledPlanet = styled(animated(Planet))`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 100vw;
  min-height: 100vh;
`;

const Loader = ({ ...props }) => {
  const animation = useSpring({
    config: { duration: 2500 },
    from: { x: '-50%', y: '-50%', z: 0, scale3d: [5, 5, 1] },
    x: '-25%',
    y: '35%',
    z: 0,
    scale3d: [1, 1, 1],
  });

  return (
    <StyledLoader {...props}>
      <Wrapper>
        <StyledPlanet style={animation} />
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
  );
};

export default Loader;
