import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { family } from '../../Utils/style/Theme';

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
      @media screen and (max-width: 768px) {
            margin: 2% 2.5% 2% 4%;
      }
`;

const StyledLink = styled(Link)`
      padding: 10px 10px;
      color: black;
      text-decoration: none;
      font-size: clamp(16px, 2.5vw, 24px);
      text-align: center;
      font-family: ${family.fontFamilyPrimary};
      font-weight: 500;
      text-decoration: ${(props) => (props.isClicked ? 'underline' : 'none')};
`;

export { HomeLogo, StyledLink, NavContainer };
