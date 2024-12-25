import { Rate, Host, Name, Picture, HostAndRateWrapper } from './HostAndRate.styled';

export const HostAndRate = ({ House }) => {
      return (
            <HostAndRateWrapper>
                  <Rate>
                        {[...Array(5)].map((_, index) => (
                              <span key={index} style={{ color: index < Number(House.rating) ? 'red' : 'gray', fontSize: '30px' }}>
                                    ★
                              </span>
                        ))}
                  </Rate>
                  <Host>
                        <Name>{House.host.name}</Name>
                        <Picture src={House.host.picture} alt={House.host.name} />
                  </Host>
            </HostAndRateWrapper>
      );
};
