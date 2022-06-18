import React, { useContext, useMemo } from 'react';
import FloatingContainer from '../FloatingContainer';
import SettingsSection from '../SettingsSection';
import CustomInputRange from '../CustomInputRange';

import { Container } from './styles';
import ColorPicker from '../ColorPicker';
import { UserContext } from '../../provider';
import { changeDrawColor } from '../../store/modules/tool/actions';

function ToolSettings() {
  const { dispatch, state } = useContext(UserContext);

  const { color: drawColor } = useMemo(() => state.drawOptions, [state]);

  const handleChangeDrawColor = (value) => {
    dispatch(changeDrawColor(value));
  };

  return (
    <FloatingContainer width="100%">
      <Container>
        <SettingsSection title="Background">
          <ColorPicker
            selectedColor={drawColor}
            setSelectedColor={handleChangeDrawColor}
          />
        </SettingsSection>
        <SettingsSection title="Opacity">
          <CustomInputRange initialValue={0.5} />
        </SettingsSection>
      </Container>
    </FloatingContainer>
  );
}

export default ToolSettings;
