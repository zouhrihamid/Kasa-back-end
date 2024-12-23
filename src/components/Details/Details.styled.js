import styled from 'styled-components';

const BoxTitle = styled.div`
      display: flex;
      justify-content: space-between;
      background-color: #ff6060;
      color: white;
      align-items: center;
      border-radius: 10px;
      width: 100%;
      padding: 10px;
`;

const TitleText = styled.span`
      font-size: 25px;
`;

const ArrowIconImage = styled.img`
      height: 30px;
      cursor: pointer;
      transform: ${({ rotated }) => (rotated ? 'rotate(90deg)' : 'rotate(-90deg)')};
      transition: transform 0.3s ease-in-out;
`;

const ShowDetailLabel = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin: 10px 50px 10px 20px;
`;

const AnimatedContentBox = styled.div`
      display: flex;
      flex-direction: column;
      text-align: left;
      border-radius: 5px;
      width: 101.56%;
      list-style-type: none;
      margin-top: 5px;
      background-color: #f3f3f3;
      overflow: hidden;

      height: ${({ contentHeight }) => contentHeight};
      transition: height 1s ease-in-out, opacity 1s ease-in-out;
      opacity: ${({ animate }) => (animate ? 1 : 0)};
`;

export { BoxTitle, ShowDetailLabel, TitleText, ArrowIconImage, AnimatedContentBox };
