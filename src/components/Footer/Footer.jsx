import Logo from '../../assets/LogoFooter.svg';
import { FooterContainer, CopyrightNotice, LogoFooter } from './Footer.styled';

function Footer() {
      return (
            <FooterContainer>
                  <LogoFooter src={Logo} />
                  <CopyrightNotice>© 2020 Kasa. All rights reserved</CopyrightNotice>
            </FooterContainer>
      );
}
export default Footer;
