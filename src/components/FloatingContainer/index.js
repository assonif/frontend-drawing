/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function FloatingContainer({ children, positioning, position, width }) {
  return (
    <Container width={width} position={position} positioning={positioning}>
      {children}
    </Container>
  );
}

export default FloatingContainer;

FloatingContainer.propTypes = {
  width: PropTypes.oneOf(['auto', '100%']),
  children: PropTypes.node.isRequired,
  position: PropTypes.string.isRequired,
  positioning: PropTypes.shape({
    top: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }).isRequired,
};

FloatingContainer.defaultProps = {
  width: 'auto',
};
