import styled from 'styled-components';
import { colors, family } from '../../Utils/style/Theme';

const ErrorWrapper = styled.div`
      margin: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      @media screen and (max-width: 768px) {
            margin: 0%;
      }
`;

const ErrorSubtitle = styled.h1`
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-size: clamp(1.3rem, 5vw, 3rem);
      color: ${colors.tertiary};
      margin: 5%;
      text-align: center;
      font-family: ${family.fontFamilyPrimary};
      @media screen and (max-width: 768px) {
            padding: 0%;
      }
`;
const ReturnHome = styled.h2`
      font-weight: 300;
      font-size: clamp(1rem, 5vw, 3rem);
      font-family: 'Montserrat';
      color: black;
      @media screen and (max-width: 768px) {
            padding-top: 20%;
            margin-bottom: 30%;
      }
`;
const Illustration = styled.img`
      width: 30%;

      @media screen and (max-width: 768px) {
            width: 50%;
            margin: 30% 0% 5% 0;
            padding-bottom: 10%;
      }
`;

export { ErrorWrapper, ErrorSubtitle, ReturnHome, Illustration };
