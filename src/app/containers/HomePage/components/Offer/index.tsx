/**
 *
 * Offer
 *
 */
import React, { memo, useCallback } from 'react';

import { StyledOffer } from './styles';
import {
  AndroidOutlined,
  AppleOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { ellipseString } from 'utils/helpers';
import { ProductData } from 'app/containers/App/types';
import { redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props {
  className?: string;
  product: Array<ProductData>;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const Offer = memo(({ className, product }: Props) => {
  const { t } = useTranslation();
  const handleRouteToProductDetails = useCallback(
    (id: number) => () => redirect(Routes.productDetails, { id }),
    [],
  );
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  return (
    <StyledOffer className={`Offer ${className || ''}`}>
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-500-px"
      >
        {product.map(item => (
          <div
            className="offerCard"
            onClick={handleRouteToProductDetails(item.id)}
          >
            <div className="titleProduct">
              {ellipseString(`${item.title}`, 14)}
            </div>
            <div>
              <img
                src={item.image}
                className="imgProduct"
                // alt={item.title}
              />
            </div>

            <div className="buyProduct">
              {/* <div>
              <HeartOutlined size={6} />
            </div> */}
              <div className="priceStyle">
                {/* <ShoppingOutlined size={6} />{' '} */}
                <div className="price">
                  <div className="discount">18%</div>
                  <s className="priceDiscount">
                    {item.price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </s>
                </div>
                <div className="price">
                  <div className="currency">تومان</div>
                  <div>
                    {item.price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* <div className="container category">
        <div className="row slide">
          <ul
            className="col container-filter list-unstyled categories-filter text-center"
            id="filter"
          >
            {product.map(item => (
              <li className=" slideItem">
                <div
                  className="offerCard"
                  onClick={handleRouteToProductDetails(item.id)}
                >
                  <div className="titleProduct">
                    {ellipseString(`${item.title}`, 14)}
                  </div>
                  <div>
                    <img
                      src={item.image}
                      className="imgProduct"
                     
                    />
                  </div>

                  <div className="buyProduct">
                   
                    <div className="priceStyle">
                      
                      <div className="price">
                        <div className="discount">18%</div>
                        <s className="priceDiscount">
                          {item.price
                            .toFixed()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </s>
                      </div>
                      <div className="price">
                        <div className="currency">تومان</div>
                        <div>
                          {item.price
                            .toFixed()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </StyledOffer>
  );
});
