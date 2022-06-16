import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { Container } from './styles';

function CustomInputRange({ initialValue }) {
  const [value, setValue] = useState(initialValue);
  return (
    <Container>
      <input
        type="range"
        id="ee"
        min={0}
        max={1}
        step={0.1}
        defaultValue={value}
        onChange={(e) => console.log(e.target.value)}
        onMouseUp={({ target }) => {
          console.log(value);
          setValue(target.value);
        }}
      />
    </Container>
  );
}

export default CustomInputRange;

CustomInputRange.propTypes = {
  initialValue: PropTypes.func.isRequired,
};
