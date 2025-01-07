import styled from 'styled-components';

const TitleAndTagsWrapper = styled.div`
      display: flex;

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
      @media screen and (max-width: 768px) {
            text-align: left;
      }
`;
const Location = styled.h2`
      font-size: clamp(10px, 5vw, 20px);
      font-weight: 500;
      color: #000000;
      margin: 0;
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
      font-size: clamp(12px, 2vw, 16px);
      margin-right: 10px;
      margin-top: 2%;
      background-color: #ff6060;
      padding: clamp(4px, 1vw, 6px);
      border-radius: 10px;
      width: clamp(100px, 15vw, 160px);
`;
export { Tags, Location, SubTitle, Title, TagItem, TitleAndTagsWrapper };
