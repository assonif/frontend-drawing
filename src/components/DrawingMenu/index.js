import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

function DrawingMenu({ handleChangeTool }) {
  return (
    <Container>
      <button type="button" onClick={handleChangeTool} name="selection">
        Selection
      </button>
      <button type="button" onClick={handleChangeTool} name="line">
        Line
      </button>
      <button type="button" onClick={handleChangeTool} name="rectangle">
        Rectangle
      </button>
    </Container>
  );
}

export default DrawingMenu;

DrawingMenu.propTypes = {
  handleChangeTool: PropTypes.func.isRequired,
};
