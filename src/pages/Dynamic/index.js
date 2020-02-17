import React from 'react';

import Button from '~/components/Button';

import { Container, ListType } from './styles';

export default function Dynamic({ location }) {
  return (
    <Container>
      <h1>Teste:</h1>
      <ul>
        {location.state.map(item => (
          <ListType key={item.id}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
            <Button navigateTo="/s" label="Saiba mais..." />
          </ListType>
        ))}
      </ul>
    </Container>
  );
}
