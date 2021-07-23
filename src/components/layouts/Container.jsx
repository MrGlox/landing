import styled, { css } from 'styled-components';
import { flexbox, layout, position, space } from 'styled-system';

const Container = styled.div`
  display: block;
  width: 100%;
  margin: 0 auto;

  ${({ theme: { breakpoint, space }, transform }) => css`
    padding: 0 ${space.r};
    ${transform && `transform: ${transform};`}

    ${breakpoint.sm} {
      max-width: 480px;
    }

    ${breakpoint.lg} {
      max-width: 1024px;
    }
  `}

  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

export default Container;
