import { TitleAndTagsWrapper, TagItem, Tags, SubTitle, Location, Title } from './TitleAndTags.styled';

export const TitleAndTags = ({ House }) => {
      return (
            <TitleAndTagsWrapper>
                  <Title>
                        <SubTitle>{House.title}</SubTitle>
                        <Location>{House.location}</Location>
                  </Title>
                  <Tags>
                        {House.tags.map((tag, index) => (
                              <TagItem key={index}>{tag}</TagItem>
                        ))}
                  </Tags>
            </TitleAndTagsWrapper>
      );
};
