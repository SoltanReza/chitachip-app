import styled from 'styled-components/macro';
import { Layout } from 'antd';
import { theme } from 'styles/theme';
import Logo from './image/Chitachip.svg';
import background from './image/background.png';

export const StyledBaseLayout = styled(Layout)`
  min-height: 100vh;
   
  .contactUs{
    flex-wrap: nowrap;
    display: flex;
    position: absolute;
    bottom: 73px;
    right: 15px;
    >div{
      margin-left:0.5em;
    }
  }
  .socialMedia{
    line-height:1em;
  }
  .online{
    background: #ff9800;
    padding: .2em 0.4em;
    color: #fff;
    border-radius: 10px;
    font-size: .8em;
    >span{
     margin-right: .2em;
    }
  }
  .navCostum {
    /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
    background: repeating-linear-gradient( 
45deg
,#ffffff,#ffffff 10px,#ebebeb 10px,#ffffff 20px );
}
  .ant-layout {
    background-image: url(${background});
    /* background: ${theme.HEADER_BACKGROUND_COLOR} !important; */
    background: repeating-linear-gradient( 
45deg
,#ffffff,#ffffff 10px,#ebebeb 10px,#ffffff 20px );
}

  .ant-layout-sider {
    background: ${theme.LAYOUT_HEADER_COLOR};
    background: #fff;
    margin-right: 1em;

    border-radius: 5px;
    -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  }
`;

export const StyledHeader = styled(Layout.Header)`
  /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
  background: repeating-linear-gradient( 
45deg
,#ffffff,#ffffff 10px,#ebebeb 10px,#ffffff 20px );


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

   min-height: 100vh;
  margin-right: 2em;
  /* margin-top: 6em; */
  /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
`;

export const StyledFooter = styled(Layout.Footer)`
  background: ${theme.LAYOUT_FOOTER_BACKGROUND};
`;
