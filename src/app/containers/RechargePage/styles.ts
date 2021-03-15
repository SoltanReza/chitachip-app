import { AdminLayout } from 'app/components/AdminLayout';
import styled from 'styled-components/macro';
import { sizes } from 'styles/media';

export const StyledRechargePage = styled(AdminLayout)`
  .ant-tabs {
    max-width: ${sizes.small}px;
    margin: auto;
  }
`;
