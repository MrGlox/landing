import styled, { css } from 'styled-components';
import { color, layout, position, space, typography } from 'styled-system';

const StyledImage = styled.img`
  display: block;

  ${(transform) =>
    transform &&
    css`
      transform: ${transform};
    `}

  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

export default StyledImage;
