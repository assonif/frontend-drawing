/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';

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
  position: PropTypes.string,
  positioning: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

FloatingContainer.defaultProps = {
  width: 'auto',
  position: 'relative',
  positioning: { top: 0, left: 0, right: 0, bottom: 0 },
};
