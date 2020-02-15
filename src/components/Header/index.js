import React from 'react';
import { Link } from 'react-router-dom';

import { FaCommentDollar } from 'react-icons/fa';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <FaCommentDollar />
        <Link to="/">Invista seu dindin</Link>
      </Content>
    </Container>
  );
}
