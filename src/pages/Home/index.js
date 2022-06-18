import React, { useContext } from 'react';
import Canvas from '../../components/Canvas';
import PageSettings from '../../components/PageSettings';
import Toolbar from '../../components/Toolbar';
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
      <PageSettings />
      <Toolbar handleChangeTool={handleChangeTool} tool={state.tool} />
      {/* <DrawingMenu handleChangeTool={handleChangeTool} /> */}
      <Canvas />
    </Container>
  );
}

export default Home;
