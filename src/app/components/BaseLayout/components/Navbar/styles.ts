import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import Logo from '../../image/Chitachip.svg';
import background from '../../image/back_img.png';

interface HeaderProps {
  black?: boolean;
}

export const SearchDataWrapper = styled.div`
  background-color: white;
  height: 400px;
  width: 600px;
  position: absolute;
  top: 50px;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.061);
  padding: 15px;
  display: flex;
  flex-direction: column;
  .item-wrapper {
    border-bottom: solid 1px #c7c7c7;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .img-wrapper {
      width: 100px;
      img {
        width: 100%;
      }
    }
    .info-wrapper {
      display: flex;
      align-items: center;

      .icons-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: right;
        padding-right: 10px;
      }
    }
  }
`;

export const StyledNavbar = styled.section<HeaderProps>`
  padding: 0px !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* .navCostum {
    background-size: cover;
  } */
  background: ${props => (props.black ? 'rgba(0,0,0,0.85)' : 'transparent')};
  background-size: cover;
  height: 55px;
  position: sticky;
  top: 0;
  z-index: 10;
  color: ${props => (props.black ? 'white' : 'black')};

  .basket {
    &:hover {
      .basketItem {
        display: flex;
      }
    }
  }

  .logo {
    margin-left: 2em;
    background-image: url(${Logo});
    -webkit-filter: ${props => (props.black ? 'invert(100%)' : null)};
    filter: ${props => (props.black ? ' invert(100%)' : null)};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 80px;
    width: 105px;
    cursor: pointer;
  }

  .ant-input {
    color: ${props => (props.black ? 'white' : 'black')};
    &::placeholder {
      color: ${props => (props.black ? 'white' : 'black')};
    }
  }
  .searchStyle {
    width: 500px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid ${props => (props.black ? 'white' : 'black')};
    background: none;
    color: black;
    > input {
      background: none;
      text-align: right;
    }
  }

  .ant-input-search-rtl .ant-input-search-icon::after {
    border-right: none;
  }

  .ant-input-search-icon {
    svg {
      fill: ${props => (props.black ? 'white' : 'black')};
    }
  }

  ul {
    display: flex;
    align-items: center;
    list-style-type: none;
    overflow: hidden;
    background: transparent;
    margin: 0;
  }

  li a {
    color: ${props => (props.black ? 'white' : 'black')};
    text-align: center;
    padding: 0 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background: transparent;
  }

  .active {
    background: transparent;
  }

  .searchBar {
    /* padding: 0.3em e; */
  }
`;
