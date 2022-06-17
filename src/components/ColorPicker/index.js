import React, { useState } from 'react';
import { TwitterPicker } from 'react-color';
import Tippy from '@tippyjs/react';
import { Container, InputContainer } from './styles';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#ccc');

  return (
    <Container>
      <Tippy
        interactive
        placement="bottom"
        content={
          <TwitterPicker
            width="180px"
            color={selectedColor}
            onChangeComplete={(color) => setSelectedColor(color.hex)}
          />
        }
      >
        <InputContainer color={selectedColor}>
          <div />
          <input type="text" value={selectedColor.toUpperCase()} />
        </InputContainer>
      </Tippy>
    </Container>
  );
}

export default ColorPicker;
