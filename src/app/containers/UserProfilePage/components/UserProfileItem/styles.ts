import styled from 'styled-components/macro';

export const StyledUserProfileItem = styled.section`
  .profileTitleItem {
    border-radius: 5px !important;
    border: none;
    -webkit-box-shadow: 0px 0px 11px -3px rgb(0 0 0 / 75%);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgb(0 0 0 / 75%);
  }

  .profileContentItem {
    border-radius: 5px !important;
    border: none;
    -webkit-box-shadow: 0px 0px 11px -3px rgb(0 0 0 / 75%);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgb(0 0 0 / 75%);
  }

  .profileIcon {
    margin-left: 1.5em;
    width: 10%;
  }

  .profileTitleText {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5em;
    color: #000;
    margin-bottom: 0.7em;
  }
  .activeItem {
    color: #fd9803 !important;
  }

  .btnLogout {
    background: red;
    color: #fff;
    border-radius: 50px;
    margin-top: 3em;
  }

  .logout {
    text-align: right;
    margin-right: 1.3em;
    > span {
      color: red;
      font-size: 1.6em;
      font-weight: bold;
    }
  }

  .anticon.anticon-login {
    text-align: center;
  }

  .ant-card-actions {
    border: none !important;
    background: #fff !important;
  }
`;
