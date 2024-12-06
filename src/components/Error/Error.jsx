import ErrorIllustration from '../../assets/404.svg';
import { ErrorSubtitle, Illustration, ErrorWrapper, ReturnHome } from './Error.styled';

function Error() {
      return (
            <ErrorWrapper>
                  <Illustration src={ErrorIllustration} />
                  <ErrorSubtitle> Oups! La page que vous demandez n’existe pas</ErrorSubtitle>
                  <ReturnHome> Retourner sur la page d'acceuil </ReturnHome>
            </ErrorWrapper>
      );
}

export default Error;
