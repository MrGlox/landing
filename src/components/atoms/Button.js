import styled from 'styled-components';

const StyledButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  position: relative;
  color: white;
  z-index: 1;
  transition: transform 0.7s ease, color 0.3s ease;

  :after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(0);

    width: 32px;
    height: 32px;
    border-radius: 30px;
    background-color: #060826;
    transition: background-color 0.7s ease, transform 0.7s ease;
  }

  :hover {
    color: #060826;
    transform: translateY(-3px);

    :after {
      background-color: white;
      transform: translateX(-50%) translateY(-50%) scale(1);
    }
  }
`;

export default StyledButton;
