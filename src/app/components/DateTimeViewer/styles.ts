import { Typography } from 'antd';
import styled from 'styled-components';
import { opacity } from 'styles';
import { theme } from 'styles/theme';

export const StyledDateTimeViewer = styled(Typography.Text)`
  code {
    background: red;
    color: ${theme.light};
    font-size: 0.9em;
    padding: 0.3em;
    border: 1px solid red;
    border-radius: 25px;
    background: red;
    color: #fff;
    font-weight: bold;
    padding: 0.2em 0.8em;

    span {
      direction: ltr;
    }
  }
`;
