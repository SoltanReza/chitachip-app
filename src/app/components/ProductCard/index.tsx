/**
 *
 * ProductCard
 *
 */
import React, { memo, useCallback, useState } from 'react';

import { StyledProductCard } from './styles';

import { useTranslation } from 'react-i18next';

import {
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  StarFilled,
} from '@ant-design/icons';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAddToBasket,
  selectAuth,
  selectLikeProduct,
} from 'app/containers/App/selectors';
import { Routes } from 'app/containers/App/Router/routes';
import { appActions } from 'app/containers/App/slice';

interface Props {
  className?: string;
  data?: any;
}

export const ProductCard = memo(({ className, data }: Props) => {
  const { t } = useTranslation();
  const item = data;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setquantity] = useState<number | undefined>(0);
  const [currentElement, setCurrentElement] = useState('');
  const dispatch = useDispatch();
  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );

  const authData = useSelector(selectAuth);
  const likeData = useSelector(selectLikeProduct);
  const addToBasketData = useSelector(selectAddToBasket);
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
  return (
    <StyledProductCard className={`ProductCard ${className || ''}`}>
      {/* {t('ProductCard')} */}
      <div className="offerCard">
        <div data-id={item.id} onClick={handleRouteToProductDetails(item.id)}>
          <div className="titleProduct">
            {ellipseString(`${item.title}`, 26)}
          </div>
          <div className="imgProductWrapper-slider">
            <img src={item.image} className="imgProduct" alt={item.title} />
          </div>
        </div>
        <div className="buyProduct" id={`buyProduct${item.id}`}>
          <div>
            <StarFilled style={{ color: '#ffc107', fontSize: '1.5em' }} />
            1.3
          </div>
          <div className="priceStyle">
            <div className="price">
              <div className="discount">
                {item.discount > 0 && item.discount}
              </div>
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
          <div className="count-wrapper">
            {/* <ShoppingOutlined
                    style={{ color: '#ffc107', fontSize: '1.5em' }}
                    data-product_id={item.id}
                    onClick={handleAddToBasket}
                  />{' '} */}
            <span className="count">
              <span
                className="icon"
                data-id={item.id}
                onClick={handlePlusQuantity}
              >
                +
              </span>
              {currentElement === item.id ? (
                addToBasketData.data?.status === 402 ? (
                  <span className="text">0</span>
                ) : (
                  <span className="text">{addToBasketData.data?.quantity}</span>
                )
              ) : (
                <span className="text">0</span>
              )}
              <span
                className="icon"
                data-id={item.id}
                onClick={handlePlusQuantity}
              >
                -
              </span>
            </span>
          </div>
        </div>
      </div>
    </StyledProductCard>
  );
});
