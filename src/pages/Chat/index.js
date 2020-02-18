import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import { Container } from './styles';

const steps = [
  {
    id: '1',
    message:
      'Ola, meu nome é dindin, vamos começar na sua jornada pelo conhecimento, Vou fazer algumas perguntas pra voçê, ok ?',
    trigger: 'questionOne',
  },
  {
    id: 'questionOne',
    message: 'Você sabe o que é CDI e como funciona?',
    trigger: 'answerOne',
  },
  {
    id: 'answerOne',
    options: [
      { value: 1, label: 'Sim', trigger: 'questionTwo' },
      { value: 2, label: 'Não', trigger: 'answerTwo' },
    ],
  },
  {
    id: 'answerTwo',
    message:
      'Certificado de Depósito Interbancário ou, simplesmente, CDI é um título de emissão das instituições financeiras, que lastreia as operações do mercado interbancário, ou seja, transações entre bancos..',
    trigger: 'questionTwo',
  },
  {
    id: 'questionTwo',
    message: 'Você sabe o que significa 100% do CDI?',
    trigger: 'answerThree',
  },
  {
    id: 'answerThree',
    options: [
      { value: 1, label: 'Sim', trigger: 'questionThree' },
      { value: 2, label: 'Não', trigger: 'answerFour' },
    ],
  },
  {
    id: 'answerFour',
    message:
      'De forma simples: render 100% do CDI significa que aquele investimento terá o mesmo rendimento do CDI durante o período em que ficar aplicado.',
    trigger: 'questionThree',
  },

  {
    id: 'questionThree',
    message: 'Você sabe o que significa é CDB?',
    trigger: 'answerFive',
  },
  {
    id: 'answerFive',
    options: [
      { value: 1, label: 'Sim', trigger: 'questionThree' },
      { value: 2, label: 'Não', trigger: 'answerSix' },
    ],
  },
  {
    id: 'answerSix',
    message:
      'CDB significa Certificado de Depósito Bancário. Ele é um título de investimento de renda fixa muito acessível para quem busca algo diferente do que investir apenas na poupança..',
    trigger: 'questionThree',
  },

  {
    id: 'questionThree',
    message: 'Você sabe o que é FGC?',
    trigger: 'answerSeven',
  },
  {
    id: 'answerSeven',
    options: [
      { value: 1, label: 'Sim', trigger: 'questionFour' },
      { value: 2, label: 'Não', trigger: 'answerEight' },
    ],
  },
  {
    id: 'answerEight',
    message:
      'É o Fundo Garantidor de Créditos, que visa a manutenção de um sistema bancário sólido e saudável. Ele fornece segurança de diversos investimentos até o limite de R$ 250 mil por entidade financeira e por CPF (pode chegar ao limite máximo de R$ 1 milhão em até 4 anos). Aliás, essa é a segurança dada à poupança, que grande parte das pessoas considera ser o investimento mais seguro que existe. Mas essa proteção do FGC é dada igualmente à poupança e a diversos outros investimentos, como o CDB mencionado anteriormente. No entanto, existem vários CDBs que, mesmo tendo o desconto do imposto de renda, ainda proporcionam uma rentabilidade líquida muito maior do que a poupança. Resumindo, muitos CDBs rendem mais que a poupança e com a mesma segurança..',
    trigger: 'questionFour',
  },
  {
    id: 'questionFour',
    message: 'Você sabe o que é Selic?',
    trigger: 'answerNine',
  },
  {
    id: 'answerNine',
    options: [
      { value: 1, label: 'Sim', trigger: 'answerEnd' },
      { value: 2, label: 'Não', trigger: 'answerTen' },
    ],
  },
  {
    id: 'answerTen',
    message:
      'É a taxa básica de juros que o governo define baseando-se nos níveis de inflação, crescimento do país e diversos outros fatores. Hoje esta taxa está em 4,25% ao ano. Ela afeta diretamente o bolso dos brasileiros, pois serve de referência para taxas de financiamentos, empréstimos, investimentos, etc. Ou seja, quanto menor a Selic, menores as taxas de financiamentos e as taxas de rentabilidade de alguns investimentos financeiros. E vice-versa.',
    trigger: 'answerEnd',
  },
  {
    id: 'end',
    message:
      'Ok, isso é basico pra você começar a conhecer tipos de investivementos, vou está encaminhando você para página.',
    trigger: 'redirect',
  },
  { id: 'redirect', options: [{ value: 1, label: 'Ok', trigger: 'exit' }] },
  {
    id: 'answerEnd',
    options: [{ value: 1, label: 'Entendido', trigger: 'end' }],
  },
  {
    id: 'exit',
    message: 'Tchau!!',
    end: true,
  },
];

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#00a98f',
  headerFontColor: '#fff',
  fontFamily: 'Roboto',
  headerFontSize: '14px',
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
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="A “sopa de letrinhas” do mercado financeiro"
          botAvatar="https://api.adorable.io/avatar/mega.png"
          handleEnd={handleEnd}
          steps={steps}
          hideSubmitButton
          footerStyle={{ display: 'none' }}
        />
      </ThemeProvider>
    </Container>
  );
}
