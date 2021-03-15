import styled from 'styled-components/macro';
import { sizes } from 'styles/media';

export const StyledFinalForm = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  align-content: center;
  margin-top: 2em;

  .login-form {
  }
  .card-form {
    text-align: center;
    font-size: 1.2em;
    @media (min-width: ${sizes.medium}px) {
      min-width: 32em;
      margin-top: 3em;
    }
  }
`;
