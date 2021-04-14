import { Card, Carousel } from 'antd';
import styled from 'styled-components/macro';
import { theme } from 'styles/theme';
import { Nullable } from 'types';

export const StyledTopPackagesCarousel = styled.section`
  margin-top: 1em;
  .imgCarousel {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 170px;
    width: 100%;
  }
  /* .cardCarousel {
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
  } */
  .carousel {
    display: flex;
  }
`;
export const StyledCardCarousel = styled.div<{
  defaultBackground: Nullable<string>;
}>`
  border-radius: 7px;
  background-size: 100%;
  margin-left: 1em;
  .slideProduct {
    background: ${theme.TEXT_COLOR_INVERT};
    border-radius: 10px;
    color: ${theme.TEXT_COLOR_DARK};
    font-weight: bold;
    border: 1px solid ${theme.TEXT_COLOR_DARK};
  }

  .container_img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
