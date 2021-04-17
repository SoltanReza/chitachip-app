import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import Logo from '../../image/Chitachip.svg';
export const StyledNavbar = styled.section`
  &,
 
  .navCostum {
    /* background: ${theme.HEADER_BACKGROUND_COLOR}; */
    background: repeating-linear-gradient( 
45deg
,#ffffff,#ffffff 10px,#fdfdfd 10px,#ffffff 20px );
}
.logo {
    /* display: inline-block; */
    background-image: url(${Logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
    margin: -0.8em 0em 0em -2em;
    float: left;
    cursor: pointer;
  }


  .ant-input::placeholder {
    color:#000;
}

  .searchStyle{
    width: 200px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background: none;
    > input{
      background: none;
    }
  }
`;
