import styled from 'styled-components/macro';
import { BaseLayout } from 'app/components/BaseLayout';
import { ProductLayout } from 'app/components/ProductLayout';

export const StyledProductListPage = styled(ProductLayout)`
  .categoryList,
  .filter {
    margin-top: 1em;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: -1px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 0px 5px 0px rgb(0 0 0 / 75%);
  }

  .titleCategoryItem {
    font-size: 1.8em;
    font-weight: bold;
    color: #000;
  }

  .breadcrumb {
    font-size: 0.8em;
    font-weight: bold;
  }

  .rowFilterAction {
    margin-top: 0.8em;
  }

  .checkboxFilter {
    > label {
      margin-left: 2em;
      font-size: 0.8em;
      font-weight: bold;
      color: #000;
    }
  }

  .radioFilter {
    font-size: 0.8em;
    font-weight: bold;
    color: #000;
  }

  .SwitchTitle {
    > div > label {
      font-size: 0.8em;
      font-weight: bold;
      color: #000;
    }
  }

  .colOfferCard {
    margin-top: 1em;
  }

  .rowOfferCard {
    margin-bottom: 1em;
  }

  .offerCard {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1em;
    border-radius: 6px;
    min-width: 100%;
    cursor: pointer;
    box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.73);
    -webkit-box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.73);
    -moz-box-shadow: 0px 1px 8px 2px rgba(0, 0, 0, 0.73);
    position: relative;
    height: 275px;

    /* &:hover {
      .buyProduct {
        display: none;
      }
      .voteStyle {
        display: flex;
      }
    } */
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

  .voteLike {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #9e9e9e;
    z-index: 9999;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #ff0000;
    font-size: 1.5em;
    font-weight: bold;
  }
  .voteLikeNone {
    display: none;
  }

  .voteStyle {
    display: none;
    flex-direction: row;
    justify-content: space-between !important;
    margin-top: 1.6em;
  }

  .count {
    color: #fff;
    background: #ff9800;
    border-radius: 15px;
    padding: 0px 0.5em 0px 0.5em;
  }

  .btnLogin {
  }

  .alertLogin {
    .ant-modal-close {
      background: red !important;
    }
  }

  .subTitle {
    color: #000;
    font-size: 1.5em;
    font-weight: bold;
    padding: 0.1em;
  }

  .subList {
    color: #000;
    font-size: 0.8em;
    font-weight: bold;
    padding-right: 0.5em;
    padding-bottom: 0.5em;
    cursor: pointer;
  }
`;