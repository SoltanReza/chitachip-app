/**
 *
 * BasketHeader
 *
 */
import React, { memo, useCallback, useEffect } from 'react';

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
import { selectBrowseBasket } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { history } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';
interface Props {
  className?: string;
}

export const BasketHeader = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const basketData = useSelector(selectBrowseBasket);

  const handleRedirectToBasketPage = useCallback(
    () => history.push(Routes.basket),
    [],
  );

  useEffect(() => {
    dispatch(appActions.browseBasket({}));
  }, [dispatch]);

  return (
    <StyledBasketHeader className={`BasketHeader ${className || ''}`}>
      <div className="basketItem">
        <div className="headerBasket">
          <ShoppingOutlined /> سبد خرید
        </div>
        <div className="bodyBasket">
          {basketData &&
            basketData.data &&
            basketData.data.value.products.map(item => (
              <>
                <div className="bodyBasketCard">
                  <Col span={12}>
                    <h5>{item.title}</h5>
                  </Col>
                  <Col span={6}>
                    <img src={item.image} className="imgProduct" />
                  </Col>
                  <Col span={6} className="action">
                    <Col>
                      <PlusOutlined
                        style={{ color: '#ff9800' }}
                        data-product_id={item.product_id}
                        data-quantity={item.quantity}
                        // onClick={handlePlusQuantity}
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
                        // onClick={handleMinusQuantity}
                      />
                    </Col>
                    <div>
                      <DeleteOutlined
                        style={{ color: 'red', fontSize: '1.5em' }}
                        data-product_id={item.product_id}
                        // onClick={handleDeleteItem}
                      />
                    </div>
                  </Col>
                </div>
                <Divider style={{ margin: 0 }} />
              </>
            ))}
        </div>

        <div className="footerBasket">
          <div className="showAllProduct" onClick={handleRedirectToBasketPage}>
            مشاهده همه
          </div>
          <div>
            <span className="buy">تسویه حساب</span>
          </div>
        </div>
      </div>
    </StyledBasketHeader>
  );
});
