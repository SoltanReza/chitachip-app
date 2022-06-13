import { Col } from 'antd';
import { BaseLayout } from 'app/components/BaseLayout';
import styled from 'styled-components/macro';
import { sizes } from 'styles/media';
interface TabProps {
  active?: boolean;
}
export const Tab = styled(Col)<TabProps>`
  cursor: pointer;
  color: ${props => (props.active ? 'black' : '#cbcbcb')};

  span {
    font-size: 1.6em;
  }

  @media screen and (max-width: 640px) {
    span {
      font-size: 1.1em;
    }
  }
`;

export const StyledHomePage = styled(BaseLayout)`
  .swiper-button-next {
    left: 20px !important;
  }
  .swiper-button-prev {
    right: 20px !important;
  }
  .swiper-button-prev,
  .swiper-button-next {
    width: 27px !important;
    height: 20px !important;
    overflow: hidden;
  }

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
  }

  .rightBannerImg {
    width: 100%;
    height: 100%;
    border-radius: 7px;

    object-fit: contain;
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
    @media screen and (max-width: 640px) {
      font-size: 1.2em;
    }
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
    font-size: 2.5em;
    color: #fff;
    @media screen and (max-width: 640px) {
      font-size: 1.1em;
    }
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

  .colProductCountWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 15px;
    padding: 10px;
    &:hover {
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }
  }
  .colProductCount {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .ProductCount {
    color: #f9ae4e;
  }

  .allViewBannerLeft {
    text-align: left;
    padding: 0 0 0.5em 0.8em !important;
    color: #0275db;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      text-shadow: 1px 1px 1px rgba(2, 117, 219, 0.2);
    }
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
    h4 {
      margin-right: 1em;
      margin-left: 5px;
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
    font-size: 0.7em;

    > span {
      margin-right: 0.2em;
    }
    /* @media screen and (max-width: 1px) {
      font-size: 0.6em;
    } */
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
