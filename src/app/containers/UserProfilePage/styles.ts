import { ProductLayout } from 'app/components/ProductLayout';
import styled from 'styled-components/macro';

export const StyledUserProfilePage = styled(ProductLayout)`
  .cardUserProfile {
    margin: 0px 20px;
  }

  .titleCardProfile {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
  }

  .profileName {
    margin-right: 1em;
    font-weight: bold;
    font-size: 2em;
    color: #000;
  }

  .btnLogout {
    background: red;
    color: #fff;
    border-radius: 50px;
  }
`;
