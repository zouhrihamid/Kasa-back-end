import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './Accom.styled';
import { Carousel } from '../../components/Carousel/Carousel';
import { TitleAndHost } from '../../components/TitleAndHost/TitleAndHost';
import { TagsAndRate } from '../../components/TagsAndRate/TagsAndRate';
import { Details } from '../../components/Details/Details';

function AccommodationDetail() {
      const { title } = useParams();
      const [accommodation, setAccommodation] = useState(null);

      useEffect(() => {
            const fetchAccommodation = async () => {
                  try {
                        const response = await fetch('/data/logements.json');
                        const result = await response.json();

                        const selectedAccommodation = result.find((item) => item.title.replace(/ /g, '_') === title);
                        setAccommodation(selectedAccommodation || null); // Mettre à jour l'état
                  } catch (error) {
                        console.error('Erreur lors de la récupération des données', error);
                  }
            };
            fetchAccommodation();
      }, [title]);
      if (!accommodation) {
            return <p>Chargement du logement...</p>;
      }

      return (
            <Container>
                  <Carousel accommodation={accommodation} />
                  <TitleAndHost accommodation={accommodation} />
                  <TagsAndRate accommodation={accommodation} />
                  <Details accommodation={accommodation} />
            </Container>
      );
}

export default AccommodationDetail;
