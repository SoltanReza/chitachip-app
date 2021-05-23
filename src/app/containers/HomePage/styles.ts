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



  /* @media (max-width: ${sizes.small}px) {
    .swiper-slide {
      width: 100% !important;
    }
  } */
`;
