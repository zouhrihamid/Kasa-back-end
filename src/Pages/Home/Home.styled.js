import styled from 'styled-components';

const HomeWrapper = styled.div`
      display: felx;
      justify-content: center;
`;
const HomeImg = styled.div`
      margin: 10px 100px 10px 100px;
`;

const Illustration = styled.img`
      width: 100%;
      height: auto;
      border-radius: 10px;
      filter: brightness(30%);
`;
const CardContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      margin: 20px 100px;
      padding: 40px;
      height: auto;
      background-color: #f6f6f6;
      border-radius: 25px;
`;
const Card = styled.div`
      height: 330px;
      width: 330px;
      background-position: center;
      background-size: cover;
      border-radius: 25px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${(props) => props.cover});
`;

const TextOverlay = styled.div`
      position: absolute;
      top: 27%;
      left: 24%;
      font-family: 'Montserrat';
      font-size: 48px;
      color: #ffffff;
      z-index: 2;
`;
const StyledTitle = styled.h3`
      z-index: 2;
      position: relative;
      top: 250px;
      color: white;
      font-size: 18px;
      text-align: start;
      padding-left: 20px;
`;

export { CardContainer, HomeWrapper, Card, Illustration, HomeImg, TextOverlay, StyledTitle };
