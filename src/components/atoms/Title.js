import styled, { css } from 'styled-components';
import { color, layout, position, space, typography } from 'styled-system';

const StyledTitle = styled.p`
  letter-spacing: 0.8px;

  ${({ as, theme: { breakpoint, fontSizes, lineHeights, space } }) => css`
    margin-bottom: ${space.m}
    font-size: ${as ? fontSizes[5 - Number(as.slice(-1))] : fontSizes[4]}px;
    line-height: ${lineHeights[0]};

    ${breakpoint.sm} {
      font-size: ${fontSizes[as] || fontSizes[4]}px;
    }
  `}

  ${color}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

export default StyledTitle;
