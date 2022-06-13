import styled from 'styled-components/macro';

export const StyledUserProfileItem = styled.section`
  .profileTitleItem {
    border-radius: 10px !important;
    border: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  }

  .profileContentItem {
    border-radius: 10px !important;
    border: none;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  }

  .profileIcon {
    margin-left: 1.5em;
    width: 10%;
  }

  .profileTitleText {
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2em;
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
    margin-right: -0.3em;
    cursor: pointer;
    > span {
      color: red;
      font-size: 1.2em;
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
