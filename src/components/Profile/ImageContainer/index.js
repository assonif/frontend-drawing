import React from 'react';

import { Container } from './styles';

function ImageContainer() {
  return (
    <Container>
      <img src="./images/react.svg" alt="react icon" />
      <img src="./images/webdev.svg" alt="html icon" />
      <img src="./images/node.svg" alt="node icon" />
      <img src="./images/css.svg" alt="css icon" />
      <img src="./images/redux.svg" alt="redux icon" />
    </Container>
  );
}

export default ImageContainer;
