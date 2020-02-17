import React from 'react';

import Button from '~/components/Button';

import { Container, ListType } from './styles';

const data = [
  {
    id: 1,
    title: 'Tesouro Direto',
    description:
      'O Tesouro Direto reúne segurança, rentabilidade e opções de títulos com diferentes prazos. Invista de acordo com o seu objetivo..',
  },
  {
    id: 2,
    title: 'Renda Fixa',
    description:
      'Invista de forma simples, segura e com possibilidade de retorno superior à poupança.',
  },
  {
    id: 3,
    title: 'Fundos de investimento',
    description:
      'Investimento ideal para quem quer diversificar sua carteira de investimentos.',
  },
  {
    id: 4,
    title: 'Fundos imobiliários',
    description: 'Receba um aluguel sem a burocracia de comprar um imóvel.',
  },
  {
    id: 5,
    title: 'Ações',
    description:
      'Chegou a hora de investir na Bolsa. Seja sócio de grandes empresas do país.',
  },
];

export default function Dashboard() {
  return (
    <Container>
      <h1>Selecione uma tipo investimento:</h1>
      <ul>
        {data.map(item => (
          <ListType key={item.id}>
            <strong>{item.title}</strong>
            <span>{item.description}</span>
            <Button
              navigateTo={{
                pathname: '/dashboard/dynamic',
                state: [
                  {
                    id: 5,
                    title: 'Teste',
                    description:
                      'Chegou a hora de investir na Bolsa. Seja sócio de grandes empresas do país.',
                  },
                ],
              }}
              label="Saiba mais..."
            />
          </ListType>
        ))}
      </ul>
    </Container>
  );
}
