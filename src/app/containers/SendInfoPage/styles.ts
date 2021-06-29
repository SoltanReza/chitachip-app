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
    margin-bottom: 1em;
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
  .clickable {
    cursor: pointer;
    font-size: 0.9em;
  }
  .userAddressDetaileCard {
    background: #f6f6f6;
    border-radius: 9px;
    padding: 0;
    margin: 1em 0;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    .userAdressItem {
      border-bottom: 1px solid #707070;
    }

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

  .timeDateCard {
    background: #f6f6f6;
    border-radius: 9px;
    padding: 0;
    margin: 1em 0;
    .ant-card-body {
      padding: 0;
    }
    .timeDateRow {
      text-align: center;
    }
    .timeDateCol {
      border-left: 1px solid;
      font-size: 1.2em;
      font-weight: bold;
      padding: 1em;
      color: #000;
      cursor: pointer;
    }
    .timeDateColSelected {
      font-size: 1.2em;
      font-weight: bold;
      padding: 1em;
      color: #000;
      background: #fff;
      border: 1px solid #ffb14d;
      border-radius: 5px;
      cursor: pointer;
      -webkit-box-shadow: 0px 0px 14px 0px rgb(55 50 50 / 44%);
      -moz-box-shadow: 0px 0px 14px 0px rgba(55, 50, 50, 0.44);
      box-shadow: 0px 0px 14px 0px rgb(55 50 50 / 44%);
    }

    .timeDateCol:last-child {
      border-left: none;
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
    text-align: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    border-radius: 15px;
    font-size: 0.9em;
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
    background: #f6f6f6;
    border-radius: 9px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
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

  .role {
    display: flex;
  }

  .roleTitle {
    color: #ffb14d !important;
    font-size: 0.8em;
    font-weight: bold;
    cursor: pointer;
    margin-right: 0.3em;
  }

  .offerCard {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1em;
    border-radius: 6px;
    min-width: 100%;
    cursor: pointer;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
    position: relative;
    height: 275px;
  }

  .imgProductWrapper {
    display: flex;
    justify-content: center;
    height: 130px;
  }

  .imgProduct {
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .titleProduct {
    font-weight: bold;
    margin-bottom: 0.7em;
  }
  .buyProduct {
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    margin-top: 0.7em;
  }
  .price {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  .priceBtn {
    display: flex;
    flex-direction: revert;
    justify-content: space-between;
  }
  .iconeShop {
    margin-left: 0.2em;
  }
  .discountBtn {
    border-radius: 11px;
    background: #ff9800;
  }

  .priceStyle {
    display: flex;
    flex-direction: column;
  }

  .currency {
    font-size: 0.6em;
    line-height: 2.5em;
  }

  .discount {
    margin-left: 1em;
    color: red;
    font-weight: bold;
  }

  .priceDiscount {
    font-size: 0.8em;
    line-height: 1.9em;
  }
`;
