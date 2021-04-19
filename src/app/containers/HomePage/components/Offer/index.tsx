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
  HeartFilled,
  StarFilled,
} from '@ant-design/icons';
import { Button, Tabs, Popover, Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { ellipseString } from 'utils/helpers';
import { ProductData } from 'app/containers/App/types';
import { redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { useRef } from 'react';

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

  const [currentElement, setCurrentElement] = useState(0);
  const [likeStyle, setLikeStyle] = useState(false);
  const [starStyle, setStarStyle] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const ref1 = useRef<HTMLDivElement>(null);
  const handleChangeLikeStyleOver = useCallback(e => {
    const data = e.currentTarget.dataset as any;
    setCurrentElement(+data.id);
    setLikeStyle(true);
  }, []);
  const handleChangeLikeStyleLeave = useCallback(e => {
    const data = e.currentTarget.dataset as any;
    setCurrentElement(+data.id);
    setLikeStyle(false);
  }, []);
  const toggle = useCallback(e => {
    const data = e.currentTarget.dataset as any;
    setCurrentElement(+data.id);
    setLikeStyle(prevState => !prevState);
  }, []);

  const handleVoteLike = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(+data.id);
      toggle(e);
      setStarStyle(true);
    },
    [toggle],
  );

  const handleRouteToProductDetails = useCallback(
    (id: number) => () => redirect(Routes.productDetails, { id }),
    [],
  );

  console.log('likeStyle', likeStyle);
  console.log(currentElement);
  console.log('starStyle', starStyle);
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
          <>
            {likeStyle && currentElement === item.id && (
              <div
                className={`${likeStyle ? 'voteLike' : 'voteLikeNone'} `}
                onClick={handleVoteLike}
                data-id={item.id}
                onMouseLeave={toggle}
              >
                <div>افزودن به لیست علاقه مندی ها</div>
                <HeartOutlined
                  style={{ fontSize: '1.5em', color: '#ff0000' }}
                />
              </div>
            )}

            <div
              className="offerCard"
              ref={ref1}
              data-id={item.id}
              onClick={handleRouteToProductDetails(item.id)}
            >
              <div className="titleProduct">
                {ellipseString(`${item.title}`, 14)}
              </div>
              <div>
                <img src={item.image} className="imgProduct" alt={item.title} />
              </div>
              {starStyle && currentElement === item.id ? (
                <div className="voteStyle">
                  <div>
                    <HeartFilled
                      style={{ color: '#ffc107', fontSize: '1.5em' }}
                    />
                  </div>
                  <div>
                    <StarFilled
                      style={{ color: '#ffc107', fontSize: '1.5em' }}
                    />{' '}
                    1.3
                  </div>
                </div>
              ) : (
                <div
                  className="buyProduct"
                  data-id={item.id}
                  onMouseOver={toggle}
                >
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
              )}
            </div>
          </>
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
