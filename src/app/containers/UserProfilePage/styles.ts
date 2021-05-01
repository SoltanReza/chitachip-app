import { ProductLayout } from 'app/components/ProductLayout';
import styled from 'styled-components/macro';

export const StyledUserProfilePage = styled(ProductLayout)`
  .cardUserProfile {
    margin: 0px 20px;
    /* border-radius: 2px;
    border: none;
    -webkit-box-shadow: 0px 0px 11px -3px rgb(0 0 0 / 75%);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgb(0 0 0 / 75%); */
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
`;
