import styled from 'styled-components';

const TitleAndTagsWrapper = styled.div`
      display: flex;
      justify-content: space-between;
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
      font-size: 36px;
      font-weight: 500;
      color: #ff6060;
      margin: 0;
`;
const Location = styled.h2`
      font-size: 18px;
      font-weight: 500;
      color: #000000;
      margin: 0;
`;
const Tags = styled.div`
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-top: 5%;
`;

const TagItem = styled.span`
      color: white;
      font-size: 14px;
      margin-right: 10px;
      background-color: #ff6060;
      padding: 5px;
      border-radius: 10px;
      width: 120px;
`;
export { Tags, Location, SubTitle, Title, TagItem, TitleAndTagsWrapper };
