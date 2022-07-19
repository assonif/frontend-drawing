import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  z-index: ${(props) => (props.editMode ? 0 : 2)};

  & > * {
    font-family: 'Virgil';
  }
`;
