import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeWrapper, CardContainer, Card, Illustration, HomeImg, TextOverlay, StyledTitle } from './Home.styled';
import HomeIllustration from '../../assets/ImageHome.jpg';

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
                              // <Link key={item.id} to={`/${item.title.replace(/ /g, '_')}`}>
                              <Link key={item.id} to={`/accommodation/${item.id}`}>
                                    <Card key={item.id} cover={item.cover}>
                                          <StyledTitle>{item.title}</StyledTitle> {/* Vous pouvez ajouter plus d'informations à l'intérieur de Card ici */}
                                    </Card>
                              </Link>
                        ))}
                  </CardContainer>
            </HomeWrapper>
      );
}

export default Home;
