import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import Logo from '../../../LazyImg/assets/logo.png';
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
    margin: 0.2em -2em 0em 2em;
    float: left;
    cursor: pointer;
  }

  
`;
