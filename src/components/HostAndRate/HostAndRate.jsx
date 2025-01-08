import { Rate, Host, Name, Picture, HostAndRateWrapper, StarImage } from './HostAndRate.styled';
import StarRed from '../../assets/star-red.svg';
import StarGray from '../../assets/star-gray.svg';
export const HostAndRate = ({ House }) => {
      return (
            <HostAndRateWrapper>
                  <Rate>
                        {[...Array(5)].map((_, index) => (
                              // <span key={index} style={{ color: index < Number(House.rating) ? 'red' : 'gray', fontSize: '30px' }}>
                              //       ★
                              // </span>
                              // remplacer star comme sur maquette
                              <StarImage key={index} src={index < Number(House.rating) ? StarRed : StarGray} alt="Etoile" />
                        ))}
                  </Rate>
                  <Host>
                        <Name>{House.host.name}</Name>
                        <Picture src={House.host.picture} alt={House.host.name} />
                  </Host>
            </HostAndRateWrapper>
      );
};
