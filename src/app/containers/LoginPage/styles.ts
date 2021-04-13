import { Form } from 'antd';
import { ProductLayout } from 'app/components/ProductLayout';
import styled from 'styled-components/macro';
import { sizes } from 'styles/media';
import { theme } from 'styles/theme';

export const StyledLoginPage = styled(ProductLayout)``;

export const StyledLoginForm = styled(Form)`
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
