import styled from 'styled-components/macro';

export const StyledUserOrder = styled.section`
  .userOrderTitle {
    color: #ffb14d;
    font-size: 1.2em;
    font-weight: bold;
  }

  .userOrderDetaileTitle {
    margin-top: 1.5em;
    color: #ffb14d;
    font-size: 1.2em;
    font-weight: bold;
  }

  .userOrderDescription {
    color: #000;
    font-size: 0.8em;
    margin-top: 0.8em;
  }

  .orderTable {
    border-collapse: collapse;
    width: 100%;
    margin-top: 1em;
    border-radius: 8px;
    overflow: hidden;
  }

  .orderTable td,
  .orderTable th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  .orderTable tr:nth-child(even) {
    background-color: #f6f6f6;
  }

  .orderTable tr:hover {
    background-color: #ddd;
  }

  .orderTable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #cccccc;
    color: #000;
  }

  .action {
    display: flex;
    justify-content: space-evenly;
  }

  .actionView {
    background: radial-gradient(
      56.98% 186.2% at 15.71% 50%,
      #ffb14d 0%,
      #ffb14d 32.3%,
      #ffb14d 60.3%,
      #ffb14d 86.6%,
      #ffb14d 100%
    );
    border-radius: 20px !important;
    font-size: 0.8em;
    font-weight: bold;
    padding-right: 1em;
    color: #fff;
    padding: 0 2em;
  }

  .actionDelete {
    background: #df1e26;
    border-radius: 20px !important;
    font-size: 0.8em;
    font-weight: bold;
    padding-right: 1em;
    color: #fff;
  }

  .userOrderDetaileCard {
    background: #f6f6f6;
    border-radius: 9px;
    padding: 0;
    margin: 1em 0;

    .addressName {
      color: #000;
      font-weight: bold;
      font-size: 1.5em;
    }

    .reciverName {
      color: #000;
      font-weight: bold;
    }

    .addressTitle {
      color: #000;
      font-weight: bold;
    }

    .mobile {
      color: #000;
      font-weight: bold;
    }

    hr.solid {
      border-top: 3px solid #bbb;
      margin-bottom: 1em;
    }
  }

  .consignment {
    color: #000;
    font-weight: bold;
    font-size: 1.5em;
  }

  .sendType {
    color: #000;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 1.5em;
  }
  .orderTable.sendTypeTable {
    margin-top: 0.2em;
  }
`;
