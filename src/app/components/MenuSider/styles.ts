import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import { sizes } from 'styles/media';

export const StyledMenuSider = styled.section`
  background: ${theme.LAYOUT_HEADER_COLOR};
  background: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
  &.collapsed {
    overflow: hidden;
  }
  h3 {
    cursor: pointer;
  }
  .categoryTitle {
    padding: 1em 1em 0.6em 0em;
    font-weight: bold;
    color: black;
  }

  .iconCategory {
    width: 20px;
  }

  .rowCategory {
    cursor: pointer;
    margin-bottom: 1em;
    list-style-type: none;
    &:hover {
      .hoverCategory {
        display: inline;
      }
      .rowCategoryItem {
        background: #f9ae3b !important;
        padding: 0.5em;
        opacity: 0.5;
      }
      .titleCategory {
        color: #000 !important;
      }
    }
  }
  .rowCategoryItem {
    padding: 0.5em;
  }

  .ulCategotry {
    padding-right: 1.5em;
  }
  .titleCategory {
    margin-right: 1em;
    color: #000;
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
    border: solid 1px #f2ab4f;
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    max-height: 250px;
    height: 110%;
    overflow-y: auto;
    margin-top: -2.78em;
    -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  }

  .colCategoryList {
    margin-bottom: 1em;
  }

  .imgCategoryList {
    width: 80px;
    height: 80px;
  }

  .rowImgCategoryList {
    display: flex;
    justify-content: center;
  }

  .colCategoryList:hover {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.161);
  }

  .subCategoryListTitle {
    display: flex;
    justify-content: center;
    color: #000;
    font-weight: bold;
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
