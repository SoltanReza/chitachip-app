/**
 *
 * SendInfoPage
 *
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledSendInfoPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectSendInfoPage } from './selectors';
import {
  PlusOutlined,
  ShareAltOutlined,
  ShoppingOutlined,
  WarningOutlined,
  StarFilled,
  HeartFilled,
  DownOutlined,
  CheckOutlined,
  UpOutlined,
} from '@ant-design/icons';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Input,
  Button,
  Card,
  Col,
  Row,
  Form,
  Modal,
  Checkbox,
  message,
} from 'antd';
import { sendInfoPageSaga } from './saga';
import {
  selectAddAddress,
  selectBrowseAddress,
  selectBrowseBasket,
} from '../App/selectors';
import { appActions } from '../App/slice';
import { sendDateApi } from './api';

import { SendDateResponse } from './types';

import { registerOrderApi } from '../App/api';
import { useWindowWidth } from '@react-hook/window-size';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { ProductCard } from 'app/components/ProductCard';

interface Props {
  className?: string;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export function SendInfoPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: sendInfoPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendInfoPage = useSelector(selectSendInfoPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [showMoreView, setShowMoreView] = useState(false);
  const [showLessView, setShowLessView] = useState(false);
  const [currentElement, setCurrentElement] = useState('');
  const [selectAddress, setSelectAddress] = useState('');
  const [selectDate, setSelectDate] = useState('');
  const [selectDateName, setSelectDateName] = useState('');
  const [selectTypeSend, setSelectTypeSend] = useState('');
  const [sendDate, setSendDate] = useState<SendDateResponse>();
  const onlyWidth = useWindowWidth();
  let price = 0;
  const addAddressData = useSelector(selectAddAddress);
  const addressData = useSelector(selectBrowseAddress);
  const BasketData = useSelector(selectBrowseBasket);
  const loading = useMemo(() => !!addAddressData.params, [
    addAddressData.params,
  ]);

  const handleSubmit = useCallback(
    values => {
      dispatch(
        appActions.addAddress({
          receiver_mobile: values.receiver_mobile,
          receiver_name: values.receiver_name,
          code_posti: values.code_posti,
          address: values.address,
          name: values.name,
        }),
      );
    },
    [dispatch],
  );

  const handleClearData = useCallback(() => {
    dispatch(appActions.addAddressClear());
  }, [dispatch]);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);
  const handleCloseEditModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleShowMoreView = useCallback(e => {
    const data = e.currentTarget.dataset as any;

    setCurrentElement(data.id);
  }, []);
  const handleCloseMoreView = useCallback(() => {
    setCurrentElement('');
  }, []);
  const handleSelectAddress = useCallback(e => {
    const data = e.currentTarget.dataset as any;
    setSelectAddress(data.id);
  }, []);
  const handleSelectedAddress = useCallback(() => {
    setSelectAddress('');
  }, []);
  const handleSelectDate = useCallback(e => {
    const data = e.currentTarget.dataset as any;
    setSelectDate(data.id);
    setSelectDateName(data.name);
  }, []);
  const handleSelectTypeSend = useCallback(e => {
    const data = e.currentTarget.dataset as any;
    setSelectTypeSend(data.id);
  }, []);
  const handleSelectedTypeSend = useCallback(() => {
    setSelectTypeSend('');
  }, []);
  const handleRegisterOrder = useCallback(() => {
    if (selectAddress === '') {
      message.info('???????? ???????? ???? ???????????? ????????????');
    }
    if (selectDateName === '') {
      message.info('???????? ?????????? ???? ???????????? ????????????');
    }
    if (selectTypeSend === '') {
      message.info('???????? ?????? ?????????? ???? ???????????? ????????????');
    } else if (BasketData.data) {
      registerOrderApi({
        address_id: selectAddress,
        date: selectDateName,
        date_id: selectDate,
        type: selectTypeSend,
        basket: BasketData.data.data,
      })
        .then(data => {
          console.log(data.url);
          if (data) {
            window.location.href = data.url;
          }
        })
        .catch(() => {});
    }
  }, [
    BasketData.data,
    selectAddress,
    selectDate,
    selectDateName,
    selectTypeSend,
  ]);
  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );

  useEffect(() => {
    if (addAddressData.data) {
      dispatch(appActions.addAddressClear());
      dispatch(appActions.browseAddress({}));
      handleCloseEditModal();
    }
  }, [addAddressData.data, dispatch, handleCloseEditModal]);
  useEffect(() => {
    dispatch(appActions.browseAddress({}));
  }, [currentElement, dispatch]);
  useEffect(() => {
    sendDateApi({})
      .then(data => {
        if (data) {
          setSendDate(data);
        }
      })
      .catch(() => {});
  }, []);
  console.log(addressData && addressData.data && addressData.data.data);
  return (
    <StyledSendInfoPage
      className={`SendInfoPage ${className || ''}`}
      title={t(translations.pages.SendInfoPage.title)}
      description={t(translations.pages.SendInfoPage.description)}
    >
      <Card className="cardInfo">
        <div className="cardInfoTitle">?????????????? ??????????</div>
        <Row gutter={32}>
          <Col xs={24} sm={24} md={19} lg={19} xl={19}>
            <div className="userAddressAdd" onClick={handleShowModal}>
              <PlusOutlined className="userAddressAddIcon" size={3} />
              ???????????? ???????? ????????
            </div>

            <Card className="userAddressDetaileCard">
              {addressData &&
                addressData.data &&
                addressData.data.data.map(item => (
                  <>
                    <Row className="userAdressItem" gutter={16}>
                      <Col
                        xs={24}
                        sm={24}
                        md={4}
                        lg={4}
                        xl={4}
                        className="selected"
                      >
                        {selectAddress === item.id ? (
                          <div onClick={handleSelectedAddress}>
                            <CheckOutlined />
                            ???????????? ??????
                          </div>
                        ) : (
                          <div
                            className="selected"
                            data-id={item.id}
                            onClick={handleSelectAddress}
                          >
                            <Button className="selectBtn">????????????</Button>
                          </div>
                        )}
                      </Col>
                      <Col xs={24} sm={24} md={15} lg={15} xl={15}>
                        <p>
                          <span className="reciverName">?????? ????????: </span>
                          <span>{item.name}</span>
                        </p>
                        {currentElement === item.id && (
                          <p>
                            <span className="addressTitle">????????: </span>
                            <span>{item.address}</span>
                          </p>
                        )}

                        <p>
                          <span className="reciverName">
                            ?????? ?????????? ????????????:{' '}
                          </span>
                          <span>{item.receiver_name}</span>
                        </p>
                        {currentElement === item.id && (
                          <p>
                            <span className="mobile">?????????? ????????: </span>
                            <span> 09121112332</span>
                          </p>
                        )}
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={5}
                        lg={5}
                        xl={5}
                        className="moreVeiw"
                      >
                        {currentElement === item.id ? (
                          <p
                            className="clickable"
                            onClick={handleCloseMoreView}
                          >
                            ???????????? ????????
                            <UpOutlined />
                          </p>
                        ) : (
                          <p
                            className="clickable"
                            data-id={item.id}
                            onClick={handleShowMoreView}
                          >
                            ???????????? ??????????
                            <DownOutlined />
                          </p>
                        )}
                      </Col>
                    </Row>
                  </>
                ))}
            </Card>

            <div className="cardInfoTitle">??????????????</div>

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
              style={{ padding: '20px' }}
            >
              {BasketData &&
                BasketData.data &&
                BasketData.data.data.products.map(item => {
                  price += Number(
                    item.price.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ''),
                  );
                  return (
                    <SwiperSlide>
                      <ProductCard data={item} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>

            <div className="cardInfoTitle">?????? ??????????</div>
            <Card className="userAddressDetaileCard">
              {sendDate &&
                sendDate.shipment.map(item => (
                  <Row className="userAdressItem" gutter={16}>
                    <Col
                      xs={24}
                      sm={24}
                      md={4}
                      lg={4}
                      xl={4}
                      className="selected"
                    >
                      {selectTypeSend === item.id ? (
                        <div data-id={item.id} onClick={handleSelectedTypeSend}>
                          <CheckOutlined />
                          ???????????? ??????
                        </div>
                      ) : (
                        <div>
                          <Button
                            className="selectBtn"
                            data-id={item.id}
                            onClick={handleSelectTypeSend}
                          >
                            ????????????
                          </Button>
                        </div>
                      )}
                    </Col>

                    <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                      <p>
                        <span className="reciverName"> {item.title}</span>
                      </p>
                      <p>
                        <span>{item.price} ??????????</span>
                      </p>
                    </Col>
                  </Row>
                ))}

              {/* <Row gutter={16}>
                <Col xs={24} sm={24} md={4} lg={4} xl={4} className="selected">
                  <Button className="selectBtn">????????????</Button>
                </Col>
                <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                  <p>
                    <span className="reciverName">
                      {' '}
                      ?????????? ??????????22?????????? ??????????{' '}
                    </span>
                  </p>
                  <p>
                    <span>
                      {' '}
                      ?????????? ?????????? ???? ?????? ????????????22 ?????? ???? ???? ?????? ?????????? ????????
                      2?????????? ????{' '}
                    </span>
                  </p>
                </Col>
              </Row> */}
            </Card>

            <div className="cardInfoTitle">?????????? ??????????</div>
            <Card className="timeDateCard">
              <Row className="timeDateRow">
                {sendDate &&
                  sendDate.date &&
                  sendDate.date.map(item => (
                    <Col
                      xs={24}
                      sm={24}
                      md={4}
                      lg={4}
                      xl={4}
                      className={`${
                        selectDate !== item.id
                          ? 'timeDateCol'
                          : 'timeDateColSelected'
                      }`}
                      data-id={item.id}
                      data-name={item.date}
                      onClick={handleSelectDate}
                    >
                      {item.date}
                    </Col>
                  ))}
              </Row>
            </Card>

            <div className="role">
              <Checkbox
              // checked={this.state.checked}
              // disabled={this.state.disabled}
              // onChange={this.onChange}
              />

              <a href="/rules" className="roleTitle">
                (???????????? ?????????? ??????????)?????????? ?????????? ???? ???????????? ???????? ?? ???????? ?????? ?? ??????
                ???? ???? ????????????.
              </a>
            </div>
            <div className="cardInfoTitle">?????????? ????????????</div>
          </Col>
          <Col
            className="productInfoWrapper"
            xs={24}
            sm={24}
            md={5}
            lg={5}
            xl={5}
          >
            <Card className="productInfo">
              <div className="price">
                <div className="priceTitleDiv">???????? ??????????????</div>
                <div>
                  <span className="priceCurrencyDiv"> ?????????? </span>
                  <span
                    style={{
                      fontSize: '.9em',
                      color: '#989898',
                      fontWeight: 'bold',
                    }}
                  >
                    {price}
                  </span>
                </div>
              </div>
              <div className="price">
                <div className="priceTitleDiv">?????????? ??????????</div>
                <div>
                  <span className="priceCurrencyDiv"> ?????????? </span>
                  <span
                    style={{
                      fontSize: '.9em',
                      color: '#DF1E26',
                      fontWeight: 'bold',
                    }}
                  >
                    {price}
                  </span>
                </div>
              </div>
              <div className="price">
                <div className="priceTitleDiv">?????????? ??????????</div>
                <div>
                  {' '}
                  {/* <span className="priceCurrencyDiv"> ?????????? </span>  */}
                  <span
                    style={{
                      fontSize: '.9em',
                      color: '#989898',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    -
                  </span>
                </div>
              </div>
              <div className="price">
                <div className="priceTitleDiv">???????? ???????? ????????????</div>
                <div>
                  {' '}
                  <span className="priceCurrencyDiv"> ?????????? </span>{' '}
                  <span
                    style={{
                      fontSize: '1.3em',
                      color: '#000',
                      fontWeight: 'bold',
                    }}
                  >
                    {price}
                  </span>
                </div>
              </div>

              <Row></Row>

              <Row className="actionBtn">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Button block className="Share">
                    ?????????? ????????
                  </Button>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Button
                    icon={<ShoppingOutlined />}
                    block
                    className="addToCardBtn"
                    onClick={handleRegisterOrder}
                  >
                    ???????????? ??????????
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>
      <Modal
        title="???????????? ????????"
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseEditModal}
        afterClose={handleClearData}
      >
        <Form className="editCurrencyForm" onFinish={handleSubmit}>
          <Form.Item name="receiver_name">
            <Input
              type="text"
              placeholder="?????? ?????????? ????????????"
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="receiver_mobile">
            <Input type="text" placeholder="????????????'" readOnly={loading} />
          </Form.Item>
          <Form.Item name="code_posti">
            <Input type="text" placeholder="???? ????????" readOnly={loading} />
          </Form.Item>
          <Form.Item name="address">
            <Input type="text" placeholder="????????" readOnly={loading} />
          </Form.Item>
          <Form.Item name="name">
            <Input type="text" placeholder="?????? ????????" readOnly={loading} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              ???????????? ????????
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledSendInfoPage>
  );
}
