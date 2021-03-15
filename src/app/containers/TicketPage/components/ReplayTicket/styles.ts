import { Modal } from 'antd';
import styled from 'styled-components/macro';

export const StyledReplayTicket = styled(Modal)`
  .cardDetails {
    margin-bottom: 2em;
    border: none;
  }
  .ant-card-body {
    display: none;
  }
  .ticket {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    margin-bottom: 1em;
  }
  .ticketBody {
  }
  .ticketDate {
    white-space: nowrap;
  }
`;
