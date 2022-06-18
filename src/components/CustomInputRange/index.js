import React from 'react';

import PropTypes from 'prop-types';
import { Container } from './styles';

function CustomInputRange({ value, handleChangeValue, max, min }) {
  return (
    <Container>
      <input
        type="range"
        id="ee"
        min={min}
        max={max}
        step={0.1}
        defaultValue={value}
        onMouseUp={({ target }) => {
          handleChangeValue(target.value);
        }}
      />
    </Container>
  );
}

export default CustomInputRange;

CustomInputRange.propTypes = {
  handleChangeValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
};

CustomInputRange.defaultProps = {
  max: 1,
  min: 0,
};
