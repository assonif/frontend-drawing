import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

function Section({ text, images }) {
  return (
    <Container>
      {text.map((paragraph) => (
        <p>{paragraph}</p>
      ))}

      {images && images}
    </Container>
  );
}

export default Section;

Section.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  images: PropTypes.node,
};

Section.defaultProps = {
  images: null,
};
