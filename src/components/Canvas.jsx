import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

const StyledCanvas = styled(Canvas)`
  position: fixed !important;
  /* pointer-events: none; */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export default StyledCanvas;
