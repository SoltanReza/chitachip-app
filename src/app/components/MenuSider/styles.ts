import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import { sizes } from 'styles/media';

export const StyledMenuSider = styled(Layout.Sider)`
  background: ${theme.LAYOUT_HEADER_COLOR};
  background: #fff;
  margin-right: 1em;
  min-width: 250px !important;
  border-radius: 5px;
  -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  .categoryTitle {
    padding: 1em 1em 0.6em 0em;
    font-weight: bold;
  }

  .iconCategory {
    margin-left: 2.3em;
  }

  .ant-layout-sider {
    background: ${theme.LAYOUT_HEADER_COLOR};
    background: #fff;
    margin-right: 1em;

    border-radius: 5px;
    -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  }

  @media (max-width: ${sizes.small}px) {
    min-width: 60px !important;
    .categoryTitle {
      display: none;
    }
  }
`;
