import PropTypes from 'prop-types';
import React from 'react';

import { Container } from './styles';

function SettingsSection({ children, title }) {
  return (
    <Container>
      <p>{title}</p>
      {children}
    </Container>
  );
}

export default SettingsSection;

SettingsSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
