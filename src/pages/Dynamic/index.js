import React from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import { Container } from './styles';

export default function Dynamic({ location, history }) {
  function handleGoBack() {
    history.goBack();
  }

  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: location.state.content }} />

      <button type="button" onClick={handleGoBack}>
        <FaArrowLeft />
      </button>
    </Container>
  );
}
