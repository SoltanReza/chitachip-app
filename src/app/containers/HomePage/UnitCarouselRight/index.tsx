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
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
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
import { ProductCard } from 'app/components/ProductCard';
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
      dispatch(
        appActions.addToBasket({
          product_id: data.id,
          quantity: -1,
        }),
      );
    },
    [dispatch],
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

  useEffect(() => {
    if (addToBasketData) {
      if (addToBasketData.data) {
        if (addToBasketData.data.status === 402) {
          // message.info('ظرفیت این محصول به اتمام رسیده است');
        }
      }
    }
  }, [addToBasketData]);

  return (
    <StyledUnitCarouselRight className={`UnitCarouselRight ${className || ''}`}>
      <h3>{product.text}</h3>

      <Swiper
        // spaceBetween={30}
        navigation={true}
        // className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
      >
        {product.prs.map(item => (
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
    </StyledUnitCarouselRight>
  );
});
