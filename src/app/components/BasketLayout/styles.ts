import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import Logo from '../BaseLayout/image/Chitachip.svg';
import background from '../BaseLayout/image/back_img.png';
import { BaseLayout } from '../BaseLayout';

export const StyledBasketLayout = styled(BaseLayout)`
  background-size: contain;
  background-image: url(${background}) !important;
`;

export const StyledHeader = styled(Layout.Header)`
  background: transparent;
  background-size: cover;
  line-height: 79px;
  height: 90px;
  .logo {
    /* display: inline-block; */
    background-image: url(${Logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 150px;
    margin: 0.2em -2em 0em 2em;
    float: left;
  }
`;
export const StyledContent = styled(Layout.Content)`
  min-height: 100vh;
  background-size: contain;
  background: transparent;
  margin-top: 1.5em;
`;
