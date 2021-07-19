import styled from 'styled-components';
import {
  border,
  color,
  flexbox,
  layout,
  position,
  space,
  shadow,
  typography,
} from 'styled-system';

const Box = styled.div`
  display: flex;

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${shadow}
  ${typography}
`;

export default Box;
