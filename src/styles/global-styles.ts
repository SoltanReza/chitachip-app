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
const loadingStyles = css`
  #preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(45deg, #ffffff, #ffffff);
    z-index: 9999999;
  }

  #preloader #status {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  #preloader #status .spinner {
    width: 40px;
    height: 40px;
    position: relative;
    margin: 100px auto;
  }

  #preloader #status .spinner .double-bounce1,
  #preloader #status .spinner .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #2f55d4;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  #preloader #status .spinner .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  @-webkit-keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes sk-bounce {
    0%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes spinner-border {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinner-border {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border 0.75s linear infinite;
    animation: spinner-border 0.75s linear infinite;
  }
  .spinner-border-sm {
    width: 1rem;
    height: 1rem;
    border-width: 0.2em;
  }
  @-webkit-keyframes spinner-grow {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      opacity: 1;
    }
  }
  @keyframes spinner-grow {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    50% {
      opacity: 1;
    }
  }
  .spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    -webkit-animation: spinner-grow 0.75s linear infinite;
    animation: spinner-grow 0.75s linear infinite;
  }
  .spinner-grow-sm {
    width: 1rem;
    height: 1rem;
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
  ${loadingStyles};
`;
