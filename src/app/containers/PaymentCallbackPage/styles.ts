import styled from 'styled-components/macro';
import { BaseLayout } from 'app/components/BaseLayout';

export const StyledPaymentCallbackPage = styled.section`
  .rightBodyBillWrapper {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .rightBodyBill {
    display: flex;
    flex-direction: column;
  }
  .rightBodyBillLogo {
  }
  .rightBodyBillcontactus {
  }

  .leftBodyBill {
    color: #000;
    padding: 1.5em;
  }

  .billTitle {
    font-size: 1.5em;
    font-weight: bold;
    > p {
      margin-bottom: 0 !important;
    }
  }

  .billDate {
    font-size: 0.5em;
    margin-top: 1.5em;
  }

  .customerDescription {
    margin-top: 2em;
  }

  .BuyerDescription {
    margin-top: 2em;
  }

  .billTable {
    font-size: 0.7em;
    margin-top: 2em;
  }

  .billTableHeader {
    background: #adaaaa;
    font-size: 0.5em;
    margin-top: 2.5em;
    margin-left: 0.3em;
    padding: 0.5em 1em 2em 1em;
  }

  .billTableBody {
    background: #dcd7d7;
    font-size: 0.5em;
    margin-left: 0.3em;

    padding: 0.5em 1em 2em 1em;
  }

  .billPrice {
    font-size: 0.5em;
    margin-top: 0.9em;
    > span {
      margin-left: 1em;
    }
  }

  .billPriceSum {
    margin-top: 0.9em;
    font-size: 0.7em;
    font-weight: bold;
  }

  .billSendType {
    font-size: 1em;
    font-weight: bold;
  }

  .billFooter {
    font-size: 0.5em;
    font-weight: bold;
    margin-top: 0.9em;
  }

  .billPriceTitle {
    margin-top: 2em;
  }
`;
