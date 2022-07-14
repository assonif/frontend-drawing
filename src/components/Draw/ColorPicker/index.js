/* eslint-disable react/prop-types */
import Tippy from '@tippyjs/react';
import React from 'react';
import { TwitterPicker } from 'react-color';
import { Container, InputContainer } from './styles';

function ColorPicker({ selectedColor, setSelectedColor }) {
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
