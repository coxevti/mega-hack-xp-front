import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import { Container } from './styles';

import steps from '~/services/chatbotsteps';

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
