import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    max-width: 1280px;
    --mainBlue: #a8dadc;
    --white: #fff;
    --lightGray: #e9ecef;
  }

  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--mainBlue);
  }

  .App {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;
