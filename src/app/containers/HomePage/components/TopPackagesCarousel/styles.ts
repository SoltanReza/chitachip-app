import { Card, Carousel } from 'antd';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';

export const StyledTopPackagesCarousel = styled.section`
  margin-top: 1em;
  .imgCarousel {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 170px;
    width: 100%;
  }
  .cardCarousel {
    background: #ff9800;
    height: 170px;
    width: 100%;
    border-radius: 7px;
    min-height: 245px;
  }
  .cardCarousel2 {
    background: #3f51b5;
    height: 170px;
    width: 100%;
    border-radius: 7px;
    min-height: 245px;
  }
  .carousel {
    display: flex;
    
  }
`;
