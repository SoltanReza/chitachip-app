import styled from 'styled-components/macro';
import {theme} from 'styles/theme';
export const StyledNavbar = styled.section`
  &,
  .navbarMenu {
    background: ${theme.LAYOUT_HEADER_BACKGROUND};
    color: ${theme.LAYOUT_HEADER_COLOR};
    font-size: 1.1em;
  }
  .logo {
    height: 68px;
    margin-top: -0.5em;
    float: left;
    display: flex;
    margin-left: -3em;

    Button {
      margin-top: 0.9em;
    }
  }
  .ant-btn-link {
    color: ${theme.TEXT_COLOR_INVERT};
  }
`;
