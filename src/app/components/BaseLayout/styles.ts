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
  position: relative;
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
`;
export const StyledHeader = styled(Layout.Header)``;
export const StyledContent = styled(Layout.Content)`

   min-height: 100vh;
  margin:0em  1.5em;
  /* margin-top: 6em; */
  /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
`;

export const StyledFooter = styled(Layout.Footer)`
  background: ${theme.LAYOUT_FOOTER_BACKGROUND};
`;
