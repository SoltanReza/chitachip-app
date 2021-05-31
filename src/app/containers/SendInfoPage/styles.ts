import { BasketLayout } from 'app/components/BasketLayout';
import styled from 'styled-components/macro';

export const StyledSendInfoPage = styled(BasketLayout)`
  .cardInfo,
  .cardrelatedProduc,
  .cardTabProduct {
    margin: 30px 30px;
    border-radius: 7px;
    -webkit-box-shadow: 0px 0px 18px -8px rgb(0 0 0 / 75%);
    -moz-box-shadow: 0px 0px 18px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px -8px rgb(0 0 0 / 75%);
  }

  .cardInfoTitle {
    color: #000;
    font-weight: bold;
    font-size: 1.2em;
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
  }

  .selected,
  .moreVeiw {
    color: #ffb14d !important;
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    line-height: 5em;
  }

  .moreBtnSelectAddress {
    color: #ffb14d !important;
    font-size: 1.1em;
    font-weight: bold;
    text-align: left;
    line-height: 5em;
  }

  .selectBtn {
    color: #fff;
    background: #ffb14d;
    border-radius: 15px;
    font-size: 1em;
    font-weight: bolder;
    width: 106px;
  }

  .moreBtnAddressCol {
    color: #ffb14d !important;
    font-size: 1.1em;
    font-weight: bold;
    text-align: left;
    padding-left: 5.8em;
  }

  .productInfo {
    background: #ece8e8;
    border-radius: 9px;
    -webkit-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
  }

  .productTitle {
    display: flex;
    justify-content: center;
  }

  .productAlert {
    margin-top: 1em;
  }

  .alertText {
    color: red;
  }

  .addToCardBtn {
    background-image: linear-gradient(
      to right,
      #ffb14d,
      #fbaf4d,
      #f0aa4e,
      #dea151,
      #d29b53
    );

    border-radius: 10px;
    color: #fff;
    margin-bottom: 10px;
  }
  .addToFavorite {
    background-image: linear-gradient(
      to right,
      #ed1c24,
      #e91c24,
      #de1f26,
      #cd232a,
      #c1272d
    );
    border-radius: 10px;
    color: #fff;
    margin-bottom: 10px;
  }
  .Share {
    background: #a8a8a8;
    border-radius: 10px;
    color: #fff;
    margin-bottom: 10px;
  }

  .actionBtn {
    margin-top: 3em;
    padding: 0 1em;
  }

  .price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5em;
  }

  .priceTitleDiv {
    color: #000;
    font-size: 0.9em;
  }
  .priceCurrencyDiv {
    color: #000;
    font-size: 0.7em;
  }
`;
