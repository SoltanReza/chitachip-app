import styled from 'styled-components/macro';
import { sizes } from 'styles/media';

export const StyledProduct = styled.section`
  .cardProduct,
  .cardrelatedProduc,
  .cardTabProduct {
    margin: 20px 20px;
    border-radius: 7px;
    -webkit-box-shadow: 0px 0px 18px -8px rgb(0 0 0 / 75%);
    -moz-box-shadow: 0px 0px 18px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px -8px rgb(0 0 0 / 75%);
  }
  .cardrelatedProduc {
    padding: 2em;
  }
  .relatedProductTitle {
    font-size: 2em;
    font-weight: bold;
    color: #000;
    margin: 0 20px;
  }

  .productInfoCard {
    padding-left: 70px !important;
  }

  .productInfo {
    background: #f6f6f6;
    border-radius: 9px;
    max-height: 76.8%;
    overflow-y: auto;

    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.161);
  }

  .productInfoTitle {
    position: absolute;
    z-index: 5;
    font-weight: bold;
    font-size: 1.5em;
    color: #000;
    margin-bottom: 1em;
    padding: 10px 20px;
    background-color: #f6f6f6;
    width: 85%;
  }

  .properties {
    padding-top: 50px;
  }
  .priceInfoCard {
    background: #f6f6f6;
    border-radius: 9px;
    padding: 1em 0;
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

  .addToCardBtn,
  .addToFavorite,
  .Share {
    display: flex;
    justify-content: center;
    font-size: 0.8em;
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

  .imgProduct {
    max-width: 100%;
    max-height: 100%;
  }

  .productIconProperty {
  }

  .tab {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    /* border: 1px solid #ccc;
    background-color: #f1f1f1; */
  }

  .tab button {
    background-color: inherit;
    float: right;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 3px 13px;
    transition: 0.3s;
    font-weight: bolder;
    font-size: 0.9em;
    color: #000;
  }

  .tab button:hover {
    background-color: #666363;
    color: #fff;
    border-radius: 7px;
  }

  .tab button.active {
    background-color: #333333;
    color: #fff;
    border-radius: 7px;
  }

  .tabcontent {
    display: none;
    padding: 6px 12px;
    margin-top: 2em;
    /* border: 1px solid #ccc;
    border-top: none; */
  }

  .priceInfoTitle {
    font-weight: bold;
    font-size: 0.7em;
    color: #000;
  }

  .priceInfo {
    display: flex;
    justify-content: space-evenly;
    font-size: 1.2em;
    font: bold;
    color: #000;

    .discount {
      color: red;
    }
  }

  .showPrice {
    font-size: 1.2em;
    font: bold;
    color: #000;
    text-align: center;
  }

  @media (max-width: ${sizes.large}px) {
    .addToCardBtn,
    .addToFavorite,
    .Share {
      white-space: normal;
      height: auto;
      margin-bottom: 10px;
    }
    .productInfoCard {
      padding-left: 0px !important;
    }
  }

  .gallery-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;
