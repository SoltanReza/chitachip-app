/**
 *
 * PaymentCallbackPage
 *
 */

import { Col, Row } from 'antd';
import { url } from 'inspector';
import { translations } from 'locales/i18n';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { verifyPaymentApi } from '../App/api';
import { VerifyPaymentResponse } from '../App/types';
import { paymentCallbackPageSaga } from './saga';
import { selectPaymentCallbackPage } from './selectors';
import { reducer, sliceKey } from './slice';
import { StyledPaymentCallbackPage } from './styles';

interface Props {
  className?: string;
}

export function PaymentCallbackPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: paymentCallbackPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const paymentCallbackPage = useSelector(selectPaymentCallbackPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [bilData, setBillData] = useState<VerifyPaymentResponse>();
  const params = new URLSearchParams(window.location.search);
  console.log(params.get('bankid'));
  console.log(params.get('status'));
  console.log(params.get('inv'));
  useEffect(() => {
    if (params) {
      if (params.get('status') === 'ok' && !bilData) {
        verifyPaymentApi({
          bankid: params.get('bankid'),
          inv: params.get('inv'),
        })
          .then(data => {
            if (data) {
              setBillData(data);
            }
          })
          .catch(() => {});
      }
    }
  }, [bilData, params]);

  return (
    <StyledPaymentCallbackPage
      className={`PaymentCallbackPage ${className || ''}`}
      title={t(translations.pages.PaymentCallbackPage.title)}
    >
      <Row>
        <Col
          xs={24}
          sm={24}
          md={3}
          lg={3}
          xl={3}
          className="rightBodyBillWrapper"
          style={{
            backgroundImage:
              'url( http://chitachip.com/static/media/back_img.c115b44c.png )',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* <div className="rightBodyBill"> */}
          <div
            className="rightBodyBillLogo"
            style={{
              backgroundImage:
                'url(http://chitachip.com/static/media/Chitachip.11d23d42.svg )',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {' '}
            .
          </div>

          <div className="rightBodyBillcontactus">f</div>
          {/* </div> */}
        </Col>

        <Col xs={24} sm={24} md={21} lg={21} xl={21} className="leftBodyBill">
          <Row>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} className="billTitle">
              <p>صورت حساب</p>
              <p>فروش کالا و خدمات</p>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16} className="billDate">
              <p>تاریخ: {bilData?.data.date} </p>
              <p>مرجع سفارش: {bilData?.data.reference}</p>
              <p>شماره فاکتور: {bilData?.data.invoiceNumber}</p>
            </Col>
          </Row>
          <Row className="customerDescription">
            <Col span={24}>مشخصات فروشنده</Col>

            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              نام فروشنده:{bilData?.data.seller}
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              استان و شهر:{bilData?.data.province}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="billDate">
              کد پستی: {bilData?.data.code_posti_seller}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="billDate">
              نشانی:{bilData?.data.address_seller}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="billDate">
              شماره تماس:{bilData?.data.phone_seller}
            </Col>
          </Row>
          <Row className="BuyerDescription">
            <Col span={24}>مشخصات خریدار(نشانی تحویل)</Col>

            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              نام خریدار:{bilData?.data.buyer}
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              استان و شهر:{bilData?.data.province_buyer}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="billDate">
              کد پستی:{bilData?.data.codeposti_buyer}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="billDate">
              نشانی:{bilData?.data.address_buyer}
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              شماره تماس:{bilData?.data.phone_buyer}
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="billDate">
              همراه:{bilData?.data.mobile_buyer}
            </Col>
          </Row>
          <Row>
            <Col
              xs={24}
              sm={24}
              md={2}
              lg={2}
              xl={2}
              className="billTableHeader"
            >
              ردیف
            </Col>
            <Col
              xs={24}
              sm={24}
              md={4}
              lg={4}
              xl={4}
              className="billTableHeader"
            >
              تصویر کالا
            </Col>
            <Col
              xs={24}
              sm={24}
              md={3}
              lg={3}
              xl={3}
              className="billTableHeader"
            >
              کدکالا
            </Col>
            <Col
              xs={24}
              sm={24}
              md={4}
              lg={4}
              xl={4}
              className="billTableHeader"
            >
              شرح کالا یا خدمات
            </Col>
            <Col
              xs={24}
              sm={24}
              md={3}
              lg={3}
              xl={3}
              className="billTableHeader"
            >
              مبلغ پایه
            </Col>
            <Col
              xs={24}
              sm={24}
              md={2}
              lg={2}
              xl={2}
              className="billTableHeader"
            >
              مقدار
            </Col>
            <Col
              xs={24}
              sm={24}
              md={3}
              lg={3}
              xl={3}
              className="billTableHeader"
            >
              مبلغ واحد
            </Col>
            <Col
              xs={24}
              sm={24}
              md={2}
              lg={2}
              xl={2}
              className="billTableHeader"
            >
              مبلغ کل
            </Col>
          </Row>
          {bilData?.data.prs.map((item, index) => (
            <Row>
              <Col
                xs={24}
                sm={24}
                md={2}
                lg={2}
                xl={2}
                className="billTableBody"
              >
                {index + 1}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={4}
                lg={4}
                xl={4}
                className="billTableBody"
              >
                <img src={item.image} width="50px" />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={3}
                lg={3}
                xl={3}
                className="billTableBody"
              >
                {' '}
                {item.code}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={4}
                lg={4}
                xl={4}
                className="billTableBody"
              >
                {' '}
                {item.name}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={3}
                lg={3}
                xl={3}
                className="billTableBody"
              >
                {' '}
                {item.base_price}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={2}
                lg={2}
                xl={2}
                className="billTableBody"
              >
                {item.qty}{' '}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={3}
                lg={3}
                xl={3}
                className="billTableBody"
              >
                {item.price}
              </Col>
              <Col
                xs={24}
                sm={24}
                md={2}
                lg={2}
                xl={2}
                className="billTableBody"
              >
                {item.total_price}
              </Col>
            </Row>
          ))}

          <Row>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
              <Row className="billPriceTitle">جمع بندی</Row>
              <Row className="billPrice">
                تخفیف ها: {bilData?.data.total_discount}{' '}
              </Row>
              <Row className="billPrice">
                هزینه ارسال: {bilData?.data.shipment}
              </Row>
              <Row className="billPrice">
                جمع کل بدون مالیات: {bilData?.data.total_amount}
              </Row>
              <Row className="billPrice">
                جمع مالیات: {bilData?.data.amount_tax}
              </Row>
              <Row className="billPriceSum">
                {' '}
                مجموع مبلغ نهایی(تومان): {bilData?.data.total_amount_tax}
              </Row>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
              <Row className="billPriceTitle"> روش های پرداخت</Row>
              <Row className="billPrice">
                <span> {bilData?.data.payment_type} </span>

                <span>654/89تومان</span>
              </Row>
              <Row className="billPrice">
                <span>روش ارسال: </span>

                <span className="billSendType">
                  {bilData?.data.delivery_type}
                </span>
              </Row>
              <Row className="billPrice">
                <span>توضیحات:</span>

                <span>{bilData?.data.description}</span>
              </Row>
            </Col>
          </Row>
          <Row className="billFooter">
            <b>توجه: </b>
            <span>
              کالاهای الکترونیکی تحت هیچ شرایطی تعویض یا بازپس گرفته نمیشوند.
            </span>
          </Row>
        </Col>
      </Row>
    </StyledPaymentCallbackPage>
  );
}
