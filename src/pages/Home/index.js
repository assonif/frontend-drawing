import React, { useState } from 'react';
import Canvas from '../../components/Canvas';
import Toolbar from '../../components/Toolbar';
import { Container } from './styles';

function Home() {
  const [tool, setTool] = useState('line');

  const handleChangeTool = (event) => {
    const { name } = event.currentTarget;

    console.log(event.target);
    setTool(name);
  };

  return (
    <Container>
      <Toolbar handleChangeTool={handleChangeTool} tool={tool} />
      {/* <DrawingMenu handleChangeTool={handleChangeTool} /> */}
      <Canvas />
    </Container>
  );
}

export default Home;
