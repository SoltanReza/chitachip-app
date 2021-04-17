import styled from 'styled-components/macro';
import { BaseLayout } from 'app/components/BaseLayout';
import { theme } from 'styles/theme';

export const StyledHomePage = styled(BaseLayout)`
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
    width: 170px;
  }

  .titleProduct {
    font-weight: bold;
    margin-bottom: 0.7em;
  }
  .buyProduct {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0.7em;
  }
  .price {
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
`;
