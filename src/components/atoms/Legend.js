import styled, { css } from 'styled-components';

const StyledLegend = styled.button`
  position: relative;
  background-color: transparent;
  padding: 0 4px 0 0;
  border: none;
  font-weight: 700;
  letter-spacing: 0.8px;

  ${({ theme: { colors } }) => css`
    color: ${colors.white[0]};
  `}

  :after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;

    width: 4px;
    height: 4px;
    border-radius: 4px;
    background-color: white;
    transform: translateX(100%) translateY(100%);
  }
`;

export default StyledLegend;
