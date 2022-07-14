import React from 'react';
import PageSettings from '../PageSettings';
import ToolSettings from '../ToolSettings';

import { Container } from './styles';

function SidebarWrapper() {
  return (
    <Container>
      <PageSettings />
      <ToolSettings />
    </Container>
  );
}

export default SidebarWrapper;
