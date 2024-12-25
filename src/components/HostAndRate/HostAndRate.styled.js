import styled from 'styled-components';

const HostAndRateWrapper = styled.div`
      display: flex;
      flex-direction: column-reverse;
      margin: 0px 100px 0px 0px;

      @media screen and (max-width: 768px) {
            justify-content: space-between;
            width: 100%;
            flex-direction: row;
            margin: 0px 0px 0px 0px;
      }
`;

const Host = styled.div`
      display: flex;
      flex-direction: row;

      @media screen and (max-width: 768px) {
            flex-direction: row;
            align-items: center;
            margin-left: 10px;
      }
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
const Rate = styled.div`
      display: flex;
      justify-content: flex-end;
      flex-direction: row;

      @media screen and (max-width: 768px) {
            align-items: center;
      }
`;
export { Host, Rate, Name, Picture, HostAndRateWrapper };
