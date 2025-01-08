import styled from 'styled-components';
const AboutWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 7%;
      margin-right: 8%;
      @media screen and (max-width: 768px) {
            margin-left: 4%;
            margin-right: 4%;
      }
`;
const DetailsLabelAbout = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 75%;

      @media screen and (max-width: 768px) {
            margin-left: 13%;
            margin-right: 12%;
            width: 95%;
      }
`;

export { DetailsLabelAbout, AboutWrapper };
