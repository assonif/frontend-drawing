import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Container, HomeContainer, IconsContainer } from './styles';

function Header() {
  return (
    <Container>
      <img src="./images/profile.jpg" alt="Profile" />
      <h1>Fabio Furtado</h1>
      <h2>Frontend Engineer</h2>

      <IconsContainer>
        <FaLinkedin />
        <FaGithub />
      </IconsContainer>
      <HomeContainer>
        <img src="./images/home.svg" alt="Hometown São paulo Brazil" />
        <span>São Paulo, Brazil</span>
      </HomeContainer>
    </Container>
  );
}

export default Header;
