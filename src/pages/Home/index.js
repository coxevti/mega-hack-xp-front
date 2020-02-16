import React from 'react';

import Button from '~/components/Button';

import { HomePageElm } from './styles';

export default function Home() {
  return (
    <HomePageElm>
      <h1>
        Olá! Não investe por achar que não tem recurso, ou por ser muito
        complexo, por medo de perder TUDO ?
      </h1>
      <p>
        Nosso orientador te ajudará no conhecimento, acesso, oportunidade de
        forma digital, capaz de levar a segurança, educação financeira para sabe
        se relacionar com dinheiro.
      </p>
      <Button label="Vamos começar?" navigateTo="/dashboard" />
    </HomePageElm>
  );
}
