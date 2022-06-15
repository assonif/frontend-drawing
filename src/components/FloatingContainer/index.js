/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function FloatingContainer({ children, positioning, position }) {
  return (
    <Container position={position} positioning={positioning}>
      {children}
    </Container>
  );
}

export default FloatingContainer;

FloatingContainer.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string.isRequired,
  positioning: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }).isRequired,
};
