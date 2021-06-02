/**
 *
 * SliderProduct
 *
 */
import {
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingOutlined,
  StarFilled,
} from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { message, Modal } from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import {
  selectAddToBasket,
  selectAuth,
  selectLikeProduct,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { ProductData } from 'app/containers/App/types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { StyledSliderProduct } from './styles';

interface Props {
  className?: string;
  product: Array<ProductData>;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const SliderProduct = memo(({ className, product }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onlyWidth = useWindowWidth();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setquantity] = useState(0);
  const [currentElement, setCurrentElement] = useState('');

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

  const handleOk = () => {
    setIsModalVisible(false);
    redirect(Routes.login);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
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

  const handleVoteLike = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      if (authData) {
        if (authData.data) {
          dispatch(appActions.likeProduct({ product_id: data.id }));
        } else {
          setIsModalVisible(true);
        }
      }
    },
    [authData, dispatch],
  );

  return (
    <StyledSliderProduct className={`SliderProduct ${className || ''}`}>
      {likeData.params && (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      )}

      <Swiper
        // slidesPerView={4}
        // spaceBetween={30}
        navigation={true}
        // className="mySwiper"
        spaceBetween={20}
        slidesPerView={onlyWidth > 960 ? 4 : 1}
        // autoplay={{
        //   delay: 1000,
        // }}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
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
          cancelText="انصراف"
          onCancel={handleCancel}
        >
          <p>
            برای افزودن این محصول به مورد علاقه ها لطفا ابتدا وارد سامانه شوید
          </p>
        </Modal>
      )}
    </StyledSliderProduct>
  );
});
