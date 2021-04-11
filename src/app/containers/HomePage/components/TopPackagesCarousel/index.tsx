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
import { Card, Col, Row } from 'antd';

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
      <div className="carousel">
        <Card className="cardCarousel"> نمیش محصولات</Card>
        <Card className="cardCarousel2"> خرید محصولات</Card>
      </div>
    </StyledTopPackagesCarousel>
  );
});
