import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import Logo from '../BaseLayout/image/Chitachip.svg';
import background from '../BaseLayout/image/back_img.png';

export const StyledProductLayout = styled.section`
  background-size: contain;
  background: #f9f9f9;
`;

export const StyledHeader = styled(Layout.Header)`
  /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
  background-size: cover;
  background:transparent;
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

  margin: 0em 1.5em;
`;
