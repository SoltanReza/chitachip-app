import styled from 'styled-components/macro';

export const StyledOffer = styled.section`
  .styleCarousel {
    height: '160px' !important;
    color: '#fff' !important;
    line-height: '160px' !important;
    text-align: 'center' !important;
    background: '#364d79' !important;
  }
  .slide {
    display: flex;
    justify-content: space-between;
    overflow: auto;
    white-space: nowrap;
    padding-top: 0.5em;

    -webkit-box-shadow: 0px 0px 18px -8px rgb(0 0 0 / 75%);
    -moz-box-shadow: 0px 0px 18px -8px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 18px -8px rgb(0 0 0 / 75%);
  }
  .slideItem {
    display: inline-block;
    vertical-align: top;
    margin: 1em;
    white-space: normal;
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

    &:hover {
      .buyProduct {
        display: none;
      }
      .voteStyle {
        display: flex;
      }
    }
  }
  .imgProduct {
    background-size: contain;
    /* background-position: center; */
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

  .react-multi-carousel-list {
    direction: ltr !important;
  }

  .react-multi-carousel-track {
    direction: rtl !important;
  }

  .react-multi-carousel-item {
    margin: 1em 2em 2em 3em;
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
    margin-top: 0.7em;
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
`;
