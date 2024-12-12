import styled from 'styled-components';

const CarouselWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      position: relative;
      padding: 0px 100px 0px 80px;
`;

const CarouselImage = styled.img`
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 8px;
`;

const NavigationButton = styled.button`
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 50px;
      height: 50px;
      opacity: ${(props) => (props.disabled ? 0.5 : 1)};
      pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
      transition: opacity 0.3s ease;

      img {
            width: 100%;
            height: auto;
      }
`;

const PrevButton = styled(NavigationButton)`
      left: 80px;
`;

const NextButton = styled(NavigationButton)`
      right: 100px;
`;

const Counter = styled.p`
      position: absolute;
      bottom: 15px;
      right: 50%;
      transform: translateX(50%);
      font-size: 18px;
      color: white;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 10px;
      border-radius: 8px;
`;

export { CarouselWrapper, Counter, PrevButton, NavigationButton, NextButton, CarouselImage };
