import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;

  align-items: center;

  & > * {
    font-family: 'Virgil';
  }
`;
