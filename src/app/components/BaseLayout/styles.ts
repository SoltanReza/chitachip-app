import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';

import background from './image/back_img.png';
import { sizes } from 'styles/media';

export const StyledBaseLayout = styled(Layout)`
  min-height: 100vh;
`;

export const StyledMain = styled(Layout)`
  background-image: url(${background}) !important;
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
`;
export const StyledHeader = styled(Layout.Header)`
   .navCostum {
    /* background: ${theme.HEADER_BACKGROUND_COLOR}; */

    background-image: url(${background}) !important;

}

  background-image: url(${background}) !important;


  line-height: 79px;
  height: 90px;
  
`;
export const StyledContent = styled(Layout.Content)`

   min-height: 100vh;
  margin-right: 2em;
  /* margin-top: 6em; */
  /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
`;

export const StyledFooter = styled(Layout.Footer)`
  background: ${theme.LAYOUT_FOOTER_BACKGROUND};
`;
