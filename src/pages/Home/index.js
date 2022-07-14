import React, { useContext } from 'react';
import Canvas from '../../components/Draw/Canvas';
import SidebarWrapper from '../../components/Draw/SidebarWrapper';
import Toolbar from '../../components/Draw/Toolbar';
import { UserContext } from '../../provider';
import { changeTool } from '../../store/modules/tool/actions';
import { Container } from './styles';

function Home() {
  const { dispatch, state } = useContext(UserContext);

  const handleChangeTool = (event) => {
    const { name } = event.currentTarget;

    dispatch(changeTool(name));
  };

  return (
    <Container>
      <SidebarWrapper />
      <Toolbar handleChangeTool={handleChangeTool} tool={state.tool} />
      {/* <DrawingMenu handleChangeTool={handleChangeTool} /> */}
      <div style={{ height: '300vh', zIndex: 2 }}>dsdsdsds</div>
      <div style={{ height: '300vh', zIndex: 2 }}>dsdsdsds</div>
      <Canvas />
    </Container>
  );
}

export default Home;
