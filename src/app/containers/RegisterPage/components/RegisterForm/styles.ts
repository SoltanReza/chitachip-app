import styled from 'styled-components/macro';
import {theme} from 'styles/theme';

export const StyledRegisterForm = styled.section`
  .form {
    position: absolute;
    top: 45%;
    left: 50%;
    margin: -160px 0 0 -160px;
    width: 320px;
    height: 340px;
    padding: 36px;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
    background-color: ${theme.LOGIN_FORM_BACKGROUND};

    button {
      width: 100%;
    }

    p {
      color: rgb(204, 204, 204);
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
    margin-bottom: 24px;
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

  .footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
`;
