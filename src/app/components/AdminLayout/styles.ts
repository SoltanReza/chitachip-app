import { Layout } from 'antd';
import styled from 'styled-components/macro';
import {theme} from 'styles/theme';

export const StyledAdminLayout = styled(Layout)``;
export const StyledMainLayout = styled(Layout)``;

export const StyledHeader = styled(Layout.Header)`
  background: ${theme.HEADER_BACKGROUND_COLOR};
  line-height: 67px;
  height: 68px;
`;

export const StyledContent = styled(Layout.Content)`
  min-height: 100vh;
  margin: 0.5em;
`;

export const StyledFooter = styled(Layout.Footer)`
  background: ${theme.LAYOUT_FOOTER_BACKGROUND};
`;
