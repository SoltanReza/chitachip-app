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
              <p>???????? ????????</p>
              <p>???????? ???????? ?? ??????????</p>
            </Col>
            <Col xs={24} sm={24} md={16} lg={16} xl={16} className="billDate">
              <p>??????????: {bilData?.data.date} </p>
              <p>???????? ??????????: {bilData?.data.reference}</p>
              <p>?????????? ????????????: {bilData?.data.invoiceNumber}</p>
            </Col>
          </Row>
          <Row className="customerDescription">
            <Col span={24}>???????????? ??????????????</Col>

            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              ?????? ??????????????:{bilData?.data.seller}
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              ?????????? ?? ??????:{bilData?.data.province}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="billDate">
              ???? ????????: {bilData?.data.code_posti_seller}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="billDate">
              ??????????:{bilData?.data.address_seller}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="billDate">
              ?????????? ????????:{bilData?.data.phone_seller}
            </Col>
          </Row>
          <Row className="BuyerDescription">
            <Col span={24}>???????????? ????????????(?????????? ??????????)</Col>

            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              ?????? ????????????:{bilData?.data.buyer}
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              ?????????? ?? ??????:{bilData?.data.province_buyer}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className="billDate">
              ???? ????????:{bilData?.data.codeposti_buyer}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="billDate">
              ??????????:{bilData?.data.address_buyer}
            </Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className="billDate">
              ?????????? ????????:{bilData?.data.phone_buyer}
            </Col>
            <Col xs={24} sm={24} md={18} lg={18} xl={18} className="billDate">
              ??????????:{bilData?.data.mobile_buyer}
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
              ????????
            </Col>
            <Col
              xs={24}
              sm={24}
              md={4}
              lg={4}
              xl={4}
              className="billTableHeader"
            >
              ?????????? ????????
            </Col>
            <Col
              xs={24}
              sm={24}
              md={3}
              lg={3}
              xl={3}
              className="billTableHeader"
            >
              ????????????
            </Col>
            <Col
              xs={24}
              sm={24}
              md={4}
              lg={4}
              xl={4}
              className="billTableHeader"
            >
              ?????? ???????? ???? ??????????
            </Col>
            <Col
              xs={24}
              sm={24}
              md={3}
              lg={3}
              xl={3}
              className="billTableHeader"
            >
              ???????? ????????
            </Col>
            <Col
              xs={24}
              sm={24}
              md={2}
              lg={2}
              xl={2}
              className="billTableHeader"
            >
              ??????????
            </Col>
            <Col
              xs={24}
              sm={24}
              md={3}
              lg={3}
              xl={3}
              className="billTableHeader"
            >
              ???????? ????????
            </Col>
            <Col
              xs={24}
              sm={24}
              md={2}
              lg={2}
              xl={2}
              className="billTableHeader"
            >
              ???????? ????
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
              <Row className="billPriceTitle">?????? ????????</Row>
              <Row className="billPrice">
                ?????????? ????: {bilData?.data.total_discount}{' '}
              </Row>
              <Row className="billPrice">
                ?????????? ??????????: {bilData?.data.shipment}
              </Row>
              <Row className="billPrice">
                ?????? ???? ???????? ????????????: {bilData?.data.total_amount}
              </Row>
              <Row className="billPrice">
                ?????? ????????????: {bilData?.data.amount_tax}
              </Row>
              <Row className="billPriceSum">
                {' '}
                ?????????? ???????? ??????????(??????????): {bilData?.data.total_amount_tax}
              </Row>
            </Col>
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
              <Row className="billPriceTitle"> ?????? ?????? ????????????</Row>
              <Row className="billPrice">
                <span> {bilData?.data.payment_type} </span>

                <span>654/89??????????</span>
              </Row>
              <Row className="billPrice">
                <span>?????? ??????????: </span>

                <span className="billSendType">
                  {bilData?.data.delivery_type}
                </span>
              </Row>
              <Row className="billPrice">
                <span>??????????????:</span>

                <span>{bilData?.data.description}</span>
              </Row>
            </Col>
          </Row>
          <Row className="billFooter">
            <b>????????: </b>
            <span>
              ?????????????? ???????????????????? ?????? ?????? ???????????? ?????????? ???? ?????????? ?????????? ??????????????.
            </span>
          </Row>
        </Col>
      </Row>
    </StyledPaymentCallbackPage>
  );
}
