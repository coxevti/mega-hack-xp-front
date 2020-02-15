import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ label, navigateTo }) {
  return <Container to={navigateTo}>{label}</Container>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
};
