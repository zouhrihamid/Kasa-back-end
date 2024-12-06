import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import colors from '../../Utils/style/colors';

const HomeLogo = styled.img`
      height: 30px;
`;

const NavContainer = styled.nav`
      padding: 30px 100px 30px 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
`;

const StyledLink = styled(Link)`
      padding: 10px 15px;
      color: black;
      text-decoration: none;
      font-size: 24px;
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      text-decoration: ${(props) => (props.isClicked ? 'underline' : 'none')};
      /* &:active {
            text-decoration: underline;
      } */
`;

export { HomeLogo, StyledLink, NavContainer };
