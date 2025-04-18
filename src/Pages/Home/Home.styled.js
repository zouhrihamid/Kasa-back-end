import styled from 'styled-components';
import { family } from '../../Utils/style/Theme';

const HomeWrapper = styled.div`
      display: flex;
      flex-direction: column;
      margin: 0% 8% 1% 7%;
      @media screen and (max-width: 768px) {
            margin: 0% 5% 1% 4%;
      }
`;
const HomeImg = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      position: relative;
      @media screen and (max-width: 768px) {
            width: 100%;
      }
`;

const Illustration = styled.img`
      width: 100%;
      height: 230px;
      border-radius: 10px;
      object-fit: cover;
      filter: brightness(70%);
      @media screen and (max-width: 768px) {
            height: 111px;
      }
`;
const TextOverlay = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      font-family: ${family.fontFamilyPrimary};
      font-weight: 700;
      font-size: 40px;
      color: #ffffff;
      font-size: clamp(20px, 4vw, 40px);
      z-index: 2;
      @media screen and (max-width: 1024px) {
            font-size: clamp(16px, 3vw, 30px);
      }
`;
const CardContainer = styled.div`
      display: grid;
      margin-top: 2%;
      margin-bottom: 2%;
      padding: 1.5rem 2.2rem 2rem 2.2rem;
      grid-template-columns: repeat(3, 1fr);

      grid-gap: 2rem;
      background-color: #f6f6f6;
      border-radius: 25px;
      box-sizing: border-box;
      grid-auto-rows: auto;
      @media screen and (max-width: 1024px) {
            grid-template-columns: repeat(2, 1fr);
            background-color: transparent;
            padding: 1.5rem 0.3rem 2rem 0.2rem;
            row-gap: 2rem;
      }

      @media screen and (max-width: 767.98px) {
            grid-template-columns: repeat(1, 1fr);
            background-color: transparent;
            padding: 1.5rem 0.3rem 2rem 0.2rem;
            row-gap: 2rem;
      }
`;
const Card = styled.div`
      height: auto;
      width: 100%;
      aspect-ratio: 1;
      background-position: center;
      background-size: cover;
      border-radius: 25px;
      background-color: #000;
      background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.3) 60%, rgba(0, 0, 0, 0.5) 85%, rgba(0, 0, 0, 0.6) 100%), url(${(props) => props.cover});
      position: relative;
`;

const StyledTitle = styled.h3`
      font-family: ${family.fontFamilyPrimary};
      font-weight: 700;
      z-index: 2;
      position: absolute;
      top: 80%;
      left: 20px;
      color: white;
      font-size: 18px;
      text-align: start;
      margin: 0px;
      max-width: calc(100% - 40px);
`;

export { CardContainer, HomeWrapper, Card, Illustration, HomeImg, TextOverlay, StyledTitle };
