import { Form } from 'antd';
import { ProductLayout } from 'app/components/ProductLayout';
import styled from 'styled-components/macro';
import { sizes } from 'styles/media';
import { theme } from 'styles/theme';

export const StyledRegisterPage = styled.section`
  background-image: url('/assest/back_img.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;

  .recaptcha {
    margin-top: 2em !important;
  }
  .form {
    /* position: absolute;
    top: 45%;
    left: 50%;
    margin: -160px 0 0 -160px; */
    width: 30%;
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

  @media (max-width: ${sizes.small}px) {
    .form {
      width: 96%;
    }
  }
`;
export const StyledRegisterForm = styled(Form)`
  padding: 30px;
  background-color: rgba(45, 105, 144, 0.4);
  box-shadow: 0 0 30px #1b3f56;
  border-radius: 1.5em;
  width: 40em;
  max-width: 95%;
  margin: auto;

  .goToRegister {
    margin-top: 1em;
    cursor: pointer;
    color: ${theme.REGISTER_COLOR};
    font-weight: bold;
  }

  .container {
    background-color: ${theme.light};
    padding: 2em;
    border-radius: 0.5em;

    .header {
      position: relative;
      color: rgba(0, 0, 0, 0.54);
      margin-bottom: 3em;

      .title {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.334em;
      }

      .description {
        font-size: 1rem;
        opacity: 0.7;
      }

      .logo {
        position: absolute;
        background: url('assets/images/logo.png');
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        width: 3em;
        height: 3em;
        top: 1em;
        left: 1em;
      }
    }
  }

  @media (max-width: ${sizes.small}px) {
    padding: 1em;
  }

  @media (max-height: ${sizes.small}px) {
    padding: 0em;
  }
`;
