import React, { useContext, useMemo } from 'react';
import FloatingContainer from '../FloatingContainer';
import SettingsSection from '../SettingsSection';
import CustomInputRange from '../CustomInputRange';

import { Container } from './styles';
import ColorPicker from '../ColorPicker';
import { UserContext } from '../../provider';
import { changeDrawOptions } from '../../store/modules/tool/actions';

function ToolSettings() {
  const { dispatch, state } = useContext(UserContext);

  const { stroke } = useMemo(() => state.drawOptions, [state]);

  const handleChangeDrawOptions = (property, value) => {
    dispatch(changeDrawOptions({ [property]: value }));
  };

  return (
    <FloatingContainer width="100%">
      <Container>
        <SettingsSection title="Stroke">
          <ColorPicker
            selectedColor={stroke}
            setSelectedColor={(value) => handleChangeDrawOptions('stroke', value)}
          />
        </SettingsSection>
        <SettingsSection title="Fill">
          <ColorPicker
            selectedColor={stroke}
            setSelectedColor={(value) => handleChangeDrawOptions('stroke', value)}
          />
        </SettingsSection>
        <SettingsSection title="Stroke Width">
          <CustomInputRange
            value={state.drawOptions.strokeWidth}
            handleChangeValue={(value) => handleChangeDrawOptions('strokeWidth', value)}
            min={0}
            max={3}
          />
        </SettingsSection>
      </Container>
    </FloatingContainer>
  );
}

export default ToolSettings;
