import React, { useState, useEffect, useRef } from 'react';
import { ShowDetailLabel, BoxTitle, ArrowIconImage, TitleText, AnimatedContentBox } from './Details.styled';
import ArrowIcon from '../../assets/Vector.png';

export const DetailsLabel = ({ TitleLabel, children }) => {
      const [rotatedArrow, setRotatedArrow] = useState(false);
      const [showLabel, setShowLabel] = useState(false);
      const [animate, setAnimate] = useState(false);
      const [contentHeight, setContentHeight] = useState('0px');

      const contentRef = useRef(null);

      useEffect(() => {
            if (showLabel) {
                  setAnimate(true);
                  if (contentRef.current) {
                        setContentHeight(`${contentRef.current.scrollHeight}px`); // Récupérer la hauteur réelle du contenu
                  }
            } else {
                  setContentHeight('0px');
                  const timeout = setTimeout(() => {
                        setAnimate(false);
                  }, 1000);
                  return () => clearTimeout(timeout);
            }
      }, [showLabel]);

      const handleDescriptionClick = () => {
            setRotatedArrow(!rotatedArrow);
            setShowLabel(!showLabel);
      };

      return (
            <ShowDetailLabel>
                  <BoxTitle>
                        <TitleText>{TitleLabel}</TitleText>
                        <ArrowIconImage src={ArrowIcon} alt="Description icon" onClick={handleDescriptionClick} rotated={rotatedArrow} />
                  </BoxTitle>

                  <AnimatedContentBox ref={contentRef} show={showLabel} animate={animate} contentHeight={contentHeight}>
                        {children}
                  </AnimatedContentBox>
            </ShowDetailLabel>
      );
};
