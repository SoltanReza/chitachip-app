/**
 *
 * BasketItem
 *
 */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { StyledBasketItem } from './styles';
import {
  HeartOutlined,
  ShoppingOutlined,
  ShareAltOutlined,
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Typography, Divider, Card, Row, Col, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAddToBasket,
  selectBrowseBasket,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';

interface Props {
  className?: string;
}
const { Title } = Typography;

export const BasketItem = memo(({ className }: Props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const basketData = useSelector(selectBrowseBasket);
  const [quantity, setquantity] = useState(0);
  const [currentElement, setCurrentElement] = useState('');
  const addToBasketData = useSelector(selectAddToBasket);

  const loading = useMemo(() => !!basketData.params, [basketData.params]);

  const handleMinusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(data.product_id);
      dispatch(
        appActions.addToBasket({
          product_id: data.product_id,
          quantity: -1,
        }),
      );
    },
    [dispatch],
  );
  const handlePlusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(data.product_id);
      dispatch(
        appActions.addToBasket({
          product_id: data.product_id,
          quantity: 1,
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
  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );

  useEffect(() => {
    dispatch(appActions.browseBasket({}));
  }, [dispatch]);

  // useEffect(() => {
  //   if (addToBasketData) {
  //     if (addToBasketData.data) {
  //       console.log(addToBasketData);
  //       addToBasketData.data.data.products.map(
  //         item =>
  //           item.product_id === currentElement &&
  //           item.is_exists &&
  //           message.info(''),
  //       );
  //     }
  //   }
  // }, [addToBasketData, currentElement]);

  return (
    <StyledBasketItem className={`BasketItem ${className || ''}`}>
      {addToBasketData.params && (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      )}
      <Typography>
        <Title>سبد خرید</Title>
      </Typography>

      <Card>
        <h3>لیست محصولات</h3>

        <Row gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}>
          <Col span={18}>
            {basketData && basketData.data && basketData.data.value ? (
              basketData.data.value.products.map(item => (
                <Card className="cardListProduct">
                  <Row gutter={{ xs: 8, sm: 16, md: 40, lg: 40 }}>
                    <Col span={5}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="imgProduct"
                      />
                    </Col>
                    <Col span={14}>
                      <Row
                        className="titleProduct"
                        onClick={handleRouteToProductDetails(item.product_id)}
                      >
                        {item.title}
                      </Row>
                      <Row gutter={8}>
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

                        <Col>
                          <DeleteOutlined
                            style={{ color: 'red', fontSize: '1.5em' }}
                            data-product_id={item.product_id}
                            onClick={handleDeleteItem}
                          />
                          حذف
                        </Col>
                      </Row>
                    </Col>
                    <Col span={5}>
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
                    </Col>
                  </Row>
                </Card>
              ))
            ) : (
              <div>سبد خرید شما خالی می باشد.</div>
            )}
          </Col>
          <Col className="actionItem" span={6}>
            <Card className="basketItemAction">
              <Row>
                <Col span={12}>قیمت محصولات</Col>
                <Col span={12} className="leftItem">
                  250/000 تومان
                </Col>
              </Row>
              <Row>
                <Col span={12}>مجموع تخفیف</Col>
                <Col span={12} className="leftItem">
                  250/000 تومان
                </Col>
              </Row>
              <Row>
                <Col span={12}>هزینه ارسال</Col>
                <Col span={12} className="leftItem">
                  -
                </Col>
              </Row>
              <Row>
                <Col span={12}>مبلغ قابل پرداخت</Col>
                <Col span={12} className="leftItem">
                  150/210 تومان
                </Col>
              </Row>
              <Row className="continueBuy">
                <Button block className="continueBuyBtn">
                  ادامه خرید
                </Button>
              </Row>
              <Row className="finlaPay">
                <Button
                  block
                  icon={<ShoppingOutlined />}
                  className="finlaPayBtn"
                >
                  پرداخت نهایی
                </Button>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
    </StyledBasketItem>
  );
});
