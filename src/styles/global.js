import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    background: linear-gradient(-90deg, #30c39e, #2dde98);
  }
  body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  .page-appear.page-appear-active {
    overflow: hidden;
  }
  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }
  .page-exit {
    opacity: 1;
    transform: scale(1);
  }
  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
