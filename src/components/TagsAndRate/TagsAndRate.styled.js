import styled from 'styled-components';

const BaseTags = styled.div`
      display: flex;
      justify-content: space-between;
      flex-direction: row;
`;
const TagsAndRateWrapper = styled(BaseTags)`
      margin: 0px 0px 0px 75px;
`;
const Tags = styled(BaseTags)`
      margin: 30px 100px 0px 0px;
`;
const TagItem = styled.span`
      color: white;
      font-size: 14px;
      margin-right: 10px;
      background-color: #ff6060;
      padding: 5px;
      border-radius: 13px;
      width: 120px;
`;
const Rate = styled.div`
      display: flex;
      flex-direction: row;
      margin: 20px 100px 0px 0px;
`;

export { TagItem, Tags, Rate, TagsAndRateWrapper };
