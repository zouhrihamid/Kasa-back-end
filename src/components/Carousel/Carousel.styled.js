import styled from 'styled-components';
import { family } from '../../Utils/style/Theme';

const CarouselWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      position: relative;
      padding: 0px 100px 0px 80px;
      @media screen and (max-width: 768px) {
            padding: 2%;
      }
`;

const CarouselImage = styled.img`
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 8px;
      @media screen and (max-width: 768px) {
            height: 255px;
      }
`;

const NavigationButton = styled.button`
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: clamp(35px, 5vw, 60px);
      height: clamp(35px, 5vw, 60px);
      opacity: ${(props) => (props.disabled ? 0.5 : 1)};
      pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
      transition: opacity 0.3s ease;

      img {
            width: 100%;
            height: auto;
      }
`;

const PrevButton = styled(NavigationButton)`
      left: 6%;
`;

const NextButton = styled(NavigationButton)`
      right: 7.7%;
`;

const Counter = styled.p`
      position: absolute;
      bottom: 15px;
      right: 50%;
      transform: translateX(50%);
      font-size: 18px;
      color: white;
      /* background: rgba(0, 0, 0, 0.5); */
      padding: 5px 10px;
      border-radius: 8px;
      font-weight: 500;
      font-family: ${family.fontFamilyPrimary}, sans-serif;
`;

export { CarouselWrapper, Counter, PrevButton, NavigationButton, NextButton, CarouselImage };
