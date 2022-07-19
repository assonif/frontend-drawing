import styled from 'styled-components';

export const Container = styled.span`
  display: grid;

  grid-template-columns: 1fr 1.2fr 1fr;
  > span {
    margin-right: 8px;

    align-self: center;

    font-size: 14px;

    font-weight: bold;
  }
`;

export const Button = styled.button`
  padding: 16px 24px;
  border-radius: 50px;

  font: 18px 'Roboto' 'sans-serif';

  border: none;

  font-weight: bold;

  background: #ea526f;
  color: #ffffff;

  box-shadow: 0 0 0 1px rgb(0 0 0 / 1%), 1px 1px 5px rgb(0 0 0 / 15%);
`;
