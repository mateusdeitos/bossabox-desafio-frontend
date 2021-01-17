import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    body {
      background: #FFF;
      color: #170C3A;
      --webkit-font-smoothing: antialiased;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.4px;
      max-width: 768px;
      margin: 0 auto;
    }

    h1, h2, h3, h4, h5 {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      color:  #170C3A ;
    }

    h1 {
      font-size: 42px;
      letter-spacing: 0.84px;
    }
    h2 {
      font-size: 36px;
      letter-spacing: 0.72px;
    }
    h3 {
      font-size: 30px;
      letter-spacing: 0.6px;
    }
    h4 {
      font-size: 26px;
      letter-spacing: 0.52px;
    }
    h5 {
      font-size: 24px;
      letter-spacing: 0.48px;
    }
    strong {
      font-weight: 700;
    }

    p {
      letter-spacing: 0.4px;
      font-family: 'Source Sans Pro', sans-serif;
      color: #170C3A;
      opacity: 1;
      font-size: 20px;
    }
    a {
      letter-spacing: 0.4px;
      font-family: 'Source Sans Pro', sans-serif;
      opacity: 1;
      font-size: 20px;
    }

    label {
      font-family: 'Source Sans Pro', sans-serif;
      color: #170C3A;
    }

    button {
      cursor: pointer;
    }

`;
