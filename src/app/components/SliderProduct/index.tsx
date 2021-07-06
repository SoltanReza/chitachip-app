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
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
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
import { ProductCard } from '../ProductCard';
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
  const [quantity, setquantity] = useState<number | undefined>(0);
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
      setquantity(addToBasketData.data?.quantity);
      setCurrentElement(data.id);
      dispatch(
        appActions.addToBasket({
          product_id: data.id,
          quantity: -1,
        }),
      );
    },
    [addToBasketData.data, dispatch],
  );
  const handlePlusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;

      setCurrentElement(data.id);
      dispatch(
        appActions.addToBasket({
          product_id: data.id,
          quantity: 1,
        }),
      );
    },
    [dispatch],
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
  useEffect(() => {
    if (addToBasketData) {
      if (addToBasketData.data) {
        if (addToBasketData.data.status === 402) {
          // message.info('ظرفیت این محصول به اتمام رسیده است');
        }
      }
    }
  }, [addToBasketData]);
  useEffect(() => {
    if (addToBasketData.data?.status === 200) {
      if (quantity) {
        if (quantity < addToBasketData.data?.quantity) {
          message.success('محصول با موفقیت به سبد خرید اضافه شد');
        } else {
          message.success('محصول با موفقیت از سبد خرید کم شد');
        }
      }
    }
  }, [addToBasketData, quantity]);

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
            <ProductCard data={item} />
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
