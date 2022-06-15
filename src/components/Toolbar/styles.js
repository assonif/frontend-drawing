import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ToolButton = styled.button`
  position: relative;
  display: flex;

  border: 0;
  padding: 6px;
  margin: 4px;

  border-radius: 4px;

  background: ${(props) => (props.isSelected ? '#ea526f' : 'transparent')};

  color: ${(props) => (props.isSelected ? '#f4f3ee' : '#223843')};

  > svg {
    width: 20px;
    height: 20px;
  }
  > span {
    font-size: 8px;
    position: absolute;
    bottom: 2px;
    right: 2px;
  }
`;
