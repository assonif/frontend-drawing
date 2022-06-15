import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  margin: 8px; /* Will not center vertically and won't work in IE6/7. */
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    background: #f4f3ee;

    border-radius: 4px;
    display: flex;
  }
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
