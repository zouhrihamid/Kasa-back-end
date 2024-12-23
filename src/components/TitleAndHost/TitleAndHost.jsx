import { TitleAndHostWrapper, Host, Name, Picture, SubTitle, Location, Title } from './TitleAndHost.styled';

export const TitleAndHost = ({ House }) => {
      return (
            <TitleAndHostWrapper>
                  <Title>
                        <SubTitle>{House.title}</SubTitle>
                        <Location>{House.location}</Location>
                  </Title>
                  <Host>
                        <Name>{House.host.name}</Name>
                        <Picture src={House.host.picture} alt={House.host.name} />
                  </Host>
            </TitleAndHostWrapper>
      );
};
