import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../Utils/style/colors';

const globalMargin = '2% 7% 2% 7%';

const HomeLogo = styled.img`
      height: clamp(40px, 6vw, 60px);
      max-height: 100%;
      width: auto;
      object-fit: contain;
`;

const NavContainer = styled.nav`
      display: flex;
      flex-direction: row;
      margin: ${globalMargin};
      justify-content: space-between;
      align-items: center;
`;

const StyledLink = styled(Link)`
      padding: 10px 15px;
      color: black;
      text-decoration: none;
      font-size: clamp(16px, 2.5vw, 30px);
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      text-decoration: ${(props) => (props.isClicked ? 'underline' : 'none')};
`;

export { HomeLogo, StyledLink, NavContainer };
