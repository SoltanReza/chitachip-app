import styled from 'styled-components/macro';

export const StyledUserAddress = styled.section`
  .userAddressTitle {
    color: #ffb14d !important;
    font-size: 1.2em;
    font-weight: bold;
  }

  .userAddressDescription {
    margin-top: 1.5em;
    color: #000 !important;
    font-size: 1em;
    text-align: justify;
  }

  .userAddressAdd {
    margin-top: 0.5em;
    color: #ffb14d !important;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;
  }

  .userAddressAddIcon {
    font-size: 1.3em;
    font-weight: bolder;
    margin-left: 0.2em;
  }

  .userAddressDetaileCard {
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

    .updateBtn {
      color: #fff;
      background: #ffb14d;
      border-radius: 15px;
      font-size: 0.8em;
      font-weight: bolder;
    }

    .deleteBtn {
      color: #fff;
      background: #ed1c24;
      border-radius: 15px;
      margin-right: 1em;
      font-size: 0.8em;
      font-weight: bolder;
    }
  }
`;
