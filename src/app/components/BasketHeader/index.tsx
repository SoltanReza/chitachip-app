/**
 *
 * BasketHeader
 *
 */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { StyledBasketHeader } from './styles';

import { useTranslation } from 'react-i18next';
import {
  HeartOutlined,
  ShoppingOutlined,
  ShareAltOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Typography, Divider, Card, Row, Col, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAddToBasket,
  selectBrowseBasket,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { history, redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';
interface Props {
  className?: string;
}

export const BasketHeader = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState<number | undefined>(0);

  const basketData = useSelector(selectBrowseBasket);
  const addTobasketData = useSelector(selectAddToBasket);

  const loadingAddToBasket = useMemo(() => !!addTobasketData.params, [
    addTobasketData.params,
  ]);

  const handleRedirectToBasketPage = useCallback(
    () => history.push(Routes.basket),

    [],
  );
  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );
  const handleRouteToSendInfo = useCallback(
    () => redirect(Routes.sendInfo),
    [],
  );
  const handlePlusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setquantity(addTobasketData.data?.quantity);
      dispatch(
        appActions.addToBasket({
          product_id: data.product_id,
          quantity: 1,
        }),
      );
    },
    [addTobasketData.data, dispatch],
  );
  const handleMinusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      dispatch(
        appActions.addToBasket({
          product_id: data.product_id,
          quantity: -1,
        }),
      );
    },
    [dispatch],
  );
  const handleDeleteItem = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      dispatch(
        appActions.deleteFromBasketItem({
          product_id: data.product_id,
        }),
      );
    },
    [dispatch],
  );
  useEffect(() => {
    dispatch(appActions.browseBasket({}));
  }, [dispatch]);
  useEffect(() => {
    if (addTobasketData) {
      if (addTobasketData.data) {
        if (addTobasketData.data.status === 402) {
          message.info('ظرفیت این محصول به اتمام رسیده است');
          dispatch(appActions.browseBasket({}));
        }
      }
    }
  }, [addTobasketData, dispatch]);

  useEffect(() => {
    if (addTobasketData.data?.status === 200) {
      if (quantity) {
        if (quantity < addTobasketData.data?.quantity) {
          message.success('محصول با موفقیت به سبد خرید اضافه شد');
        } else {
          message.success('محصول با موفقیت از سبد خرید کم شد');
        }
      }
    }
  }, [addTobasketData, quantity]);

  return (
    <StyledBasketHeader className={`BasketHeader ${className || ''}`}>
      {loadingAddToBasket && (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      )}
      <div className="basketItem">
        {/* <div className="headerBasket">
          <ShoppingOutlined /> سبد خرید
        </div> */}
        <div className="bodyBasket">
          {basketData &&
          basketData.data &&
          basketData.data.amount > 0 &&
          basketData.data.data.products ? (
            basketData.data.data.products.map(item => (
              <>
                <div className="bodyBasketCard">
                  <Col
                    span={12}
                    onClick={handleRouteToProductDetails(item.product_id)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h5>{item.title}</h5>
                  </Col>
                  <Col span={6}>
                    <img
                      src={item.image}
                      className="imgProduct"
                      alt={item.title}
                    />
                  </Col>
                  <Col span={6} className="action">
                    <Col>
                      <PlusOutlined
                        style={{ color: '#ff9800' }}
                        data-product_id={item.product_id}
                        data-quantity={item.quantity}
                        onClick={handlePlusQuantity}
                      />
                    </Col>
                    <Col>
                      <span className="quantity">{item.quantity}</span>
                    </Col>
                    <Col>
                      <MinusOutlined
                        style={{ color: '#ff9800' }}
                        data-product_id={item.product_id}
                        data-quantity={item.quantity}
                        onClick={handleMinusQuantity}
                      />
                    </Col>
                    <div>
                      <DeleteOutlined
                        style={{ color: 'red', fontSize: '1.5em' }}
                        data-product_id={item.product_id}
                        onClick={handleDeleteItem}
                      />
                    </div>
                  </Col>
                </div>
                <Divider style={{ margin: 0 }} />
              </>
            ))
          ) : (
            <div className="bodyBasketCard"></div>
          )}
        </div>

        <div className="footerBasket">
          <div className="showAllProduct" onClick={handleRedirectToBasketPage}>
            مشاهده همه
          </div>
          <div>
            <span className="buy" onClick={handleRouteToSendInfo}>
              تسویه حساب
            </span>
          </div>
        </div>
      </div>
    </StyledBasketHeader>
  );
});
