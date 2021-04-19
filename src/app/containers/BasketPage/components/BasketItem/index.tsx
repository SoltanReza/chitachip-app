/**
 *
 * BasketItem
 *
 */
import React, { memo } from 'react';

import { StyledBasketItem } from './styles';
import {
  HeartOutlined,
  ShoppingOutlined,
  ShareAltOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Typography, Divider, Card, Row, Col, Button } from 'antd';

interface Props {
  className?: string;
}
const { Title, Paragraph, Text, Link } = Typography;

export const BasketItem = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledBasketItem className={`BasketItem ${className || ''}`}>
      <Typography>
        <Title>سبد خرید</Title>
      </Typography>

      <Card>
        <h3>لیست محصولات</h3>

        <Row gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}>
          <Col span={18}>
            <Card className="cardListProduct">
              <Row gutter={{ xs: 8, sm: 16, md: 40, lg: 40 }}>
                <Col span={5}>
                  <img
                    src="https://picsum.photos/200/300"
                    className="imgProduct"
                  />
                </Col>
                <Col span={14}>
                  <Row className="titleProduct">
                    مگا 3r آردویینو مگا 3r آردویینو
                  </Row>
                  <Row>
                    <Button style={{ color: '#fff', background: '#ff9800' }}>
                      3{' '}
                    </Button>{' '}
                    <DeleteOutlined
                      style={{ color: 'red', fontSize: '1.5em' }}
                    />
                    حذف
                  </Row>
                </Col>
                <Col span={5}>
                  <div className="buyProduct">
                    <div className="priceStyle">
                      <div className="price">
                        <div className="discount">18%</div>
                        <s className="priceDiscount">
                          895/896
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </s>
                      </div>
                      <div className="price">
                        <div className="currency">تومان</div>
                        <div>
                          852/652
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
            <Card className="cardListProduct">
              <Row gutter={{ xs: 8, sm: 16, md: 40, lg: 40 }}>
                <Col span={5}>
                  <img
                    src="https://picsum.photos/200/300"
                    className="imgProduct"
                  />
                </Col>
                <Col span={14}>
                  <Row className="titleProduct">
                    مگا 3r آردویینو مگا 3r آردویینو
                  </Row>
                  <Row>
                    <Button style={{ color: '#fff', background: '#ff9800' }}>
                      3{' '}
                    </Button>{' '}
                    <DeleteOutlined
                      style={{ color: 'red', fontSize: '1.5em' }}
                    />
                    حذف
                  </Row>
                </Col>
                <Col span={5}>
                  <div className="buyProduct">
                    <div className="priceStyle">
                      <div className="price">
                        <div className="discount">18%</div>
                        <s className="priceDiscount">
                          895/896
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </s>
                      </div>
                      <div className="price">
                        <div className="currency">تومان</div>
                        <div>
                          852/652
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
            <Card className="cardListProduct">
              <Row gutter={{ xs: 8, sm: 16, md: 40, lg: 40 }}>
                <Col span={5}>
                  <img
                    src="https://picsum.photos/200/300"
                    className="imgProduct"
                  />
                </Col>
                <Col span={14}>
                  <Row className="titleProduct">
                    مگا 3r آردویینو مگا 3r آردویینو
                  </Row>
                  <Row>
                    <Button style={{ color: '#fff', background: '#ff9800' }}>
                      3{' '}
                    </Button>{' '}
                    <DeleteOutlined
                      style={{ color: 'red', fontSize: '1.5em' }}
                    />
                    حذف
                  </Row>
                </Col>
                <Col span={5}>
                  <div className="buyProduct">
                    <div className="priceStyle">
                      <div className="price">
                        <div className="discount">18%</div>
                        <s className="priceDiscount">
                          895/896
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </s>
                      </div>
                      <div className="price">
                        <div className="currency">تومان</div>
                        <div>
                          852/652
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
            <Card className="cardListProduct">
              <Row gutter={{ xs: 8, sm: 16, md: 40, lg: 40 }}>
                <Col span={5}>
                  <img
                    src="https://picsum.photos/200/300"
                    className="imgProduct"
                  />
                </Col>
                <Col span={14}>
                  <Row className="titleProduct">
                    مگا 3r آردویینو مگا 3r آردویینو
                  </Row>
                  <Row>
                    <Button style={{ color: '#fff', background: '#ff9800' }}>
                      3{' '}
                    </Button>{' '}
                    <DeleteOutlined
                      style={{ color: 'red', fontSize: '1.5em' }}
                    />
                    حذف
                  </Row>
                </Col>
                <Col span={5}>
                  <div className="buyProduct">
                    <div className="priceStyle">
                      <div className="price">
                        <div className="discount">18%</div>
                        <s className="priceDiscount">
                          895/896
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </s>
                      </div>
                      <div className="price">
                        <div className="currency">تومان</div>
                        <div>
                          852/652
                          {/* {item.price
                          .toFixed()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
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
              <Row className="finlaPay">
                <Button icon={<ShoppingOutlined />} className="addToCardBtn">
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
