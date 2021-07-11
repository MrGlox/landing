import styled, { css } from 'styled-components';
import { color, layout, position, space, typography } from 'styled-system';

const StyledIcon = styled.img`
  display: inline-block;
  vertical-align: middle;

  min-width: 16px;
  min-height: 16px;
  max-width: 16px;
  max-height: 16px;

  > path {
    fill: currentColor;
  }

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

export default StyledIcon;
