import styled, { css } from 'styled-components';
import {
  border,
  color,
  flexbox,
  layout,
  typography,
  space,
} from 'styled-system';

const StyledText = styled.p`
  letter-spacing: 0.8px;

  ${({ theme: { breakpoint, fonts, fontSizes, lineHeights, space } }) => css`
    font-size: ${fontSizes[2]}px;
    font-family: ${fonts[0]};
    line-height: ${lineHeights.body};
    margin-top: 0;
    margin-bottom: ${space.xxs};

    ${breakpoint.md} {
      font-size: ${fontSizes[3]}px;
    }
  `}

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
`;

export default StyledText;
