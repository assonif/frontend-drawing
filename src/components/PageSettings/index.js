import React from 'react';
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
        <SettingsSection title="Opacity">
          <CustomInputRange initialValue={0.5} />
        </SettingsSection>
        <SettingsSection title="Opacity">
          <CustomInputRange initialValue={0.5} />
        </SettingsSection>
        <SettingsSection title="Opacity">
          <CustomInputRange initialValue={0.5} />
        </SettingsSection>
      </div>
    </FloatingContainer>
  );
}

export default PageSettings;
