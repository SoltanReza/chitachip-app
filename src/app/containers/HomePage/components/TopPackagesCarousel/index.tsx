/**
 *
 * TopPackagesCarousel
 *
 */
// import { useWindowSize } from '../../../utils/hooks/useWindowSize';
import '@brainhubeu/react-carousel/lib/style.css';
import { Col, Row } from 'antd';
import { categoryBanner, productBanner } from 'app/containers/App/types';
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledCardCarousel, StyledTopPackagesCarousel } from './styles';

interface Props {
  className?: string;
  categoryBanner: categoryBanner;
  productBanner: productBanner;
}

export const TopPackagesCarousel = memo(
  ({ className, categoryBanner, productBanner }: Props) => {
    const { t } = useTranslation();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    return (
      <StyledTopPackagesCarousel
        className={`TopPackagesCarousel ${className || ''}`}
      >
        <Row gutter={[16, 24]} style={{ margin: '0' }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <StyledCardCarousel
              // background={categoryBanner.background}
              defaultBackground="#ff9800"
            >
              <img
                src={categoryBanner.category_banner}
                className="container_img"
              />{' '}
              {/* <h1>{categorySlider.name}</h1>
              <Button size="large" type="primary" className="slideProduct">
                مشاهده
              </Button> */}
            </StyledCardCarousel>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <StyledCardCarousel
              // background={productSlider.image}
              defaultBackground="#3f51b5"
            >
              <img
                src={productBanner.product_banner}
                className="container_img"
              />
              {/* <h1>{productSlider.title}</h1>
              <Button size="large" type="primary" className="slideProduct">
                خرید محصول
              </Button> */}
            </StyledCardCarousel>
          </Col>
        </Row>
      </StyledTopPackagesCarousel>
    );
  },
);
