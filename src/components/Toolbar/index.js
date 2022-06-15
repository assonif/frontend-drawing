import PropTypes from 'prop-types';
import React from 'react';

import options from './options';

import { Container, ToolButton } from './styles';

function Toolbar({ handleChangeTool, tool }) {
  return (
    <Container>
      <div>
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

        {/* <ToolButton onClick={handleChangeTool} name="line">
          <TbLine />
          <span>2</span>
        </ToolButton>

        <ToolButton onClick={handleChangeTool} name="rectangle">
          <TbRectangle />
          <span>3</span>
        </ToolButton>

        <ToolButton onClick={handleChangeTool} name="rectangle">
          <TbPencil />
          <span>4</span>
        </ToolButton>

        <ToolButton onClick={handleChangeTool} name="rectangle">
          <TbTypography />
          <span>5</span>
        </ToolButton> */}
      </div>
    </Container>
  );
}

export default Toolbar;

Toolbar.propTypes = {
  handleChangeTool: PropTypes.func.isRequired,
  tool: PropTypes.string.isRequired,
};
