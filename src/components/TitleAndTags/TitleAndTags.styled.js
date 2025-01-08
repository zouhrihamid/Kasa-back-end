import styled from 'styled-components';
import { family } from '../../Utils/style/Theme';

const TitleAndTagsWrapper = styled.div`
      display: flex;
      margin-top: 10px;
      align-items: flex-start;
      width: 100%;
      flex-direction: column;

      @media screen and (max-width: 768px) {
            flex-direction: column;
            justify-content: space-between;
      }
`;

const Title = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
`;

const SubTitle = styled.h1`
      font-size: clamp(20px, 5vw, 36px);
      font-weight: 500;
      color: #ff6060;
      margin: 0%;

      font-family: ${family.fontFamilyPrimary};
      @media screen and (max-width: 768px) {
            text-align: left;
            font-size: 18px;
      }
`;
const Location = styled.h2`
      font-size: clamp(10px, 5vw, 18px);
      font-weight: 500;
      font-family: ${family.fontFamilyPrimary};
      color: #000000;
      margin: 5px;
      @media screen and (max-width: 768px) {
            font-size: 14px;
            margin: 1px;
      }
`;
const Tags = styled.div`
      display: flex;
      justify-content: space-between;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-top: 1%;
`;

const TagItem = styled.span`
      color: white;
      font-size: clamp(10px, 2vw, 14px);
      font-family: ${family.fontFamilyPrimary};
      font-weight: 700;
      margin-right: 10px;
      margin-top: 2%;
      /* padding: 2px; */
      background-color: #ff6060;
      padding: clamp(4px, 1vw, 6px);
      border-radius: 10px;
      width: clamp(84px, 15vw, 160px);
      @media screen and (max-width: 768px) {
            border-radius: 5px;
            width: 84px;
            padding: clamp(4px, 1vw, 6px);
            font-size: 10px;
      }
`;
export { Tags, Location, SubTitle, Title, TagItem, TitleAndTagsWrapper };
