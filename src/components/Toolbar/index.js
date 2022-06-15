import PropTypes from 'prop-types';
import React from 'react';
import FloatingContainer from '../FloatingContainer';

import options from './options';

import { Container, ToolButton } from './styles';

function Toolbar({ handleChangeTool, tool }) {
  return (
    <FloatingContainer position="fixed" positioning={{ left: 0, right: 0 }}>
      <Container>
        {options.map((item) => (
          <ToolButton
            key={item.index}
            isSelected={tool === item.name}
            onClick={handleChangeTool}
            name={item.name}
          >
            <item.icon />
            <span>{item.index}</span>
          </ToolButton>
        ))}
      </Container>
    </FloatingContainer>
  );
}

export default Toolbar;

Toolbar.propTypes = {
  handleChangeTool: PropTypes.func.isRequired,
  tool: PropTypes.string.isRequired,
};
