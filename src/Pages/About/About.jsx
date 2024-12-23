import AboutIllustration from '../../assets/ImgAbout.jpg';

import { Illustration, HomeImg } from '../Home/Home.styled';
import { DetailsLabel } from '../../components/Details/Details';
import { DetailsLabelAbout } from './About.styled';
function About() {
      return (
            <div>
                  <HomeImg>
                        <Illustration src={AboutIllustration} />
                  </HomeImg>
                  <DetailsLabelAbout>
                        <DetailsLabel TitleLabel="Fiabilité">
                              <p>{'les annonces postées su Kasa garantissent une fiabilité totale.Les photos sont conformes aux logement, et toutes les informations sont régulièrement vérifiées par nos équipes'}</p>
                        </DetailsLabel>
                        <DetailsLabel TitleLabel="Respect">
                              <p>{'la bieveillance fait partie des valeurs fondatrices de kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}</p>
                        </DetailsLabel>
                        <DetailsLabel TitleLabel="Service">
                              <p>{'la qualité du service est au coeur de notre engagement chez Kasa. nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'}</p>
                        </DetailsLabel>
                        <DetailsLabel TitleLabel="Sécurité">
                              <p>
                                    {
                                          "la sécurité est la priorité de kas. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                                    }
                              </p>
                        </DetailsLabel>
                  </DetailsLabelAbout>
            </div>
      );
}

export default About;
