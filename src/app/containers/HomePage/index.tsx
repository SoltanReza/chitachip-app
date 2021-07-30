/**
 *
 * HomePage
 *
 */
import {
  CustomerServiceOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  StarFilled,
  HeartFilled,
  HeartOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Tabs, Row, Col, Input, Button, message } from 'antd';
import { DateTimeViewer } from 'app/components/DateTimeViewer';
import { SliderProduct } from 'app/components/SliderProduct';
import { ProductCard } from 'app/components/ProductCard';

import { MenuSider } from 'app/components/MenuSider';
import { TopPackagesCarousel } from 'app/containers/HomePage/components/TopPackagesCarousel';
import { translations } from 'locales/i18n';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import 'swiper/swiper-bundle.css';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import {
  selectAddToBasket,
  selectAuth,
  selectBrowseHomeList,
  selectLikeProduct,
} from '../App/selectors';
import { appActions } from '../App/slice';
import { Offer } from './components/Offer';
import { homePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledHomePage, Tab } from './styles';
import { UnitCarouselRight } from './UnitCarouselRight';
import { useCallback } from 'react';
import { useState } from 'react';
import { StoryProduct } from 'app/components/StoryProduct';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { useWindowWidth } from '@react-hook/window-size';
import { Swiper, SwiperSlide } from 'swiper/react';

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
  const [changeMail, setChangeMail] = useState('');
  const [tab, setTab] = useState('best');
  const onlyWidth = useWindowWidth();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [quantity, setquantity] = useState(0);
  const [currentElement, setCurrentElement] = useState('');

  const authData = useSelector(selectAuth);
  const addToBasketData = useSelector(selectAddToBasket);
  const BrowseHomeList = useSelector(selectBrowseHomeList);
  const likeData = useSelector(selectLikeProduct);

  const loading = useMemo(() => !!BrowseHomeList.params, [
    BrowseHomeList.params,
  ]);
  const loadingAddToBasket = useMemo(() => !!addToBasketData.params, [
    addToBasketData.params,
  ]);

  const handleChangeAffixed = useCallback(affixed => {
    setChangeAffixed(affixed);
  }, []);
  const handleChangeMail = useCallback(e => {
    setChangeMail(e.target.value);
  }, []);
  const handleSendMail = useCallback(
    e => {
      dispatch(
        appActions.sendEmailNews({
          email: changeMail,
        }),
      );
    },
    [changeMail, dispatch],
  );
  const handleVoteLike = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      if (authData) {
        if (authData.data) {
          dispatch(appActions.likeProduct({ product_id: data.id }));
        } else {
          setIsModalVisible(true);
        }
      }
    },
    [authData, dispatch],
  );
  const handleMinusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(data.id);
      dispatch(
        appActions.addToBasket({
          product_id: data.id,
          quantity: -1,
        }),
      );
    },
    [dispatch],
  );
  const handlePlusQuantity = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      setCurrentElement(data.id);
      dispatch(
        appActions.addToBasket({
          product_id: data.id,
          quantity: 1,
        }),
      );
    },
    [dispatch],
  );

  // const handleAddToBasket = useCallback(
  //   e => {
  //     const data = e.currentTarget.dataset as any;
  //     setCurrentElement(data.product_id);
  //     if (quantity <= 0) {
  //       message.warning('لطفا تعداد محصول را مشخص کنید');
  //     } else {
  //       dispatch(
  //         appActions.addToBasket({
  //           product_id: data.product_id,
  //           quantity: quantity,
  //         }),
  //       );
  //       setquantity(0);
  //     }
  //   },
  //   [dispatch, quantity],
  // );

  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );

  useEffect(() => {
    dispatch(appActions.browseHomeList({}));
  }, [dispatch]);

  useEffect(() => {
    if (addToBasketData.data?.status === 402) {
      // message.info('ظرفیت این محصول به اتمام رسیده است');
    }
  }, [addToBasketData]);

  const handleRoutToProductList = useCallback(data => {
    redirect(Routes.productList, {
      item: data,
      catId: undefined,
      subId: undefined,
      catName: undefined,
    });
  }, []);

  return (
    <StyledHomePage
      className={`HomePage ${className || ''}`}
      title={t(translations.pages.HomePage.title)}
      description={t(translations.pages.HomePage.description)}
    >
      {(loading || loadingAddToBasket) && (
        <div id="preloader">
          <div id="status">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      )}
      <Row gutter={[16, 24]}>
        <Col xs={0} sm={0} md={5} lg={5} xl={5}>
          {BrowseHomeList && BrowseHomeList.data && (
            <MenuSider
              collapse={false}
              categories={BrowseHomeList.data.categories}
            />
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
            <h4>تماس با ما</h4>
            <div className="socialMedia">
              <a href="https://wa.me/+982632211001?text=I'm%20interested%20in%20your%20car%20for%20sale">
                <WhatsAppOutlined />
              </a>
            </div>
            <div className="socialMedia">
              <a href="https://www.instagram.com/chitachip/" target="blank">
                <InstagramOutlined />
              </a>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={19} lg={19} xl={19}>
          <div className="emptyBlocks"></div>
          {BrowseHomeList && BrowseHomeList.data && (
            <StoryProduct stories={BrowseHomeList.data.stories} />
          )}

          {BrowseHomeList && BrowseHomeList.data && (
            <>
              <TopPackagesCarousel banners={BrowseHomeList.data.banners} />
              <Row gutter={16}>
                <Tab
                  onClick={() => setTab('best')}
                  active={tab === 'best'}
                  className="tab"
                >
                  <span>پرفروش ترین ها</span>
                </Tab>
                <Tab
                  active={tab === 'new'}
                  onClick={() => setTab('new')}
                  className="tab"
                >
                  <span>جدیدترین ها</span>
                </Tab>

                {BrowseHomeList.data.offers && (
                  <Tab active={tab === 'sugg'} onClick={() => setTab('sugg')}>
                    <span>
                      پیشنهاد های ویژه
                      {BrowseHomeList.data.offers_time > 0 && (
                        <DateTimeViewer />
                      )}
                    </span>
                  </Tab>
                )}
              </Row>
              {tab === 'best' && (
                <SliderProduct product={BrowseHomeList.data.most_sold} />
              )}

              {tab === 'new' && (
                <SliderProduct product={BrowseHomeList.data.new_products} />
              )}

              {tab === 'sugg' && (
                <SliderProduct product={BrowseHomeList.data.offers} />
              )}
            </>
          )}
        </Col>
      </Row>

      <Row gutter={[16, 24]}>
        <Col xs={0} sm={0} md={5} lg={5} xl={5}>
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
              <h2>با ما در تماس باشید</h2>
            </Col>
            <Col span={19}>
              <Input
                placeholder="ایمیل خود را وارد نمایید"
                className="newsInputStyle"
                onChange={handleChangeMail}
              />
            </Col>
            <Col span={5}>
              <Button type="primary" shape="round" onClick={handleSendMail}>
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
        <Col xs={24} sm={24} md={14} lg={18} xl={18}>
          <h1 className="titleBannerLeft">
            {BrowseHomeList.data?.first_list.text}
          </h1>
          <div className="firsListSecondList">
            <Col
              className="allViewBannerLeft"
              span={24}
              onClick={() => handleRoutToProductList(1)}
            >
              مشاهده همه
            </Col>
            <Row gutter={[16, 24]}>
              {BrowseHomeList.data &&
                BrowseHomeList.data.first_list.prs.map(item => (
                  <Col span={6} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <ProductCard data={item} />
                  </Col>
                ))}
            </Row>
          </div>
          <Row gutter={[16, 24]}>
            {BrowseHomeList &&
              BrowseHomeList.data &&
              BrowseHomeList.data.banners &&
              BrowseHomeList.data.banners.url_third && (
                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  className="sliceCard"
                  style={{
                    background:
                      BrowseHomeList.data.banners.third_background_color,
                  }}
                >
                  <a
                    href={BrowseHomeList.data.banners.url_third}
                    target="blank"
                  >
                    <Row>
                      <Col
                        xs={18}
                        sm={18}
                        md={18}
                        lg={18}
                        xl={18}
                        className="thirdBanner"
                      >
                        <Row>{BrowseHomeList.data.banners.third_title} </Row>
                        <Row>
                          {BrowseHomeList.data.banners.third_description}
                        </Row>
                      </Col>
                      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <img
                          src={BrowseHomeList.data.banners.third_banner}
                          className="sliceCardImg"
                          alt=""
                          style={{
                            maxWidth: '250px',
                          }}
                        />
                      </Col>
                    </Row>
                  </a>
                </Col>
              )}
          </Row>
          <h1 className="titleBannerLeft">
            {BrowseHomeList.data?.second_list.text}
          </h1>
          <div className="firsListSecondList">
            <Col
              onClick={() => handleRoutToProductList(1)}
              className="allViewBannerLeft"
              span={24}
            >
              مشاهده همه
            </Col>
            <Row gutter={[16, 24]}>
              {BrowseHomeList.data &&
                BrowseHomeList.data.second_list.prs.map(item => (
                  <Col span={6} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <ProductCard data={item} />
                  </Col>
                ))}
            </Row>
          </div>
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
                <Swiper
                  // slidesPerView={4}
                  // spaceBetween={30}
                  navigation={true}
                  // className="mySwiper"
                  spaceBetween={20}
                  slidesPerView={onlyWidth > 640 ? 4 : 2}
                  // autoplay={{
                  //   delay: 1000,
                  // }}
                  // navigation
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                >
                  {BrowseHomeList &&
                    BrowseHomeList.data &&
                    BrowseHomeList.data.categories.map(i => {
                      return (
                        <SwiperSlide className="colProductCountWrapper">
                          <Col
                            data-cat-id={i.category.id}
                            data-cat-name={i.category.name}
                            onClick={handleRoutToProductList}
                            className="colProductCount"
                          >
                            <Row>
                              <Col span={24}>
                                <img src={i.category.icon} />
                              </Col>
                            </Row>
                            <Row>
                              <Col span={24}>{i.category.name}</Col>
                            </Row>
                            {/* <Row>
                              <Col span={24} className="ProductCount">
                                +1000 کالا
                              </Col>
                            </Row> */}
                          </Col>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledHomePage>
  );
}
