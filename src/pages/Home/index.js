import React from 'react';
import Canvas from '../../components/Canvas';
import { Container } from './styles';

function Home() {
  // const [tool, setTool] = useState('line');

  // const handleChangeTool = (event) => {
  //   const { name } = event.target;

  //   setTool(name);
  // };
  return (
    <Container>
      {/* <DrawingMenu handleChangeTool={handleChangeTool} /> */}
      <Canvas />
    </Container>
  );
}

export default Home;
