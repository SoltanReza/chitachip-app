import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import Logo from '../../image/Chitachip.svg';
import background from '../../image/back_img.png';
export const StyledNavbar = styled.section`
  &,
  .navCostum {
    background-size: cover;
    background-image: url(${background}) !important;
  }
  .logo {
    /* display: inline-block; */
    background-image: url(${Logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 150px;
    margin: -0.8em 0em 0em -2em;
    float: left;
    cursor: pointer;
  }

  .ant-input::placeholder {
    color: #000;
  }

  .searchStyle {
    width: 200px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background: none;
    > input {
      background: none;
    }
  }
`;
