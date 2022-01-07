import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    max-width: 1280px;
    --mainBlue: #a8dadc;
    --white: #fff;
    --lightGray: #e9ecef;
    --darkGray: #918E9B;
    --mainRed: #F55A5A;
    --black: #2B283A;
    --dividerGray: #F5F5F5;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--mainBlue);
    width: 100vw;
  }

  .App {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }

  .bold {
    font-weight: 700;
  }
`;
