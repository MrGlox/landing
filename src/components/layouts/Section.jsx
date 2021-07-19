import styled from 'styled-components';
import { Container } from 'components/layouts';

const StyledSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  padding: 30px 0;

  > ${Container} {
    > header,
    > footer {
      position: relative;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 60px;
    }

    > article {
      min-height: 40vh;
      margin-bottom: 50px;
    }

    > footer {
      flex-direction: column;
      align-items: flex-end;
      margin-bottom: 0;
    }
  }
`;

export default StyledSection;
