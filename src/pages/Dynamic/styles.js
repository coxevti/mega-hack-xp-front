import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  margin: 0 auto;
  svg {
    color: #52565e;
    font-size: 32px;
  }
  div {
    color: #fff;
    padding: 70px 20px 20px;
    max-width: 860px;
    h1 {
      font-size: 3.5rem;
    }
    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 15px;
      margin-top: 25px;
      li {
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
      }
    }
  }
  button {
    position: absolute;
    top: 15px;
    left: 35px;
    background: transparent;
    border: 0;
  }
`;
