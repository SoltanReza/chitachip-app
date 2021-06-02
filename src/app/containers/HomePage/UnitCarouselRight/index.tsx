/**
 *
 * UnitCarouselRight
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
import { ProductData, ProductsDataWithText } from 'app/containers/App/types';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { StyledUnitCarouselRight } from './styles';

interface Props {
  className?: string;
  product: ProductsDataWithText;
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const UnitCarouselRight = memo(({ className, product }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onlyWidth = useWindowWidth();
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
          setIsModalVisible(true);
        }
      }
    },
    [authData, dispatch],
  );

  return (
    <StyledUnitCarouselRight className={`UnitCarouselRight ${className || ''}`}>
      <Swiper
        // spaceBetween={30}
        navigation={true}
        // className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2000,
        // }}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {product.prs.map(item => (
          <SwiperSlide>
            <div className="offerCard">
              <div>{product.text}</div>
              <div
                data-id={item.id}
                onClick={handleRouteToProductDetails(item.id)}
              >
                <div className="imgProductWrapper">
                  <img
                    src={item.image}
                    className="imgProduct"
                    alt={item.title}
                  />
                </div>
                <div className="titleProduct">
                  {ellipseString(`${item.title}`, 20)}
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
    </StyledUnitCarouselRight>
  );
});