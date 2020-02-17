import React from 'react';
import Typist from 'react-typist';

import { Container } from './styles';

export default function Question() {
  return (
    <Container>
      <Typist>
        <span className="my-custom-class"> First Sentence </span>
        <br />
        <div className="container">
          <p> This will be animated after first sentence is complete </p>
        </div>
        Final sentence
      </Typist>
    </Container>
  );
}
