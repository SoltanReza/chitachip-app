import styled from 'styled-components/macro';

export const StyledUnitCarouselRight = styled.section`
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
    max-width: 80%;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    height: 150px;
  }

  .imgProduct {
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .titleProduct {
    font-weight: bold;
    margin-top: 0.7em;
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

  .btnLogin {
  }

  .alertLogin {
    .ant-modal-close {
      background: red !important;
    }
  }

  .swiper-button-next {
    color: #000;
    margin-left: 0.5em;
    left: 1px !important;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2)) !important;
  }

  .swiper-button-prev {
    color: #000;
    margin-right: 0.5em;
    right: 1px !important;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2)) !important;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 17px;
    padding: 0.4em;
    font-weight: bold;
  }
`;
