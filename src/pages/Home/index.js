import React, { useContext } from 'react';
import Canvas from '../../components/Draw/Canvas';
import SidebarWrapper from '../../components/Draw/SidebarWrapper';
import Toolbar from '../../components/Draw/Toolbar';
import ProfileContainer from '../../components/Profile/ProfileContainer';
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

      <Canvas />
      <ProfileContainer />
    </Container>
  );
}

export default Home;
