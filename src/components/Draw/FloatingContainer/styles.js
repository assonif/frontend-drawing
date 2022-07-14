import styled from 'styled-components';

export const Container = styled.div`
  margin: 8px;

  ${({ position, positioning }) => ({ position, ...positioning })}

  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;

  > div {
    background: #f4f3ee;

    box-shadow: 0 0 0 1px rgb(0 0 0 / 1%), 1px 1px 5px rgb(0 0 0 / 15%);

    border-radius: 4px;
    padding: 6px;

    width: ${(props) => props.width};
  }
`;
