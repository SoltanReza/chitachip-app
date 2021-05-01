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
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import {
  Button,
  Tabs,
  Popover,
  Dropdown,
  Menu,
  Alert,
  Popconfirm,
  message,
  Modal,
  Spin,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { ellipseString } from 'utils/helpers';
import { ProductData } from 'app/containers/App/types';
import { redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAddToBasket,
  selectAuth,
  selectLikeProduct,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import SwiperCore, { Navigation } from 'swiper/core';

interface Props {
  className?: string;
  product: Array<ProductData>;
}

SwiperCore.use([Navigation]);

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
  const dispatch = useDispatch();
  const [timeClose, setTimeClose] = useState(2);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setquantity] = useState(0);
  const [currentElement, setCurrentElement] = useState('');
  const [minusQuantity, setMinusQuantity] = useState(0);
  const [plusQuantity, setPlusQuantity] = useState(0);
  const authData = useSelector(selectAuth);
  const likeData = useSelector(selectLikeProduct);
  const addToBasketData = useSelector(selectAddToBasket);
  const loading = useMemo(() => !!addToBasketData.params, [
    addToBasketData.params,
  ]);

  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );
  const handleRouteToLogin = useCallback(() => {
    setTimeClose(0);
    redirect(Routes.login);
  }, []);
  // const handleCloseMessage = useCallback(() => setTimeClose(0), []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    redirect(Routes.login);
  };

  const handleMinusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(data.id);
      if (quantity > 1) {
        setquantity(quantity - 1);
      } else {
        setquantity(0);
      }
    },
    [quantity],
  );
  const handlePlusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(data.id);
      if (currentElement !== data.id) {
        setquantity(1);
      } else {
        setquantity(quantity + 1);
      }
    },
    [currentElement, quantity],
  );

  const handleAddToBasket = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(data.product_id);
      if (quantity <= 0) {
        message.warning('لطفا تعداد محصول را مشخص کنید');
      } else {
        dispatch(
          appActions.addToBasket({
            product_id: data.product_id,
            quantity: quantity,
          }),
        );
        setquantity(0);
      }
    },
    [dispatch, quantity],
  );

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleVoteLike = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      if (authData) {
        if (authData.data) {
          dispatch(appActions.likeProduct({ product_id: data.id }));
        } else {
          Modal.info({
            title: 'ورود به سامانه',
            className: 'alertLogin',
            content: (
              <div>
                <p>
                  برای افزودن این محصول به مورد علاقه ها لطفا ابتدا وارد سامانه
                  شوید
                </p>
              </div>
            ),
            onOk() {
              redirect(Routes.login);
            },
            okText: 'ورود',
          });
        }
      }
    },
    [authData, dispatch],
  );

  useEffect(() => {
    if (addToBasketData) {
      if (addToBasketData.data) {
        addToBasketData.data.data.products.map(
          item =>
            item.product_id === currentElement &&
            message.info('محصول به سبد خرید اضافه شد'),
        );
      }
    }
  }, [addToBasketData, currentElement]);

  return (
    <StyledOffer className={`Offer ${className || ''}`}>
      {addToBasketData.params ||
        (likeData.params && (
          <div id="preloader">
            <div id="status">
              <div className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
              </div>
            </div>
          </div>
        ))}

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        className="mySwiper"
      >
        {product.map(item => (
          <SwiperSlide>
            <div className="offerCard">
              <div
                data-id={item.id}
                onClick={handleRouteToProductDetails(item.id)}
              >
                <div className="titleProduct">
                  {ellipseString(`${item.title}`, 20)}
                </div>
                <div className="imgProductWrapper">
                  <img
                    src={item.image}
                    className="imgProduct"
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="buyProduct" id={`buyProduct${item.id}`}>
                <div>
                  <StarFilled style={{ color: '#ffc107', fontSize: '1.5em' }} />{' '}
                  1.3
                </div>
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
              <div className="voteStyle">
                <div>
                  {likeData && likeData.data ? (
                    likeData.data.status === 201 ? (
                      <HeartOutlined
                        style={{ color: '#ffc107', fontSize: '1.7em' }}
                        data-id={item.id}
                        onClick={handleVoteLike}
                      />
                    ) : (
                      <HeartFilled
                        style={{ color: '#ffc107', fontSize: '1.7em' }}
                        data-id={item.id}
                        onClick={handleVoteLike}
                      />
                    )
                  ) : (
                    <HeartOutlined
                      style={{ color: '#ffc107', fontSize: '1.7em' }}
                      data-id={item.id}
                      onClick={handleVoteLike}
                    />
                  )}
                </div>
                <div>
                  <ShoppingOutlined
                    style={{ color: '#ffc107', fontSize: '1.5em' }}
                    data-product_id={item.id}
                    onClick={handleAddToBasket}
                  />{' '}
                  <span className="count">
                    <PlusOutlined
                      data-id={item.id}
                      onClick={handlePlusQuantity}
                    />
                    {currentElement === item.id ? (
                      <span>{quantity}</span>
                    ) : (
                      <span>0</span>
                    )}
                    <MinusOutlined
                      data-id={item.id}
                      onClick={handleMinusQuantity}
                    />
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalVisible && (
        <Modal
          title="ورود به سامانه"
          visible={isModalVisible}
          onOk={handleOk}
          okText="ورود به سامانه"
          //  onCancel={handleCancel}
        >
          <p>
            برای افزودن این محصول به مورد علاقه ها لطفا ابتدا وارد سامانه شوید
          </p>
        </Modal>
      )}
    </StyledOffer>
  );
});
