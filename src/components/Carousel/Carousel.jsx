import React, { useState } from 'react';
import ArrowIcon from '../../assets/Vector.png';
import { Counter, PrevButton, NextButton, CarouselWrapper, CarouselImage } from './Carousel.styled';

export const Carousel = ({ House }) => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      const nextImage = () => {
            setCurrentImageIndex((index) => (index === House.pictures.length - 1 ? 0 : index + 1));
      };

      const prevImage = () => {
            setCurrentImageIndex((index) => (index === 0 ? House.pictures.length - 1 : index - 1));
      };

      return (
            <CarouselWrapper>
                  <CarouselImage src={House.pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                  {/* j'ai suprimer les conditions pour que les images passent en boucle: si on est on derniere image on revient au premiere et inversement  */}
                  {House.pictures.length > 1 && (
                        <>
                              <PrevButton onClick={prevImage}>
                                    <img src={ArrowIcon} alt="Précédent" style={{ transform: 'rotate(180deg)' }} />
                              </PrevButton>
                              <NextButton onClick={nextImage}>
                                    <img src={ArrowIcon} alt="Suivant" />
                              </NextButton>
                        </>
                  )}

                  {/* {House.pictures.length > 1 && (
                        <>
                            
                              {currentImageIndex !== 0 && (
                                    <PrevButton onClick={prevImage}>
                                          <img src={ArrowIcon} alt="Précédent" style={{ transform: 'rotate(180deg)' }} />
                                    </PrevButton>
                              )}

                              
                              {currentImageIndex !== House.pictures.length - 1 && (
                                    <NextButton onClick={nextImage}>
                                          <img src={ArrowIcon} alt="Suivant" />
                                    </NextButton>
                              )}
                        </>
                  )} */}
                  <Counter>
                        {currentImageIndex + 1}/{House.pictures.length}
                  </Counter>
            </CarouselWrapper>
      );
};
