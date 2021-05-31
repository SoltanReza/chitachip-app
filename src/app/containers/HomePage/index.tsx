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
import { Tabs, Row, Col, Input, Button, Affix } from 'antd';
import { DateTimeViewer } from 'app/components/DateTimeViewer';
import { SliderProduct } from 'app/components/SliderProduct';
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
import { useCallback } from 'react';
import { useState } from 'react';

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
  const [changeAffixed, setChangeAffixed] = useState(false);

  const BrowseHomeList = useSelector(selectBrowseHomeList);

  const handleChangeAffixed = useCallback(affixed => {
    setChangeAffixed(affixed);
  }, []);

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
          {BrowseHomeList && BrowseHomeList.data && (
            <MenuSider categories={BrowseHomeList.data.categories} />
          )}
          {/* {changeAffixed ? (
            <Affix offsetTop={20} onChange={handleChangeAffixed}>
              <Button>sticky</Button>
            </Affix>
          ) : (
            <Affix offsetTop={20} onChange={handleChangeAffixed}>
              <Button>none</Button>
            </Affix>
          )} */}

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
          <div className="emptyBlocks"></div>

          <Swiper slidesPerView={10} spaceBetween={10} className="mySwiper">
            {BrowseHomeList.data &&
              BrowseHomeList.data.stories.map(story => (
                <SwiperSlide>
                  <div className="divStory">
                    <img src={story.image} className="imgStory" />
                  </div>{' '}
                </SwiperSlide>
              ))}
          </Swiper>

          {BrowseHomeList && BrowseHomeList.data && (
            <>
              <TopPackagesCarousel banners={BrowseHomeList.data.banners} />
              <Tabs defaultActiveKey="1">
                <TabPane tab={<span>پرفروش ترین ها</span>} key="1">
                  <SliderProduct product={BrowseHomeList.data.most_sold} />
                </TabPane>
                <TabPane tab={<span>جدیدترین</span>} key="2">
                  <SliderProduct product={BrowseHomeList.data.new_products} />
                </TabPane>
                <TabPane
                  tab={
                    <span>
                      پیشنهاد های ویژه <DateTimeViewer />
                    </span>
                  }
                  key="3"
                >
                  <SliderProduct product={BrowseHomeList.data.offers} />
                </TabPane>
              </Tabs>
            </>
          )}
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col xs={24} sm={24} md={10} lg={5} xl={5}>
          <Row gutter={16} className="rowWrraperRight">
            <Col span={24} className="rightBanner">
              <img
                src="images/bazargani.PNG"
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
              <img src="images/aboutus.PNG" className="rightBannerImg" alt="" />
            </Col>
          </Row>
          <Row gutter={16} className="rowWrraperRight">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              {BrowseHomeList && BrowseHomeList.data && (
                <UnitCarouselRight
                  product={BrowseHomeList.data.slider_products}
                />
              )}
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={19} xl={19}>
          <h1 className="titleBannerLeft">قطعات جانبی آردوینو</h1>
          <Row gutter={[16, 24]}>
            <Col className="allViewBannerLeft" span={24}>
              مشاهده همه
            </Col>
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
          </Row>
          <Row gutter={[16, 24]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="sliceCard">
              {BrowseHomeList && BrowseHomeList.data && (
                <>
                  <a
                    href={BrowseHomeList.data.banners.url_third}
                    target="blank"
                  ></a>
                  <img
                    src={BrowseHomeList.data.banners.third_banner}
                    className="sliceCardImg"
                    alt=""
                  />
                </>
              )}
            </Col>
          </Row>
          <h1 className="titleBannerLeft">قطعات جانبی آردوینو</h1>
          <Row gutter={[16, 24]}>
            <Col className="allViewBannerLeft" span={24}>
              مشاهده همه
            </Col>
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
              <div className="titleProductCount">
                بیش از 10000 محصول در 100 بسته بندی مختلف
              </div>
              <Row gutter={16}>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="colProductCount"
                >
                  <Row>
                    <img src="images/icons-chitachip/Group 25.png" />
                  </Row>
                  <Row>
                    <Col span={24}>تجهیزات بیسیم</Col>
                  </Row>
                  <Row>
                    <Col span={24} className="ProductCount">
                      +1000 کالا
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="colProductCount"
                >
                  <Row>
                    <Col span={24}>
                      <img src="images/icons-chitachip/Group 23.png" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>سنسور</Col>
                  </Row>
                  <Row>
                    <Col span={24} className="ProductCount">
                      +1000 کالا
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="colProductCount"
                >
                  <Row>
                    <Col span={24}>
                      <img src="images/icons-chitachip/Group 24.png" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>موتور</Col>
                  </Row>
                  <Row>
                    <Col span={24} className="ProductCount">
                      +1000 کالا
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="colProductCount"
                >
                  <Row>
                    <Col span={24}>
                      <img src="images/icons-chitachip/Group 21.png" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>ماژول / مبدل</Col>
                  </Row>
                  <Row>
                    <Col span={24} className="ProductCount">
                      +1000 کالا
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  xl={4}
                  className="colProductCount"
                >
                  <Row>
                    <Col span={24}>
                      <img src="images/icons-chitachip/Group 23.png" />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24}>بردهای توسعه</Col>
                  </Row>
                  <Row>
                    <Col span={24} className="ProductCount">
                      +1000 کالا
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledHomePage>
  );
}
