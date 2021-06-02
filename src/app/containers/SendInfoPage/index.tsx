/**
 *
 * SendInfoPage
 *
 */

import React from 'react';

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

import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Typography,
  Modal,
  Checkbox,
} from 'antd';
import { sendInfoPageSaga } from './saga';

interface Props {
  className?: string;
}

export function SendInfoPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: sendInfoPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendInfoPage = useSelector(selectSendInfoPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledSendInfoPage
      className={`SendInfoPage ${className || ''}`}
      title={t(translations.pages.SendInfoPage.title)}
      description={t(translations.pages.SendInfoPage.description)}
    >
      <Card className="cardInfo">
        <div className="cardInfoTitle">اطلاعات ارسال</div>
        <Row gutter={32}>
          <Col xs={24} sm={24} md={18} lg={18} xl={18}>
            <div className="userAddressAdd">
              <PlusOutlined className="userAddressAddIcon" size={3} />
              افزودن آدرس جدید
            </div>

            <Card className="userAddressDetaileCard">
              <Row gutter={16}>
                <Col xs={24} sm={24} md={4} lg={4} xl={4} className="selected">
                  <CheckOutlined />
                  انتخاب شده
                </Col>
                <Col xs={24} sm={24} md={15} lg={15} xl={15}>
                  <p>
                    <span className="reciverName">نام آدرس: </span>
                    <span>خانه</span>
                  </p>
                  <p>
                    <span className="reciverName">نام تحویل گیرنده: </span>
                    <span> پویا جنانی</span>
                  </p>
                </Col>
                <Col xs={24} sm={24} md={5} lg={5} xl={5} className="moreVeiw">
                  مشاهده بیشتر
                  <DownOutlined />
                </Col>
              </Row>
              <hr className="solid" />
              <Row gutter={16}>
                <Col xs={24} sm={24} md={7} lg={4} xl={4} className="selected">
                  <Button className="selectBtn">انتخاب</Button>
                </Col>
                <Col xs={24} sm={24} md={17} lg={20} xl={20}>
                  <div className="moreBtnAddressCol">
                    <span>
                      مشاهده بیشتر
                      <DownOutlined />
                    </span>
                  </div>

                  <div>
                    <span className="reciverName">نام تحویل گیرنده: </span>
                    <span> پویا جنانی</span>
                  </div>
                  <p>
                    <span className="addressTitle">آدرس: </span>
                    <span>
                      {' '}
                      ،طبقه اول شرکت آما180تهران، طرشت شمالی، بلوار شهید تیموری،
                      پژوهشکده علوم و فناوری انرژی شریف ،پلاک 1459777611 تهران -
                      تهران
                    </span>
                  </p>
                  <p>
                    <span className="mobile">شماره تماس: </span>
                    <span> 09121112332</span>
                  </p>
                </Col>
              </Row>
              <hr className="solid" />
              <Row gutter={16}>
                <Col xs={24} sm={24} md={6} lg={4} xl={4} className="selected">
                  <Button className="selectBtn">انتخاب</Button>
                </Col>
                <Col xs={24} sm={24} md={14} lg={15} xl={15}>
                  <p>
                    <span className="reciverName">نام آدرس: </span>
                    <span>خانه</span>
                  </p>
                  <p>
                    <span className="reciverName">نام تحویل گیرنده: </span>
                    <span> پویا جنانی</span>
                  </p>
                </Col>
                <Col xs={24} sm={24} md={4} lg={5} xl={5} className="moreVeiw">
                  مشاهده بیشتر
                  <DownOutlined />
                </Col>
              </Row>
            </Card>

            <div className="cardInfoTitle">مرسولات</div>
            <div className="cardInfoTitle">لاسرا شور </div>
            <Card className="userAddressDetaileCard">
              <Row gutter={16}>
                <Col xs={24} sm={24} md={4} lg={4} xl={4} className="selected">
                  <CheckOutlined />
                  انتخاب شده
                </Col>
                <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                  <p>
                    <span className="reciverName">
                      {' '}
                      منطقه تهران22ارسال ارزان{' '}
                    </span>
                  </p>
                  <p>
                    <span>
                      {' '}
                      منطقه تهران با پیک موتوری22 روز پس از ثبت سفارش برای
                      2ارسال تا{' '}
                    </span>
                  </p>
                </Col>
              </Row>
              <hr className="solid" />
              <Row gutter={16}>
                <Col xs={24} sm={24} md={4} lg={4} xl={4} className="selected">
                  <Button className="selectBtn">انتخاب</Button>
                </Col>
                <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                  <p>
                    <span className="reciverName">
                      {' '}
                      منطقه تهران22ارسال ارزان{' '}
                    </span>
                  </p>
                  <p>
                    <span>
                      {' '}
                      منطقه تهران با پیک موتوری22 روز پس از ثبت سفارش برای
                      2ارسال تا{' '}
                    </span>
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            <Card className="productInfo">
              <div className="price">
                <div className="priceTitleDiv">قیمت محصولات</div>
                <div>
                  <span className="priceCurrencyDiv"> تومان </span>
                  <span
                    style={{
                      fontSize: '.9em',
                      color: '#989898',
                      fontWeight: 'bold',
                    }}
                  >
                    250.000
                  </span>
                </div>
              </div>
              <div className="price">
                <div className="priceTitleDiv">مجموع تخفیف</div>
                <div>
                  <span className="priceCurrencyDiv"> تومان </span>
                  <span
                    style={{
                      fontSize: '.9em',
                      color: '#DF1E26',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    250.000
                  </span>
                </div>
              </div>
              <div className="price">
                <div className="priceTitleDiv">هزینه ارسال</div>
                <div>
                  {' '}
                  {/* <span className="priceCurrencyDiv"> تومان </span>  */}
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
                <div className="priceTitleDiv">مبلغ قابل پرداخت</div>
                <div>
                  {' '}
                  <span className="priceCurrencyDiv"> تومان </span>{' '}
                  <span
                    style={{
                      fontSize: '1.3em',
                      color: '#000',
                      fontWeight: 'bold',
                    }}
                  >
                    {' '}
                    250.000
                  </span>
                </div>
              </div>

              <Row></Row>

              <Row className="actionBtn">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Button block className="Share">
                    ادامه خرید
                  </Button>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Button
                    icon={<ShoppingOutlined />}
                    block
                    className="addToCardBtn"
                  >
                    پرداخت نهایی
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <div className="role">
          <Checkbox
          // checked={this.state.checked}
          // disabled={this.state.disabled}
          // onChange={this.onChange}
          />

          <div className="roleTitle">
            (خواندن شرایط خدمات)شرایط خدمات را مطالعه کرده و بدون قید و شرط با
            آن موافقم.
          </div>
        </div>
        <div className="cardInfoTitle">درگاه پرداخت</div>
      </Card>
    </StyledSendInfoPage>
  );
}
