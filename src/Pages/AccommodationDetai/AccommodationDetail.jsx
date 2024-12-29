import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, DetailsWrapper, EquipmentsList, EquipmentItem, TitleHostWrapper } from './Accom.styled';
import { Carousel } from '../../components/Carousel/Carousel';
import { TitleAndTags } from '../../components/TitleAndTags/TitleAndTags';
import { HostAndRate } from '../../components/HostAndRate/HostAndRate';
import { DetailsLabel } from '../../components/Details/Details';

function AccommodationDetail() {
      // const { title } = useParams();
      const { id } = useParams();
      const [accommodation, setAccommodation] = useState(null);
      const navigate = useNavigate();
      useEffect(() => {
            const fetchAccommodation = async () => {
                  try {
                        const response = await fetch('/data/logements.json');
                        const result = await response.json();

                        // const selectedAccommodation = result.find((item) => item.title.replace(/ /g, '_') === title);
                        const selectedAccommodation = result.find((item) => item.id === id);

                        console.log('recuperation id:', selectedAccommodation);
                        if (!selectedAccommodation) {
                              navigate('/notfound');
                        } else {
                              setAccommodation(selectedAccommodation);
                        }
                  } catch (error) {
                        console.error('Erreur lors de la récupération des données', error);
                  }
            };
            fetchAccommodation();
      }, [id, navigate]);

      if (!accommodation) {
            return <p>Chargement des données...</p>;
      }

      return (
            <Container>
                  <Carousel House={accommodation} />
                  <TitleHostWrapper>
                        <TitleAndTags House={accommodation} />
                        <HostAndRate House={accommodation} />
                  </TitleHostWrapper>
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
