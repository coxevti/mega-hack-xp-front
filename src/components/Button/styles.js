import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  height: 46px;
  background: #00bce4;
  border: 0;
  border-radius: 10rem;
  padding: 1rem 3rem;
  color: #fff;
  font-weight: bold;
  transition: opacity 0.6s;
  &:hover {
    opacity: 0.9;
  }
`;
