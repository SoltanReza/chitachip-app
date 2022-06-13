import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import { sizes } from 'styles/media';

export const StyledCategorySider = styled.section`
  background: ${theme.LAYOUT_HEADER_COLOR};
  background: #fff;
  width: 100%;
  border-radius: 5px;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
  max-height: 235px;
  .categoryTitle {
    padding: 1em 1em 0.6em 0em;
    font-weight: bold;
  }

  .iconCategory {
    width: 20px;
  }

  .rowCategory {
    display: flex;
    align-items: center;
    margin-bottom: 1em !important;
    list-style-type: none;
    padding: 0.2em 0.3em;

    margin: 0 0.3em;

    &:hover {
      .hoverCategory {
        display: inline;
      }
      background: rgba(249, 174, 59, 0.5);
    }
  }

  .ulCategotry {
    padding-right: 0.5em;
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
    border-radius: 5px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    max-height: 250px;
    height: 100%;
    overflow-y: auto;
    margin-top: -2em;
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

  .colCategoryList {
    padding: 1em;
  }
  .colCategoryList:hover {
    padding: 1em;
    background: #fff;
    border-radius: 8px;
    -webkit-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.75);
  }

  .activeCategory {
    padding: 0 0.3em;
    margin-bottom: 1em !important;
    background: black;
    color: white;
    margin: 0 0.3em;
    border-radius: 7px;
    .titleCategory {
      color: #9e9e9e;
      font-weight: bold;
    }
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
