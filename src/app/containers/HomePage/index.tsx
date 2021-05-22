/**
 *
 * HomePage
 *
 */
import {
  CustomerServiceOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Tabs, Row, Col, Input, Button } from 'antd';
import { DateTimeViewer } from 'app/components/DateTimeViewer';
import { MenuSider } from 'app/components/MenuSider';
import { TopPackagesCarousel } from 'app/containers/HomePage/components/TopPackagesCarousel';
import { translations } from 'locales/i18n';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { selectBrowseHomeList } from '../App/selectors';
import { appActions } from '../App/slice';
import { Offer } from './components/Offer';
import { homePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledHomePage } from './styles';
import { UnitCarouselRight } from './UnitCarouselRight';

interface Props {
  className?: string;
}
const { TabPane } = Tabs;
/**
 * Component is described here.
 *
 * @example ./extra.examples.md
//  */

export function HomePage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const BrowseHomeList = useSelector(selectBrowseHomeList);

  useEffect(() => {
    dispatch(appActions.browseHomeList({}));
  }, [dispatch]);

  return (
    <StyledHomePage
      className={`HomePage ${className || ''}`}
      title={t(translations.pages.HomePage.title)}
      description={t(translations.pages.HomePage.description)}
    >
      <Row gutter={[16, 24]}>
        <Col xs={4} sm={4} md={6} lg={6} xl={6}>
          <MenuSider />

          <div
            // ref={stickyRef}
            className="contactUs"
          >
            <div className="online">
              پشتیبانی آنلاین
              <span>
                <CustomerServiceOutlined />
              </span>
            </div>
            <div>تماس با ما</div>
            <div className="socialMedia">
              <WhatsAppOutlined />
            </div>
            <div className="socialMedia">
              <InstagramOutlined />
            </div>
          </div>
        </Col>
        <Col xs={20} sm={20} md={6} lg={18} xl={18}>
          <Swiper slidesPerView={10} spaceBetween={10} className="mySwiper">
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
            <SwiperSlide>
              <div className="divStory"></div>{' '}
            </SwiperSlide>
          </Swiper>
          {BrowseHomeList && BrowseHomeList.data && (
            <>
              <TopPackagesCarousel
                categoryBanner={BrowseHomeList.data.category_banner}
                productBanner={BrowseHomeList.data.product_banner}
              />
              <Tabs defaultActiveKey="1">
                <TabPane tab={<span>پرفروش ترین ها</span>} key="1">
                  <Offer product={BrowseHomeList.data.offers} />
                </TabPane>
                <TabPane tab={<span>جدیدترین</span>} key="2">
                  <Offer product={BrowseHomeList.data.offers} />
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      پیشنهاد های ویژه <DateTimeViewer />
                    </span>
                  }
                  key="3"
                >
                  <Offer product={BrowseHomeList.data.offers} />
                </TabPane>
              </Tabs>
            </>
          )}
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col xs={24} sm={24} md={10} lg={6} xl={6}>
          <Row gutter={16} className="rowWrraperRight">
            <Col span={24} className="rightBanner">
              <img
                src="https://picsum.photos/200/300"
                className="rightBannerImg"
                alt=""
              />
            </Col>
          </Row>
          <Row gutter={16} className="rowWrraperRight">
            <Col span={24} className="rightContactUs">
              {' '}
              <h2>با ما در تماس باشید</h2>
            </Col>
            <Col span={16}>
              <Input
                placeholder="ایمیل خود را وارد نمایید"
                className="newsInputStyle"
              />
            </Col>
            <Col span={8}>
              <Button type="primary" shape="round">
                تایید
              </Button>
            </Col>
          </Row>
          <Row gutter={16} className="rowWrraperRight">
            <Col span={24} className="rightBanner">
              <img
                src="https://picsum.photos/seed/picsum/200/300"
                className="rightBannerImg"
                alt=""
              />
            </Col>
          </Row>
          <Row gutter={16} className="rowWrraperRight">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              {BrowseHomeList && BrowseHomeList.data && (
                <UnitCarouselRight product={BrowseHomeList.data.offers} />
              )}
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={18} xl={18}>
          <h1 className="titleBannerLeft">قطعات جانبی آردوینو</h1>
          <Row gutter={[16, 24]}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="sliceCard">
              <img src="images/noImg.jpg" className="sliceCardImg" alt="" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="sliceCard">
              <img src="images/noImg.jpg" className="sliceCardImg" alt="" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="sliceCard">
              <img src="images/noImg.jpg" className="sliceCardImg" alt="" />
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="sliceCard">
              <img src="images/package.png" className="sliceCardImg" alt="" />
            </Col>
          </Row>
          <h1 className="titleBannerLeft">قطعات جانبی آردوینو</h1>
          <Row gutter={[16, 24]}>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="sliceCard">
              <img src="images/noImg.jpg" className="sliceCardImg" alt="" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="sliceCard">
              <img src="images/noImg.jpg" className="sliceCardImg" alt="" />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8} className="sliceCard">
              <img src="images/noImg.jpg" className="sliceCardImg" alt="" />
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={24}
              className="productsCount"
            >
              fgh
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledHomePage>
  );
}
