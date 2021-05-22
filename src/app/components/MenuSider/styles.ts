import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import { sizes } from 'styles/media';

export const StyledMenuSider = styled.section`
  background: ${theme.LAYOUT_HEADER_COLOR};
  background: #fff;

  width: 100%;
  border-radius: 5px;
  -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  .categoryTitle {
    padding: 1em 1em 0.6em 0em;
    font-weight: bold;
  }

  .iconCategory {
    width: 30px;
  }

  .titleCategory {
    margin-right: 2em;
  }

  .ant-layout-sider {
    background: ${theme.LAYOUT_HEADER_COLOR};
    background: #fff;

    border-radius: 5px;
    -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  }

  .hoverCategory {
    display: flex;
    color: #fff !important;
    background: red !important;
    position: relative;
    top: 0;
    right: 255px;
  }

  /* .menuSiderItem {
    &:hover {
      .hoverCategory {
        display: flex;
      }
    }
  } */

  @media (max-width: ${sizes.small}px) {
    min-width: 60px !important;
    .categoryTitle {
      display: none;
    }
  }
`;
