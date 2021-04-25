import styled from 'styled-components/macro';
import { BaseLayout } from 'app/components/BaseLayout';
import { theme } from 'styles/theme';

export const StyledResetPasswordPage = styled(BaseLayout)`
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

    .inputLoginStyle {
      border-top: none;
      border-left: none;
      border-right: none;
      border-color: #000;
    }

    .btnDir {
      direction: ltr;
    }

    .actionPass {
      display: flex;
      justify-content: space-between;
    }

    .btnLogin {
      background: #ff9800;
      border-color: #ff9800;
      border-radius: 20px;
      padding: 0 2em 0 2em;
    }

    .titleLogin {
      margin: 1.65em 0 1.5em 0;
      font-size: 2em;
      font-weight: bold;
      color: #000;
    }

    .descPassowrd {
      margin-bottom: 1em;
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
      width: 130px;
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
    margin-top: 2em;
    direction: ltr;
  }
`;
