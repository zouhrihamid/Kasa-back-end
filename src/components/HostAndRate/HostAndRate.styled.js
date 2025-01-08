import styled from 'styled-components';
import { family } from '../../Utils/style/Theme';
const HostAndRateWrapper = styled.div`
      display: flex;
      flex-direction: column-reverse;
      margin: 20px 100px 0px 0px;
      padding: 0px 0px 10px 0px;
      @media screen and (max-width: 768px) {
            justify-content: space-between;
            width: 100%;
            flex-direction: row;
            margin: 0px;
            padding: 0px;
      }
`;

const Host = styled.div`
      display: flex;
      flex-direction: row;
      padding: 0px;
      @media screen and (max-width: 768px) {
            flex-direction: row;
            align-items: center;
            margin-left: 10px;
      }
`;
const Name = styled.p`
      font-size: 18px;
      font-weight: 500;
      font-family: ${family.fontFamilyPrimary};
      color: #ff6060;
      width: 52px;
      padding: 0px 40px;
      margin-top: 10px;
      text-align: right;
      @media screen and (max-width: 768px) {
            font-size: 12px;
            padding: 0px 10px;
      }
`;
const Picture = styled.img`
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 20px;
      @media screen and (max-width: 768px) {
            width: 32px;
            height: 32px;
            margin-bottom: 0px;
      }
`;
const Rate = styled.div`
      display: flex;
      justify-content: flex-end;
      flex-direction: row;

      @media screen and (max-width: 768px) {
            align-items: center;
      }
`;

const StarImage = styled.img`
      width: 30px;
      height: 30px;
      padding-left: 10px;
      @media screen and (max-width: 768px) {
            width: 18px;
            height: 18px;
            padding-left: 0px;
            padding-right: 5px;
      }
`;
export { Host, Rate, Name, Picture, HostAndRateWrapper, StarImage };
