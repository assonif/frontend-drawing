import styled from 'styled-components';

export const CanvasContainer = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0;
  bottom: 0;
  z-index: 0;
`;

export const CanvasContext = styled.canvas`
  background: transparent;

  overflow: hidden;

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  z-index: 0;
`;
