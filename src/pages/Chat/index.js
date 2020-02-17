import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import { Container } from './styles';

const steps = [
  {
    id: '1',
    message:
      'Ola, meu nome é dindin, vamos comerçar na sua jornada pelo conhecimento, Vou fazer algumas pergunta pra voçê, ok.',
    trigger: 'question1',
  },
  {
    id: 'question1',
    message: 'Você sabe o que é CDI e como funciona?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Sim', trigger: 'end' },
      { value: 2, label: 'Não', trigger: '3' },
    ],
  },
  {
    id: '6',
    options: [{ value: 1, label: 'Entendido', trigger: 'end' }],
  },
  {
    id: '3',
    message:
      'Certificado de Depósito Interbancário ou, simplesmente, CDI é um título de emissão das instituições financeiras, que lastreia as operações do mercado interbancário, ou seja, transações entre bancos..',
    trigger: '6',
  },
  {
    id: 'end',
    message:
      'Ok, isso é basico pra você saber, vou encaminha você pra tipos inventimento.',
    trigger: '5',
  },
  { id: '5', options: [{ value: 10, label: 'Ok', trigger: '4' }] },
  {
    id: '4',
    message: 'Tchau!!',
    end: true,
  },
];

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#00a98f',
  headerFontColor: '#fff',
  fontFamily: 'Roboto',
  headerFontSize: '16px',
  botBubbleColor: '#00a98f',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export default function Chat({ history }) {
  function handleEnd() {
    history.push('Dashboard');
  }
  return (
    <Container>
      {/* <Typing>
        <h1>
          Ola, meu nome é dindin, vamos comerçar na sua jornada pelo
          conhecimento, Vou fazer algumas pergunta pra voçê, ok.
        </h1>
        <h1>O que é CDI e como funciona?</h1>
      </Typing> */}
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar="https://api.adorable.io/avatar/mega.png"
          handleEnd={handleEnd}
          steps={steps}
        />
      </ThemeProvider>
    </Container>
  );
}
