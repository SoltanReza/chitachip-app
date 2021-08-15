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
import { ProductCard } from 'app/components/ProductCard';

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
  const handleContinueBuy = useCallback(() => {
    redirect(Routes.home);
  }, []);
  const handleRouteToSendInfo = useCallback(() => {
    redirect(Routes.sendInfo);
  }, []);

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
  let allPricesSum: number = 0;
  let allِDiscountsSum: number = 0;

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
          <Col xs={24} sm={24} md={19} lg={19} xl={19}>
            {basketData && basketData.data && basketData.data.data ? (
              basketData.data.data.products.map(item => {
                allPricesSum += Number(
                  item.price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ''),
                );

                allِDiscountsSum += Number(
                  item.discount.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ''),
                );
                return <ProductCard data={item} />;
              })
            ) : (
              <div>سبد خرید شما خالی می باشد.</div>
            )}
          </Col>
          <Col className="actionItem" xs={24} sm={24} md={5} lg={5} xl={5}>
            <Card className="basketItemAction">
              <Row>
                <Col span={12}>قیمت محصولات</Col>
                <Col span={12} className="leftItem">
                  {allPricesSum}
                </Col>
              </Row>
              <Row>
                <Col span={12}>مجموع تخفیف</Col>
                <Col span={12} className="leftItem">
                  {allِDiscountsSum}
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
                <Button
                  block
                  className="continueBuyBtn"
                  onClick={handleContinueBuy}
                >
                  ادامه خرید
                </Button>
              </Row>
              <Row className="finlaPay">
                <Button
                  block
                  icon={<ShoppingOutlined />}
                  className="finlaPayBtn"
                  onClick={handleRouteToSendInfo}
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
