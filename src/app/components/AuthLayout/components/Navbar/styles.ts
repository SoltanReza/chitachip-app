import styled from 'styled-components/macro';
import {theme} from 'styles/theme';
import Logo from '../../../LazyImg/assets/logo.png';
export const StyledNavbar = styled.section`
  &,
  .navbarMenu {
    background: ${theme.LAYOUT_HEADER_BACKGROUND};
    color: ${theme.LAYOUT_HEADER_COLOR};
    font-size: 1.2em;
  }
  .logo {
    /* display: inline-block; */
    background-image: url(${Logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 74px;
    width: 60px;
    margin: 0.2em -2em 0em 2em;
    float: right;
  }
`;
