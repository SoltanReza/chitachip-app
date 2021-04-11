import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import Logo from '../BaseLayout/image/Chitachip.svg';

export const StyledProductLayout = styled.section``;

export const StyledHeader = styled(Layout.Header)`
  /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
  background: repeating-linear-gradient( 
45deg
,#ffffff,#ffffff 10px,#fdfdfd 10px,#ffffff 20px );

  line-height: 79px;
  height: 90px;
  .logo {
    /* display: inline-block; */
    background-image: url(${Logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
    margin: 0.2em -2em 0em 2em;
    float: left;
  }
`;
export const StyledContent = styled(Layout.Content)`
  margin-top: 1.5em;
`;
