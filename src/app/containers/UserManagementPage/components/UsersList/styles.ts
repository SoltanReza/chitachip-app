import styled from 'styled-components/macro';
import { sizes } from 'styles/media';

export const StyledUsersList = styled.section`
  .buttons {
    display: flex;
    flex-direction: column;

    .ant-btn {
      margin: 0.2em;
    }
  }
  @media (min-width: ${sizes.medium}px) {
    .buttons {
      flex-direction: row;
    }
  }
`;
