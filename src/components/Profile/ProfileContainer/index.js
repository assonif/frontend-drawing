import React from 'react';
import Header from '../Header';
import Section from '../Section';

import { Container } from './styles';

function ProfileContainer() {
  return (
    <Container>
      <Header />
      <Section />
      <Section />
      <Section />
    </Container>
  );
}

export default ProfileContainer;
