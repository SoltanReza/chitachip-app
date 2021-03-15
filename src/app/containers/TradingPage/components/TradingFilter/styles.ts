import styled from 'styled-components/macro';
import {theme} from 'styles/theme';

export const StyledTradingFilter = styled.section`
  display: flex;
  justify-content: center;
  margin: 0.5em;
  background: ${theme.LAYOUT_HEADER_BACKGROUND};
  padding: 0.7em;

  .ant-form-horizontal {
    &,
    .btn {
      width: 100%;
    }
  }
`;
