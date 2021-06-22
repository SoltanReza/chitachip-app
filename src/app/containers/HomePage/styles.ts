import { BaseLayout } from 'app/components/BaseLayout';
import styled from 'styled-components/macro';
import { sizes } from 'styles/media';

export const StyledHomePage = styled(BaseLayout)`
  .styleCarousel {
    height: '160px' !important;
    color: '#fff' !important;
    line-height: '160px' !important;
    text-align: 'center' !important;
    background: '#364d79' !important;
  }

  .swiper-container {
    padding: 1em 1em 1em 1em !important;
  }

  .divStory {
    width: 70px;
    height: 70px;
    border: 2px solid #fbaf4d;
    border-radius: 44px;
    background: gray;
  }
  .imgStory {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 50%;
  }

  .rightBanner {
    height: 214px;
  }

  .rightBannerImg {
    width: 100%;
    height: 100%;
    border-radius: 7px;
  }

  .rightContactUs {
    text-align: center;
    font-weight: bold;
  }

  .newsInputStyle {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background: none;
    > input {
      background: none;
    }
  }

  .rowWrraperRight {
    margin-top: 1.5em;
  }

  .titleBannerLeft {
    font-size: 2.7em;
    font-weight: bold;
  }

  .sliceCard {
    border-radius: 14px;
  }
  .sliceCardImg {
    object-fit: fill;
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }

  .thirdBanner {
    width: fit-content;
    padding: 9px;
    margin-bottom: 1em;
    block-size: fit-content;
    font-size: 3em;
    color: #fff;
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

    &:hover {
      .buyProduct {
        display: none;
      }
      .voteStyle {
        display: flex;
      }
    }
  }

  .imgProductWrapper {
    display: flex;
    justify-content: center;
    height: 120px;
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

  .productsCount {
    background: #fff;
  }

  .titleProductCount {
    text-align: center;
    color: #6f6f6f;
    font-weight: bold;
    margin-bottom: 1em;
  }

  .colProductCount {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ProductCount {
    color: #f9ae4e;
  }

  .allViewBannerLeft {
    text-align: left;
    padding: 0 0 0.5em 0.8em !important;
    color: #0275db;
    font-weight: bold;
  }

  .contactUs {
    flex-wrap: nowrap;
    display: flex;
    position: relative;
    right: 13px;
    top: 9px;
    > div {
      margin-left: 0.5em;
    }
  }
  .socialMedia {
    line-height: 1em;
    > a {
      color: inherit !important;
    }
  }
  .online {
    background: #ff9800;
    padding: 0.2em 0.4em;
    color: #fff;
    border-radius: 10px;
    font-size: 0.8em;
    > span {
      margin-right: 0.2em;
    }
  }

  .sticky {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .sticky-wrapper {
    position: relative;
    height: 3rem;
  }

  .sticky .sticky-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  .firsListSecondList {
    display: flex;
    flex-direction: column;
  }
`;
