import styled from 'styled-components/macro';
import {theme} from 'styles/theme';

export const StyledLoginForm = styled.section`
  .form {
    position: absolute;
    top: 45%;
    left: 50%;
    margin: -160px 0 0 -160px;
    width: 320px;
    padding: 36px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
    background-color: ${theme.LOGIN_FORM_BACKGROUND};

    button {
      width: 100%;
    }
    .noRegister {
      margin-bottom: 24px;
      text-align: center;
    }
    .notifLogin {
      margin-top: 1em;
      margin-bottom: 1em;
    }

    p {
      text-align: center;
      margin-top: 16px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }

  .logo {
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
      margin-right: 8px;
    }

    span {
      vertical-align: text-bottom;
      font-size: 16px;
      text-transform: uppercase;
      display: inline-block;
      font-weight: 700;
    }
  }

  .textLink {
    color: ${theme.TEXT_COLOR_INVERT};
    margin-top: 1em;
  }

  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`;
