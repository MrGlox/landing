import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  /* z-index: 1000; */
  /* pointer-events: none; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default StyledCanvas;
