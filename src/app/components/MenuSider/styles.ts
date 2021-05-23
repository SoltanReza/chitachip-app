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
    width: 20px;
  }

  .rowCategory {
    margin-bottom: 1em;
    list-style-type: none;
    &:hover {
      .hoverCategory {
        display: inline;
      }
    }
  }

  .ulCategotry {
    padding-right: 1.5em;
  }
  .titleCategory {
    margin-right: 1em;
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
    display: none;
    position: absolute;
    right: calc(100% - 7px);
    background: #fff;
    z-index: 333;
    width: 150%;
    padding: 1em;
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    max-height: 200px;
    height: 100%;
    overflow-y: auto;

    -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  }

  .colCategoryList {
    display: flex;
    flex-direction: column;
  }

  .imgCategoryList {
    width: 60px;
    height: 50px;
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
