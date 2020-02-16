import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  width: 100%;
  position: absolute;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #00a98f;
    font-size: 45px;
  }
  a {
    font-weight: bold;
    color: #00a98f;
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid #eee;
  }
`;
