import 'antd/dist/antd.css';
import { createGlobalStyle, css } from 'styled-components';
import { darken } from 'styles';
import { theme } from './theme';

const initialProjectStyles = css`
  html,
  body,
  p,
  label,
  input,
  select {
    font-family: IRANSans, Helvetica, Arial, sans-serif;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    direction: rtl;
    text-align: right;
    font-size: 14px;
  }

  .ant-tooltip {
    max-width: 6em;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input {
    -webkit-user-select: text;
  }
`;
const btnGlobalStyles = css`
  .btn {
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .anticon {
      margin-right: 0.2em;
    }

    &.btn-secondary {
      :not(:disabled) {
        background: ${theme.SECONDARY_COLOR};
        color: #000;

        :hover,
        :focus {
          background: ${darken(theme.SECONDARY_COLOR)};
        }
      }
    }
  }
`;
const noSelectStyles = css`
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
const tableStyles = css`
  .tableOperations {
    display: flex;

    .ant-btn {
      margin: 0 0.1em;
    }
  }
`;
const notificationMessageStyles = css`
  .notificationMessage {
    .anticon-close-circle {
      float: right;
    }

    .messages {
      white-space: pre-line;
      text-align: start;
      display: block;
    }
  }
`;
const scrollStyles = css`
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #4f4c4c;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${initialProjectStyles};
  ${btnGlobalStyles};
  ${noSelectStyles};
  ${tableStyles};
  ${notificationMessageStyles};
  ${scrollStyles};
`;
