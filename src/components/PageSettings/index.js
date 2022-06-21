import React, { useContext, useMemo } from 'react';
import { UserContext } from '../../provider';
import { changeBgColor } from '../../store/modules/tool/actions';
import ColorPicker from '../ColorPicker';

import FloatingContainer from '../FloatingContainer';
import SettingsSection from '../SettingsSection';
import { Container } from './styles';

function PageSettings() {
  const { dispatch, state } = useContext(UserContext);

  const { bgColor } = useMemo(() => state, [state]);

  const handleChangeBgColor = (value) => {
    dispatch(changeBgColor(value));
  };

  return (
    <FloatingContainer>
      <Container>
        <SettingsSection title="Background">
          <ColorPicker selectedColor={bgColor} setSelectedColor={handleChangeBgColor} />
        </SettingsSection>
      </Container>
    </FloatingContainer>
  );
}

export default PageSettings;
