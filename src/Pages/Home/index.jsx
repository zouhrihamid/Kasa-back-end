import React, { useEffect, useState } from 'react';

import { HomeWrapper, CardContainer, Card, Illustration, HomeImg, TextOverlay, StyledTitle } from './Home.styled';
import HomeIllustration from '../../assets/ImgHome.jpg';

function Home() {
      const [data, setData] = useState([]);
      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await fetch('/data/logements.json');
                        const result = await response.json();
                        console.log(result);
                        setData(result);
                  } catch (error) {
                        console.error('Error fetching data:', error);
                  }
            };
            fetchData();
      }, []);

      return (
            <HomeWrapper>
                  <HomeImg>
                        <TextOverlay>Chez vous, partout et ailleurs</TextOverlay>
                        <Illustration src={HomeIllustration} />
                  </HomeImg>
                  <CardContainer>
                        {data.map((item) => (
                              <Card key={item.id} cover={item.cover}>
                                    <StyledTitle>{item.title}</StyledTitle> {/* Vous pouvez ajouter plus d'informations à l'intérieur de Card ici */}
                              </Card>
                        ))}
                  </CardContainer>
            </HomeWrapper>
      );
}

export default Home;
