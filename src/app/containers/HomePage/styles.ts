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
    /* margin: 1em 0em 2.2em 2em !important; */
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




.rightBanner{
  height: 214px;
}

.rightBannerImg{
width:100%;
height: 100%;
border-radius: 7px;
}

.rightContactUs{
  text-align: center;
  font-weight: bold;
 
}

.newsInputStyle{
  border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #000;
    background: none;
    > input {
      background: none;
    }
}

.rowWrraperRight{
  margin-top :1.5em;
}


.titleBannerLeft{
  font-size: 2.7em;
  font-weight: bold;
  /* margin: 0 !important;
  margin-bottom: 1em; */
  
}

.sliceCard{
  height: 233px;
}
.sliceCardImg{
width:100%;
height: 100%;
border-radius: 14px;
}

.productsCount{
  background: #fff;
 
}

.titleProductCount{
  text-align: center;
  color: #6F6F6F;
  font-weight: bold;
  margin-bottom: 1em;
}

.colProductCount{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ProductCount{
  color: #F9AE4E;
}

.allViewBannerLeft{
  text-align: left;
  padding: 0 0 .5em .8em!important;
  color: #0275DB;
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
    z-index: 100; /* this is optional and should be different for every project */
  }
  .sticky-wrapper {
    position: relative;
    height: 3rem; /* We need to change this value */
  }

  .sticky .sticky-inner {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }

  /* @media (max-width: ${sizes.small}px) {
    .swiper-slide {
      width: 100% !important;
    }
  } */
`;
