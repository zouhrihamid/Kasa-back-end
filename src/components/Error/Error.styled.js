import styled from 'styled-components';
import colors from '../../Utils/style/colors';

const ErrorWrapper = styled.div`
      margin: 30px;
      display: flex;
      flex-direction: column;
      // background-color: ${colors.backgroundLight};
      align-items: center;
`;

const ErrorSubtitle = styled.h1`
      font-weight: 300;
      color: ${colors.secondary};
`;
const ReturnHome = styled.h2`
      font-weight: 300;
`;
const Illustration = styled.img`
      max-width: 800px;
`;

export { ErrorWrapper, ErrorSubtitle, ReturnHome, Illustration };
