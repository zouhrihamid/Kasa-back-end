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
                        setData(result);
                  } catch (error) {
                        console.error('error fetching data', error);
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
                                    <Card cover={item.cover}>
                                          <StyledTitle>{item.title}</StyledTitle>{' '}
                                    </Card>
                              </Link>
                        ))}
                  </CardContainer>
            </HomeWrapper>
      );
}

export default Home;
