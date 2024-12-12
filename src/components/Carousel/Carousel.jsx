import React, { useState } from 'react';
import ArrowIcon from '../../assets/Vector.png';
import { Counter, PrevButton, NextButton, CarouselWrapper, CarouselImage } from './Carousel.styled';

export const Carousel = ({ accommodation }) => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      const nextImage = () => {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex === accommodation.pictures.length - 1 ? 0 : currentImageIndex + 1));
      };
      const prevImage = () => {
            setCurrentImageIndex((currentImageIndex) => (currentImageIndex === 0 ? accommodation.pictures.length - 1 : currentImageIndex - 1));
      };

      return (
            <CarouselWrapper>
                  {currentImageIndex > 0 && (
                        <PrevButton onClick={prevImage}>
                              <img src={ArrowIcon} alt="Précédent" style={{ transform: 'rotate(180deg)' }} />
                        </PrevButton>
                  )}

                  <CarouselImage src={accommodation.pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />

                  {currentImageIndex < accommodation.pictures.length - 1 && (
                        <NextButton onClick={nextImage}>
                              <img src={ArrowIcon} alt="Suivant" />
                        </NextButton>
                  )}
                  <Counter>
                        {currentImageIndex}/{accommodation.pictures.length - 1}
                  </Counter>
            </CarouselWrapper>
      );
};
