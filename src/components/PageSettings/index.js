import React, { useContext, useMemo } from 'react';
import { TbCircle, TbTable } from 'react-icons/tb';
import { UserContext } from '../../provider';
import { changeBgColor } from '../../store/modules/tool/actions';
import ColorPicker from '../ColorPicker';
import { CustomButton } from '../CustomButton/styles';
import CustomInputRange from '../CustomInputRange';

import FloatingContainer from '../FloatingContainer';
import SettingsSection from '../SettingsSection';

function PageSettings() {
  const { dispatch, state } = useContext(UserContext);

  const { bgColor } = useMemo(() => state, [state]);

  const handleChangeBgColor = (value) => {
    dispatch(changeBgColor(value));
  };

  return (
    <FloatingContainer position="fixed" positioning={{ top: 0, left: 0 }}>
      <div>
        <SettingsSection title="Opacity">
          <CustomInputRange initialValue={0.5} />
        </SettingsSection>

        <SettingsSection title="Background">
          <ColorPicker
            selectedColor={bgColor}
            setSelectedColor={handleChangeBgColor}
          />
        </SettingsSection>

        <SettingsSection title="Type">
          <CustomButton isSelected type="rectangle">
            <TbTable />
          </CustomButton>
          <CustomButton type="rectangle">
            <TbCircle />
          </CustomButton>
        </SettingsSection>
      </div>
    </FloatingContainer>
  );
}

export default PageSettings;
