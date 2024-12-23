import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, DetailsWrapper, EquipmentsList, EquipmentItem } from './Accom.styled';
import { Carousel } from '../../components/Carousel/Carousel';
import { TitleAndHost } from '../../components/TitleAndHost/TitleAndHost';
import { TagsAndRate } from '../../components/TagsAndRate/TagsAndRate';
import { DetailsLabel } from '../../components/Details/Details';

function AccommodationDetail() {
      // const { title } = useParams();
      const { id } = useParams();
      const [accommodation, setAccommodation] = useState(null);

      useEffect(() => {
            const fetchAccommodation = async () => {
                  try {
                        const response = await fetch('/data/logements.json');
                        const result = await response.json();

                        // const selectedAccommodation = result.find((item) => item.title.replace(/ /g, '_') === title);
                        const selectedAccommodation = result.find((item) => item.id === id);

                        console.log('recuperation id:', selectedAccommodation);
                        setAccommodation(selectedAccommodation || null); // Mettre à jour l'état
                  } catch (error) {
                        console.error('Erreur lors de la récupération des données', error);
                  }
            };
            fetchAccommodation();
      }, [id]);
      if (!accommodation) {
            return <p>Chargement du logement...</p>;
      }

      return (
            <Container>
                  <Carousel House={accommodation} />
                  <TitleAndHost House={accommodation} />
                  <TagsAndRate House={accommodation} />

                  <DetailsWrapper>
                        <DetailsLabel TitleLabel="Description">
                              <p>{accommodation.description}</p>
                        </DetailsLabel>

                        <DetailsLabel TitleLabel="Équipement">
                              <EquipmentsList>
                                    {accommodation.equipments.map((equip, index) => (
                                          <EquipmentItem key={index}>{equip}</EquipmentItem>
                                    ))}
                              </EquipmentsList>
                        </DetailsLabel>
                  </DetailsWrapper>
            </Container>
      );
}

export default AccommodationDetail;
