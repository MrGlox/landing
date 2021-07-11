import styled, { css } from 'styled-components';
import { color, flexbox, layout, typography, space } from 'styled-system';

const StyledLink = styled.a`
  display: inline-flex;
  position: relative;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 1px;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transform: scale3d(0, 1, 1);
    transition: transform 0.3s ease;
    transform-origin: center right;
  }

  ${({ theme: { breakpoint, colors, fonts, fontSizes } }) => css`
    font-family: ${fonts['display']};
    color: ${colors.texts[0]};
    font-size: ${fontSizes[2]}px;

    ${breakpoint.sm} {
      font-size: ${fontSizes[3]}px;
    }
  `}

  :hover,
  :focus {
    &:after {
      transform: scale3d(1, 1, 1);
      transform-origin: center left;
    }
  }

  ${color}
  ${flexbox}
  ${layout}
  ${space}
  ${typography}
`;

export default StyledLink;
