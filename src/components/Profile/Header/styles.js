import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  width: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;

  justify-content: center;

  & > * {
    font-family: 'Virgil';
  }

  > img {
    height: 300px;
    min-height: 40%;

    aspect-ratio: 1 / 1;

    border-radius: 50%;
  }

  > h1 {
    margin: 16px 0 8px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;

  padding: 8px;

  font-size: 24px;

  > svg {
    margin-left: 8px;
  }

  > svg:hover {
    transform: scale(3);
  }
`;
