import React, { useState, useEffect } from 'react';

import Button from '~/components/Button';

import api from '~/services/api';

import { Container, ListType } from './styles';

export default function Dashboard() {
  const [investments, setInvestments] = useState([]);
  useEffect(() => {
    async function loadInvestments() {
      const response = await api.get('Investments');
      setInvestments(response.data.results);
    }
    loadInvestments();
  }, []);

  return (
    <Container>
      <h1>Conheça todos os investimentos</h1>
      <ul>
        {investments.map(item => (
          <ListType key={item.objectId}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
            <Button
              navigateTo={{
                pathname: '/dashboard/dynamic',
                state: {
                  content: item.content,
                },
              }}
              label="Saiba mais..."
            />
          </ListType>
        ))}
      </ul>
    </Container>
  );
}
