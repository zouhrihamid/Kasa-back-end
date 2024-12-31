import ErrorIllustration from '../../assets/404.svg';
import { ErrorSubtitle, Illustration, ErrorWrapper, ReturnHome } from './Error.styled';
import { Link } from 'react-router-dom';
function Error() {
      return (
            <ErrorWrapper>
                  <Illustration src={ErrorIllustration} />
                  <ErrorSubtitle> Oups! La page que vous demandez n’existe pas</ErrorSubtitle>
                  <Link to="/">
                        <ReturnHome> Retourner sur la page d'acceuil </ReturnHome>
                  </Link>
            </ErrorWrapper>
      );
}

export default Error;
