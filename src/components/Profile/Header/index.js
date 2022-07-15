import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Container, IconsContainer } from './styles';

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
    </Container>
  );
}

export default Header;
