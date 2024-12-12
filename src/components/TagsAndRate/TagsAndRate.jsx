import { TagItem, Tags, Rate, TagsAndRateWrapper } from './TagsAndRate.styled';

export const TagsAndRate = ({ accommodation }) => {
      return (
            <TagsAndRateWrapper>
                  <Tags>
                        {accommodation.tags.map((tag, index) => (
                              <TagItem key={index}>{tag}</TagItem>
                        ))}
                  </Tags>
                  <Rate>
                        {[...Array(5)].map((_, index) => (
                              <span key={index} style={{ color: index < Number(accommodation.rating) ? 'red' : 'gray', fontSize: '30px' }}>
                                    ★
                              </span>
                        ))}
                  </Rate>
            </TagsAndRateWrapper>
      );
};
