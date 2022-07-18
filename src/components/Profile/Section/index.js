import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

function Section({ text }) {
  return (
    <Container>
      {text.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </Container>
  );
}

export default Section;

Section.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};
