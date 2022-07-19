import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  .specific-button {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    padding: 6px;
    margin: 0 8px;

    border-radius: 8px;

    font-size: 12px;
    font-weight: bold;

    width: 120px;

    background: transparent;
    border: 1px solid #ea526f;

    color: #ea526f;
  }
`;
