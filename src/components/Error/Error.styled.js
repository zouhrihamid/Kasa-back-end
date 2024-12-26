import styled from 'styled-components';
import colors from '../../Utils/style/colors';

const ErrorWrapper = styled.div`
      margin: 40px;
      display: flex;
      flex-direction: column;
      // background-color: ${colors.backgroundLight};
      align-items: center;
      height: 100vh;
`;

const ErrorSubtitle = styled.h1`
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 300;
      font-size: clamp(1.5rem, 5vw, 3rem);
      color: ${colors.tertiary};
      margin: 5% 0% 5% 5%;
      text-align: center;
`;
const ReturnHome = styled.h2`
      font-weight: 300;
      @media screen and (max-width: 768px) {
            margin: 1% 0;
      }
`;
const Illustration = styled.img`
      width: 30%;

      @media screen and (max-width: 768px) {
            width: 50%;
            margin: 10% 0 5% 0;
      }
`;

export { ErrorWrapper, ErrorSubtitle, ReturnHome, Illustration };
