import styled from 'styled-components/macro';

export const StyledSliderProduct = styled.section`
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .slideItem {
    display: inline-block;
    vertical-align: top;
    margin: 1em;
    white-space: normal;
  }

  .alertLogin {
    .ant-modal-close {
      background: red !important;
    }
  }

  .swiper-button-next {
    color: #000;
    margin-left: 0.5em;
    left: -15px !important;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2)) !important;
  }

  .swiper-button-prev {
    color: #000;
    right: -15px !important;
    margin-right: 0.5em;
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2)) !important;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 17px;
    padding: 0.4em;
    font-weight: bold;
  }

  .swiper-slide {
    @media screen and (max-width: 640px) {
      width: 60%;
    }
  }
`;
