import styled from 'styled-components/macro';

export const StyledBasketItem = styled.section`
  margin: 0px 20px;

  .basketList {
    margin-left: 1em;

    border-radius: 10px;
  }
  .basketItem {
    margin-bottom: 1em;
  }

  .actionItem {
  }

  .basketItemCard {
    border-radius: 3px;
    -webkit-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
  }

  .basketItemAction {
    background: #ece8e8;
    border-radius: 3px;
    -webkit-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
  }

  .imgProduct {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100px;
    width: 100px;
  }

  .buyProduct {
    display: flex;
    flex-direction: row;
    justify-content: flex-end !important;
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

  .titleProduct {
    margin-bottom: 3em;
  }

  .ant-card {
    border-radius: 3px;
    -webkit-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 11px -3px rgba(0, 0, 0, 0.75);
  }

  .leftItem {
    text-align: left;
  }

  .continueBuy {
    margin-top: 4em;
    justify-content: center;
  }

  .finlaPay {
    justify-content: center;
  }

  .finlaPayBtn {
    margin-top: 0.5em;
    background: #fd9803;
    border-radius: 10px;
    color: #fff;
  }

  .continueBuyBtn {
    background: #7f8283;
    border-radius: 10px;
    color: #fff;
  }

  .cardListProduct {
    margin-bottom: 1em;
  }

  .quantity {
    color: #fff;
    background: #ff9800;
    padding: 0.2em 0.8em 0.2em 0.8em;
    border-radius: 7px;
  }
`;
