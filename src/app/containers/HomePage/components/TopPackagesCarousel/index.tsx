/**
 *
 * TopPackagesCarousel
 *
 */
// import { useWindowSize } from '../../../utils/hooks/useWindowSize';
import '@brainhubeu/react-carousel/lib/style.css';
import { Col, Row } from 'antd';
import {
  Banners,
  categoryBanner,
  productBanner,
} from 'app/containers/App/types';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledCardCarousel, StyledTopPackagesCarousel } from './styles';

interface Props {
  className?: string;
  banners: Banners;
}

export const TopPackagesCarousel = memo(({ className, banners }: Props) => {
  const { t } = useTranslation();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;

  return (
    <StyledTopPackagesCarousel
      className={`TopPackagesCarousel ${className || ''}`}
    >
      <Row gutter={[16, 24]} style={{ margin: '0' }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <StyledCardCarousel defaultBackground="#ff9800">
            <a href={banners.url_first} target="blank">
              <img src={banners.first_banner} className="container_img" />
            </a>
          </StyledCardCarousel>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <StyledCardCarousel defaultBackground="#3f51b5">
            <a href={banners.url_second} target="blank">
              <img src={banners.second_banner} className="container_img" />
            </a>
          </StyledCardCarousel>
        </Col>
      </Row>
    </StyledTopPackagesCarousel>
  );
});
