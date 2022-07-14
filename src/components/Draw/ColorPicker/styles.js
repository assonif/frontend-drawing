import styled from 'styled-components';

export const Container = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  div {
    height: 24px;
    width: 24px;
    background: ${(props) => props.color};

    border-radius: 4px;
  }

  input {
    border: none;
    border-radius: 4px;

    margin-left: 8px;

    width: 128px;

    padding-left: 8px;
  }
`;
