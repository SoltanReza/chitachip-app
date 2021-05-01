import styled from 'styled-components/macro';
import { BaseLayout } from 'app/components/BaseLayout';
import { theme } from 'styles/theme';
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
    margin: 1em 3.2em 2.2em 2em !important;
    padding: 2em 2em 2em 2em !important;
  }

  .divStory {
    width: 70px;
    height: 70px;
    border: 2px solid #fbaf4d;
    border-radius: 44px;
    background: gray;
  }

  @media (max-width: ${sizes.small}px) {
    .swiper-slide {
      width: 100% !important;
    }
  }
`;
