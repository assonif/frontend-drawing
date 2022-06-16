import React, { useState } from 'react';
import Canvas from '../../components/Canvas';
import PageSettings from '../../components/PageSettings';
import Toolbar from '../../components/Toolbar';
import { Container } from './styles';

function Home() {
  const [tool, setTool] = useState('line');

  const handleChangeTool = (event) => {
    const { name } = event.currentTarget;
    setTool(name);
  };

  return (
    <Container>
      <PageSettings />
      <Toolbar handleChangeTool={handleChangeTool} tool={tool} />
      {/* <DrawingMenu handleChangeTool={handleChangeTool} /> */}
      <Canvas />
    </Container>
  );
}

export default Home;
