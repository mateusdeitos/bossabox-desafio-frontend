import { createGlobalStyle, css } from 'styled-components';
import { windowLargerThan500px } from './breakpoints';
import { ITheme } from './themes';

export default createGlobalStyle<{ theme: ITheme }>`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    body {
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.textColor};
      --webkit-font-smoothing: antialiased;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.4px;
      max-width: 768px;
      margin: 0 auto;
      padding: 8px;
    }

    h1, h2, h3, h4, h5 {
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      color: ${props => props.theme.colors.textColor};
    }

    h1 {
      font-size: 30px;
      letter-spacing: 0.84px;

      ${windowLargerThan500px(css`
        font-size: 42px;
      `)}
    }
    h2 {
      font-size: 26px;
      letter-spacing: 0.72px;

      ${windowLargerThan500px(css`
        font-size: 36px;
      `)}
    }
    h3 {
      font-size: 24px;
      letter-spacing: 0.6px;

      ${windowLargerThan500px(css`
        font-size: 30px;
      `)}
    }
    h4 {
      font-size: 20px;
      letter-spacing: 0.52px;

      ${windowLargerThan500px(css`
        font-size: 26px;
      `)}
    }
    h5 {
      font-size: 20px;
      letter-spacing: 0.48px;

      ${windowLargerThan500px(css`
        font-size: 20px;
      `)}
    }
    strong {
      font-weight: 700;
      color: ${props => props.theme.colors.textColor};
    }

    p {
      letter-spacing: 0.4px;
      font-family: 'Source Sans Pro', sans-serif;
      color: ${props => props.theme.colors.textColor};
      opacity: 1;
      font-size: 18px;

      ${windowLargerThan500px(css`
        font-size: 20px;
      `)}
    }
    a {
      letter-spacing: 0.4px;
      font-family: 'Source Sans Pro', sans-serif;
      opacity: 1;
      font-size: 18px;

      ${windowLargerThan500px(css`
        font-size: 24px;
      `)}
      color: ${props => props.theme.colors.linkColor};
    }

    label {
      font-family: 'Source Sans Pro', sans-serif;
      color: ${props => props.theme.colors.textColor};
      font-weight: normal;
      font-size: 12px;
      letter-spacing: 0px;

      ${windowLargerThan500px(css`
        font-size: 20px;
      `)}
    }

    button {
      cursor: pointer;
    }

    input {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0px;
      color: ${props => props.theme.colors.textColor};

      ${windowLargerThan500px(css`
        font-size: 20px;
      `)}
    }
    textarea {
      font-weight: normal;
      font-size: 16px;
      letter-spacing: 0px;
      color: ${props => props.theme.colors.textColor};

      ${windowLargerThan500px(css`
        font-size: 20px;
      `)}
    }

`;
