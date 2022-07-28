import React, { useEffect } from 'react';
import {
  Banner,
  Categories,
  Collection,
  Discount,
  Footer,
  Newsletter,
} from '../components';
import Container from 'react-bootstrap/Container';
import '../styles/extra.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container fluid>
      <Banner />
      <Collection />
      <Discount />
      <Categories />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
