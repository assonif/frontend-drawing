import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CustomButton = styled.button`
  position: relative;
  display: flex;

  border: 0;
  padding: ${(props) => (props.type === 'square' ? '6px' : '2px 8px')};
  margin: 4px;

  border-radius: 4px;

  transition: 0.1s ease-in-out;

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

  > div {
    display: flex;
    flex-wrap: nowrap;

    font-size: 12px;

    width: auto;
  }
`;

CustomButton.propTypes = {
  type: PropTypes.oneOf(['square', 'rectangle']),
  isSelected: PropTypes.bool.isRequired,
};

CustomButton.defaultProps = {
  type: 'square',
};
