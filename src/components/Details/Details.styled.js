import styled from 'styled-components';
import { family } from '../../Utils/style/Theme';
const commonWidth = '100%';
const ShowDetailLabel = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 10px 50px 10px 28px;
      @media screen and(max-width:768px) {
            flex-direction: column;
            margin: 10px 50px 0px 28px;
      }
`;
const BoxTitle = styled.div`
      display: flex;
      justify-content: space-between;
      background-color: #ff6060;
      color: white;
      align-items: center;
      border-radius: 10px;
      width: ${commonWidth};
      padding: 10px;
      @media screen and (max-width: 768px) {
            padding: 5px 10px 5px 10px;
            margin-right: 15px;
            height: 30px;
            border-radius: 5px;
      }
`;

const TitleText = styled.span`
      font-size: 18px;
      font-weight: 700;
      font-family: ${family.fontFamilyPrimary};
      font-size: clamp(13px, 4vw, 18px);
      @media screen and (max-width: 768px) {
            font-size: 13px;
      }
`;

const ArrowIconImage = styled.img`
      height: 24px;
      cursor: pointer;
      transform: ${({ rotated }) => (rotated ? 'rotate(90deg)' : 'rotate(-90deg)')};
      transition: transform 0.3s ease-in-out;
      @media screen and (max-width: 768px) {
            padding: 5px;
      }
`;

const AnimatedContentBox = styled.div`
      display: flex;
      flex-direction: column;
      text-align: left;
      border-radius: 5px;
      width: ${commonWidth};
      list-style-type: none;
      margin-top: 2px;
      padding: 5px 10px 5px 10px;
      background-color: #f3f3f3f3;
      overflow: hidden;

      height: ${({ isVisible, contentHeight }) => (isVisible ? contentHeight : '0px')};
      transition: height 300ms ease-in, opacity 300ms ease-in;
      opacity: ${({ animate }) => (animate ? 1 : 0)};
      @media screen and (max-width: 768px) {
            padding: 2px 10px 2px 10px;
            margin: 0px;
      }
`;

export { BoxTitle, ShowDetailLabel, TitleText, ArrowIconImage, AnimatedContentBox };
