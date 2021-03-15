import { Card } from 'antd';
import styled from 'styled-components/macro';
import { sizes } from 'styles/media';
import {theme} from 'styles/theme';

export const StyledTradingItem = styled(Card)`
  width: 100%;
  margin: 0.6em;
  height: 100%;
  position: relative;

  border: 1px solid #eee !important;
  background: rgb(24 144 255 / 11%);

  > button {
    z-index: 1;
  }
  .ant-card-body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    color: ${theme.TEXT_COLOR};

    .label {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.3em;
      flex: 1;
      width: 100%;
      font-size: 1.2em;

      b {
        font-size: 0.8em;
      }
    }
  }

  @media (min-width: ${sizes.medium}px) {
    width: 17em;
  }
`;
