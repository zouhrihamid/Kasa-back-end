import styled from 'styled-components';
import { family } from '../../Utils/style/Theme';
const FooterContainer = styled.div`
      height: 209px;
      background-color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;
const LogoFooter = styled.img`
      height: 40px;
      max-height: 100%;
      width: auto;
      object-fit: contain;
      margin-bottom: 10px;
`;
const CopyrightNotice = styled.div`
      color: white;
      text-align: center;
      font-size: 24px;
      font-family: ${family.fontFamilyPrimary};
      font-weight: 500;

      @media screen and (max-width: 767.98px) {
            width: 30%;
            font-size: 12px;
      }
`;

export { FooterContainer, CopyrightNotice, LogoFooter };
