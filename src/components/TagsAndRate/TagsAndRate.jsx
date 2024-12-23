import { TagItem, Tags, Rate, TagsAndRateWrapper } from './TagsAndRate.styled';

export const TagsAndRate = ({ House }) => {
      return (
            <TagsAndRateWrapper>
                  <Tags>
                        {House.tags.map((tag, index) => (
                              <TagItem key={index}>{tag}</TagItem>
                        ))}
                  </Tags>
                  <Rate>
                        {[...Array(5)].map((_, index) => (
                              <span key={index} style={{ color: index < Number(House.rating) ? 'red' : 'gray', fontSize: '30px' }}>
                                    ★
                              </span>
                        ))}
                  </Rate>
            </TagsAndRateWrapper>
      );
};
