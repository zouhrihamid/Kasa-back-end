import styled from 'styled-components';

const FooterContainer = styled.div`
      height: 209px;
      background-color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;
const LogoFooter = styled.img`
      height: clamp(40px, 6vw, 60px);
      max-height: 100%;
      width: auto;
      object-fit: contain;
      margin-bottom: 10px;
`;
const CopyrightNotice = styled.div`
      color: white;
      text-align: center;
      font-size: 0.9em;

      @media screen and (max-width: 767.98px) {
            width: 20%;
      }
`;

export { FooterContainer, CopyrightNotice, LogoFooter };
