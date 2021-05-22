import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import Logo from '../../image/Chitachip.svg';
import background from '../../image/back_img.png';
export const StyledNavbar = styled.section`
  .basket {
    &:hover {
      .basketItem {
        display: flex;
      }
    }
  }

  .logo {
    /* display: inline-block; */
    background-image: url(${Logo});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 150px;
    cursor: pointer;
  }

  .ant-input::placeholder {
    color: #000;
  }

  .searchStyle {
    width: 300px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background: none;
    > input {
      background: none;
    }
  }

  ul {
    margin: 0em 0em 0em 2em !important;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background: transparent;
  }
  li {
    float: right;
  }

  li a {
    display: block;
    color: #000;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background: transparent;
  }

  .active {
    background: transparent;
  }

  .searchBar {
    padding: 0.3em 0.7em;
  }
`;
