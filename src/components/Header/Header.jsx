import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { HomeLogo } from './Header.styled';
import { StyledLink, NavContainer } from './Header.styled';
import { useState } from 'react';

function Header() {
      const [clickedLink, setClickedLink] = useState(null);
      return (
            <NavContainer>
                  <Link to="/">
                        <HomeLogo src={Logo} />
                  </Link>
                  <div>
                        <StyledLink to="/" isClicked={clickedLink === '/'} onClick={() => setClickedLink('/')}>
                              Accueil
                        </StyledLink>
                        <StyledLink to="/a-propos" isClicked={clickedLink === '/a-propos'} onClick={() => setClickedLink('/a-propos')}>
                              A Propos
                        </StyledLink>
                  </div>
            </NavContainer>
      );
}
export default Header;
