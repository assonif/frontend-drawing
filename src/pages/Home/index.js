import React, { useContext } from 'react';
import Canvas from '../../components/Draw/Canvas';
import SidebarWrapper from '../../components/Draw/SidebarWrapper';
import Toolbar from '../../components/Draw/Toolbar';
import TryItButton from '../../components/Draw/TryItButton';
import ProfileContainer from '../../components/Profile/ProfileContainer';
import { UserContext } from '../../provider';
import { changeEditMode, changeTool } from '../../store/modules/tool/actions';
import { Container } from './styles';

function Home() {
  const { dispatch, state } = useContext(UserContext);

  const handleChangeTool = (event) => {
    const { name } = event.currentTarget;

    dispatch(changeTool(name));
  };

  const handleToggleEditMode = () => {
    dispatch(changeEditMode(!state.editMode));
  };
  return (
    <Container>
      {!state.editMode && (
        <TryItButton
          onClick={handleToggleEditMode}
          lowText="Did you like my draws?"
          highText="Try it yourself!"
        />
      )}
      {state.editMode && (
        <>
          <SidebarWrapper onClick={handleToggleEditMode} />
          <Toolbar
            handleChangeTool={handleChangeTool}
            handleToggleEditMode={handleToggleEditMode}
            tool={state.tool}
          />
        </>
      )}
      {/* <DrawingMenu handleChangeTool={handleChangeTool} /> */}

      <Canvas />
      <ProfileContainer />
    </Container>
  );
}

export default Home;
