import React from 'react';
import { TbCircle, TbTable } from 'react-icons/tb';
import ColorPicker from '../ColorPicker';
import { CustomButton } from '../CustomButton/styles';
import CustomInputRange from '../CustomInputRange';

import FloatingContainer from '../FloatingContainer';
import SettingsSection from '../SettingsSection';

function PageSettings() {
  return (
    <FloatingContainer position="fixed" positioning={{ top: 0, left: 0 }}>
      <div>
        <SettingsSection title="Opacity">
          <CustomInputRange initialValue={0.5} />
        </SettingsSection>
        <SettingsSection title="Background">
          <ColorPicker />
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
