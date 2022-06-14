import styled from 'styled-components';

export const Container = styled.canvas`
  cursor: ${(props) => (!props.drawing ? 'initial' : 'none')};
`;
