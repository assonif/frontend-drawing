import PropTypes from 'prop-types';
import React from 'react';
import FloatingContainer from '../FloatingContainer';

import { Button, Container } from './styles';

function TryItButton({ onClick, lowText, highText }) {
  return (
    <FloatingContainer position="fixed">
      <Container>
        {lowText && <span>{lowText}</span>}
        <Button onClick={onClick}>{highText}</Button>
      </Container>
    </FloatingContainer>
  );
}

export default TryItButton;

TryItButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  lowText: PropTypes.string,
  highText: PropTypes.string.isRequired,
};

TryItButton.defaultProps = {
  lowText: null,
};
