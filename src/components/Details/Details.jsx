import React, { useState } from 'react';
import { ShowDetailDescription, ShowDetailEquipement, ContentBox, BoxTitle, DetailsWrapper } from './Details.styled';
import ArrowIcon from '../../assets/Vector.png';

export const Details = ({ accommodation }) => {
      const [rotatedDescription, setRotatedDescription] = useState(false);
      const [rotatedEquipement, setRotatedEquipement] = useState(false);
      const [showDescription, setShowDescription] = useState(false);
      const [showEquipement, setShowEquipement] = useState(false);

      const handleDescriptionClick = () => {
            setRotatedDescription(!rotatedDescription);
            setShowDescription(!showDescription); // Afficher/masquer la description
      };

      // Fonction pour gérer le clic sur l'image Equipement
      const handleEquipementClick = () => {
            setRotatedEquipement(!rotatedEquipement);
            setShowEquipement(!showEquipement); // Afficher/masquer l'équipement
      };
      return (
            <DetailsWrapper>
                  {/* Box Description */}
                  <ShowDetailDescription>
                        <BoxTitle onClick={handleDescriptionClick}>
                              <span style={{ fontSize: '25px' }}>Description</span>
                              <img
                                    src={ArrowIcon}
                                    alt="Description icon"
                                    style={{
                                          transform: rotatedDescription ? 'rotate(90deg)' : 'rotate(-90deg)',
                                          height: '30px',
                                          marginTop: '0px',
                                          cursor: 'pointer',
                                    }}
                              />
                        </BoxTitle>
                        {/* Affichage de la Description sous la Box Description */}
                        {showDescription && (
                              <ContentBox>
                                    <p style={{ textAlign: 'left', paddingLeft: '5px', paddingTop: '0px' }}>{accommodation.description}</p>
                              </ContentBox>
                        )}
                  </ShowDetailDescription>

                  <ShowDetailEquipement>
                        <BoxTitle onClick={handleEquipementClick}>
                              <span style={{ fontSize: '25px' }}>Équipement</span>
                              <img
                                    src={ArrowIcon}
                                    alt="Equipement icon"
                                    style={{
                                          transform: rotatedEquipement ? 'rotate(90deg)' : 'rotate(-90deg)',
                                          height: '30px',
                                          marginTop: '0px',
                                          cursor: 'pointer',
                                    }}
                              />
                        </BoxTitle>
                        {/* Affichage des Équipements sous la Box Équipement */}
                        {showEquipement && (
                              <ContentBox>
                                    <ul style={{ listStyleType: 'none', textAlign: 'left', paddingLeft: '5px' }}>
                                          {accommodation.equipments.map((equip, index) => (
                                                <li key={index}>{equip}</li>
                                          ))}
                                    </ul>
                              </ContentBox>
                        )}
                  </ShowDetailEquipement>
            </DetailsWrapper>
      );
};
