import PropTypes from 'prop-types';
import React from 'react';
import { CustomButton } from '../CustomButton/styles';
import FloatingContainer from '../FloatingContainer';

import options from './options';

import { Container } from './styles';

function Toolbar({ handleChangeTool, tool, handleToggleEditMode }) {
  return (
    <FloatingContainer position="fixed" positioning={{ left: '50%', right: '50%' }}>
      <Container>
        {options.map(
          (item) =>
            !item.isSeparator && (
              <CustomButton
                key={item.index}
                isSelected={tool === item.name}
                onClick={handleChangeTool}
                name={item.name}
              >
                <item.icon />
                <span>{item.index}</span>
              </CustomButton>
            ),
        )}
        <button className="specific-button" type="button" onClick={handleToggleEditMode}>
          Back to readonly
        </button>
      </Container>
    </FloatingContainer>
  );
}

export default Toolbar;

Toolbar.propTypes = {
  handleChangeTool: PropTypes.func.isRequired,
  tool: PropTypes.string.isRequired,
  handleToggleEditMode: PropTypes.func.isRequired,
};
