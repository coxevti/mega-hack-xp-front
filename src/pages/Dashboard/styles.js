import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  h1 {
    color: #fff;
    padding: 70px 20px 20px;
    font-size: 1.8rem;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }
  @media (max-width: 450px) {
    ul {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
    }
  }
  @media (min-width: 450px) and (max-width: 800px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
    }
  }
`;

export const ListType = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  color: #52565e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  strong {
    display: block;
    font-size: 26px;
  }
  span {
    display: block;
    margin-top: 5px;
    margin-bottom: 15px;
    color: #999;
  }
`;
