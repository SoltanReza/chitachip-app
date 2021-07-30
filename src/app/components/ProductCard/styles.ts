import styled from 'styled-components/macro';

export const StyledProductCard = styled.section`
  .offerCard {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 1em;
    border-radius: 6px;
    min-width: 100%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 275px;
    justify-content: space-between;
    &:hover {
      .buyProduct {
        display: none;
      }
      .voteStyle {
        display: flex;
      }
    }

    @media screen and (max-width: 640px) {
      .buyProduct {
        font-size: 0.9em;
      }
      .anticon {
        transform: scale(0.9);
      }
    }
  }

  .imgProductWrapper-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    .imgProduct {
      cursor: pointer;

      background-position: center;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .titleProduct {
    font-weight: bold;

    margin-bottom: 0.7em;
    cursor: pointer;
    @media screen and (max-width: 640px) {
      font-size: 0.9em;
    }
  }
  .buyProduct {
    display: flex;
    flex-direction: row;
    justify-content: space-between !important;
    align-items: center;
    margin-top: 0.5em;
  }
  .price {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 0.9em;
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
    font-size: 1em;
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
  .count-wrapper {
    border: 1px solid #ff9800;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: transparent;
    padding: 0.25em 0.3em;
    box-shadow: 0px 0px 4px #ffb14d;
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 1.2em;
    text-align: center;
    .icon {
      font-size: 0.9em;
      margin-top: -10px;
      cursor: pointer;
      color: #f2ab4f;
    }
    .text {
      margin-top: -7px;
      flex: none;
      padding: 0 2px;
      font-size: 0.9em;
    }
  }
`;
