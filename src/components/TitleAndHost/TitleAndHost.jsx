import { TitleAndHostWrapper, Host, Name, Picture, SubTitle, Location, Title } from './TitleAndHost.styled';

export const TitleAndHost = ({ accommodation }) => {
      return (
            <TitleAndHostWrapper>
                  <Title>
                        <SubTitle>{accommodation.title}</SubTitle>
                        <Location>{accommodation.location}</Location>
                  </Title>
                  <Host>
                        <Name>{accommodation.host.name}</Name>
                        <Picture src={accommodation.host.picture} alt={accommodation.host.name} />
                  </Host>
            </TitleAndHostWrapper>
      );
};
