/**
 *
 * TopPackagesCarousel
 *
 */
// import { useWindowSize } from '../../../utils/hooks/useWindowSize';
import { useWindowWidth } from '@react-hook/window-size';

import React, { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sizes } from 'styles/media';
import { StyledTopPackagesCarousel } from './styles';

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import pic from '../../image/1.jpeg';
import pic2 from '../../image/2.jpeg';
import pic3 from '../../image/3.jpeg';
import pic4 from '../../image/4.jpeg';
import pic5 from '../../image/5.jpeg';
import pic6 from '../../image/6.jpeg';

interface Props {
  className?: string;
}

export const TopPackagesCarousel = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <StyledTopPackagesCarousel
      className={`TopPackagesCarousel ${className || ''}`}
    >
      <Carousel
        // lazyLoad={true}
        arrows
        dots
        rtl
        // slidesPerPage={2}
        // slidesPerScroll={1}
        animationSpeed={1500}
        // autoPlay={3000}
        stopAutoPlayOnHover
        offset={50}
        itemWidth={250}
        clickToChange
        // slidesPerPage={2}
        // slidesPerScroll={2}
        // animationSpeed={1500}
        // autoPlay={3000}
        // stopAutoPlayOnHover
        // offset={50}
        // itemWidth={250}
        // clickToChange
        // centered
        // rtl
      >
        <img src={pic} className="imgCarousel" />
        <img src={pic2} className="imgCarousel" />
        <img src={pic3} className="imgCarousel" />
        <img src={pic4} className="imgCarousel" />
        <img src={pic5} className="imgCarousel" />
        <img src={pic6} className="imgCarousel" />
      </Carousel>
    </StyledTopPackagesCarousel>
  );
});
