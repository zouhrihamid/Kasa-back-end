import styled from 'styled-components';

const TitleAndHostWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
`;

const Title = styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 30px 0px 0px 75px;
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
const Host = styled.div`
      display: flex;
      flex-direction: row;
      margin: 30px 100px 0px 0px;
`;
const Name = styled.p`
      font-size: 18px;
      font-weight: 500;
      color: #ff6060;
      width: 52px;
      padding: 0px 20px;
      margin-top: 10px;
`;
const Picture = styled.img`
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 50%;
`;

export { Picture, Name, Host, Location, SubTitle, Title, TitleAndHostWrapper };
