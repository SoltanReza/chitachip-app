import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';

import background from './image/back_img.png';
import { sizes } from 'styles/media';

export const StyledBaseLayout = styled(Layout)`
  min-height: 100vh;
  background-image: url(${background}) !important;
  background-size: contain;
  background-repeat: round;
`;

export const StyledMain = styled(Layout)`
  background-size: contain;
  background: transparent;
  .menuSiderItem {
    &:hover {
      .menuSiderItemHover {
        display: inline-flex;
        position: absolute;
        right: 20em;
      }
    }
  }

  .menuSiderItemHover {
    display: none;
  }

  .contactUs {
    flex-wrap: nowrap;
    display: flex;
    position: relative;
    right: 13px;
    top: 9px;
    > div {
      margin-left: 0.5em;
    }
  }
  .socialMedia {
    line-height: 1em;
  }
  .online {
    background: #ff9800;
    padding: 0.2em 0.4em;
    color: #fff;
    border-radius: 10px;
    font-size: 0.8em;
    > span {
      margin-right: 0.2em;
    }
  }

  .sticky {
    position: sticky;
    top: 0;
    z-index: 100; /* this is optional and should be different for every project */
  }
  .sticky-wrapper {
    position: relative;
    height: 3rem; /* We need to change this value */
  }

  .sticky .sticky-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;
export const StyledHeader = styled(Layout.Header)`
  padding: 0px !important;
  /* .navCostum {
    background-size: cover;
  } */
  background: transparent;
  background-size: cover;
  line-height: 79px;
  height: 90px;
`;
export const StyledContent = styled(Layout.Content)`

   min-height: 100vh;
  margin:0em  1.5em;
  /* margin-top: 6em; */
  /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
`;

export const StyledFooter = styled(Layout.Footer)`
  background: ${theme.LAYOUT_FOOTER_BACKGROUND};
`;
