import { Layout } from 'antd';
import styled from 'styled-components/macro';
import {theme} from 'styles/theme';

export const StyledSidebar = styled(Layout.Sider)`
  background: ${theme.HEADER_BACKGROUND_COLOR};

  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .userInfo {
    color: ${theme.TEXT_COLOR_INVERT};
    margin: 0.5em 0.5em;

    .userAvatar {
      display: flex;
      justify-content: flex-start;

      .avatar {
        margin-left: 0.2em;
      }
    }
    .title {
      display: flex;
      -webkit-box-align: center;
      margin-bottom: 0.1em;
      align-items: center;
    }
    .showCharge {
      padding: 8px 36px 8px 0;

      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      position: relative;
    }
    .stock {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 1em;

      .stockValue {
        font-size: 0.8em;
        b {
          color: ${theme.SECONDARY_COLOR};
          margin: 0 0.4em;
        }
      }
    }
    .stockAdd {
      font-size: 0.8em;
      height: 0;
    }
  }

  &.ant-layout-sider-collapsed {
    .userInfo {
      margin-bottom: 1.5em;
      &,
      .stock {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 0.1em;
      }

      .stockValue {
        font-size: 0.8em;
        text-align: center;

        b {
          display: block;
        }
      }

      .title {
        display: none;
      }
      .avatar {
        display: inline-block;
      }
    }
  }
`;
