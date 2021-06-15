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
import { StyledHomePage } from './styles';
import { UnitCarouselRight } from './UnitCarouselRight';
import { useCallback } from 'react';
import { useState } from 'react';
import { StoryProduct } from 'app/components/StoryProduct';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { useWindowWidth } from '@react-hook/window-size';

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
        <Col xs={20} sm={20} md={6} lg={18} xl={18}>
          <div className="emptyBlocks"></div>
          {BrowseHomeList && BrowseHomeList.data && (
            <StoryProduct stories={BrowseHomeList.data.stories} />
          )}

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
                {BrowseHomeList.data.offers && (
                  <TabPane
                    tab={
                      <span>
                        پیشنهاد های ویژه
                        {BrowseHomeList.data.offers_time > 0 && (
                          <DateTimeViewer />
                        )}
                      </span>
                    }
                    key="3"
                  >
                    <SliderProduct product={BrowseHomeList.data.offers} />
                  </TabPane>
                )}
              </Tabs>
            </>
          )}
        </Col>
      </Row>

      <Row gutter={[48, 48]}>
        <Col xs={24} sm={24} md={10} lg={6} xl={6}>
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
                onChange={handleChangeMail}
              />
            </Col>
            <Col span={8}>
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
            <Col className="allViewBannerLeft" span={24}>
              مشاهده همه
            </Col>
            <Row gutter={[16, 24]}>
              {BrowseHomeList.data &&
                BrowseHomeList.data.first_list.prs.map(item => (
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <div className="offerCard">
                      <div
                        data-id={item.id}
                        onClick={handleRouteToProductDetails(item.id)}
                      >
                        <div className="imgProductWrapper">
                          <img
                            src={item.image}
                            className="imgProduct"
                            alt={item.title}
                          />
                        </div>
                        <div className="titleProduct">
                          {ellipseString(`${item.title}`, 20)}
                        </div>
                      </div>
                      <div className="buyProduct" id={`buyProduct${item.id}`}>
                        <div>
                          <StarFilled
                            style={{ color: '#ffc107', fontSize: '1.5em' }}
                          />{' '}
                          1.3
                        </div>
                        <div className="priceStyle">
                          <div className="price">
                            <div className="discount">
                              {item.discount > 0 && item.discount}
                            </div>
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
                      <div className="voteStyle">
                        <div>
                          {likeData && likeData.data ? (
                            likeData.data.status === 201 ? (
                              <HeartOutlined
                                style={{ color: '#ffc107', fontSize: '1.7em' }}
                                data-id={item.id}
                                onClick={handleVoteLike}
                              />
                            ) : (
                              <HeartFilled
                                style={{ color: '#ffc107', fontSize: '1.7em' }}
                                data-id={item.id}
                                onClick={handleVoteLike}
                              />
                            )
                          ) : (
                            <HeartOutlined
                              style={{ color: '#ffc107', fontSize: '1.7em' }}
                              data-id={item.id}
                              onClick={handleVoteLike}
                            />
                          )}
                        </div>
                        <div>
                          {/* <ShoppingOutlined
                            style={{ color: '#ffc107', fontSize: '1.5em' }}
                            data-product_id={item.id}
                            onClick={handleAddToBasket}
                          />{' '} */}
                          <span className="count">
                            <PlusOutlined
                              data-id={item.id}
                              onClick={handlePlusQuantity}
                            />
                            {currentElement === item.id ? (
                              <span>{addToBasketData.data?.quantity}</span>
                            ) : (
                              <span>0</span>
                            )}
                            <MinusOutlined
                              data-id={item.id}
                              onClick={handleMinusQuantity}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
          <Row gutter={[16, 24]}>
            {BrowseHomeList && BrowseHomeList.data && (
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
                <a href={BrowseHomeList.data.banners.url_third} target="blank">
                  <Row>
                    <Col
                      xs={14}
                      sm={14}
                      md={18}
                      lg={14}
                      xl={14}
                      className="thirdBanner"
                    >
                      <Row>{BrowseHomeList.data.banners.third_title}</Row>
                      <Row>{BrowseHomeList.data.banners.third_description}</Row>
                    </Col>
                    <Col
                      xs={10}
                      sm={10}
                      md={6}
                      lg={10}
                      xl={10}
                      style={{
                        background: `url(${BrowseHomeList.data.banners.third_banner})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                    >
                      {/* <img
                        src={BrowseHomeList.data.banners.third_banner}
                        className="sliceCardImg"
                        alt=""
                      /> */}
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
            <Col className="allViewBannerLeft" span={24}>
              مشاهده همه
            </Col>
            <Row gutter={[16, 24]}>
              {BrowseHomeList.data &&
                BrowseHomeList.data.second_list.prs.map(item => (
                  <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <div className="offerCard">
                      <div
                        data-id={item.id}
                        onClick={handleRouteToProductDetails(item.id)}
                      >
                        <div className="imgProductWrapper">
                          <img
                            src={item.image}
                            className="imgProduct"
                            alt={item.title}
                          />
                        </div>
                        <div className="titleProduct">
                          {ellipseString(`${item.title}`, 20)}
                        </div>
                      </div>
                      <div className="buyProduct" id={`buyProduct${item.id}`}>
                        <div>
                          <StarFilled
                            style={{ color: '#ffc107', fontSize: '1.5em' }}
                          />{' '}
                          1.3
                        </div>
                        <div className="priceStyle">
                          <div className="price">
                            <div className="discount">
                              {item.discount > 0 && item.discount}
                            </div>
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
                      <div className="voteStyle">
                        <div>
                          {likeData && likeData.data ? (
                            likeData.data.status === 201 ? (
                              <HeartOutlined
                                style={{ color: '#ffc107', fontSize: '1.7em' }}
                                data-id={item.id}
                                onClick={handleVoteLike}
                              />
                            ) : (
                              <HeartFilled
                                style={{ color: '#ffc107', fontSize: '1.7em' }}
                                data-id={item.id}
                                onClick={handleVoteLike}
                              />
                            )
                          ) : (
                            <HeartOutlined
                              style={{ color: '#ffc107', fontSize: '1.7em' }}
                              data-id={item.id}
                              onClick={handleVoteLike}
                            />
                          )}
                        </div>
                        <div>
                          {/* <ShoppingOutlined
                            style={{ color: '#ffc107', fontSize: '1.5em' }}
                            data-product_id={item.id}
                            onClick={handleAddToBasket}
                          />{' '} */}
                          <span className="count">
                            <PlusOutlined
                              data-id={item.id}
                              onClick={handlePlusQuantity}
                            />
                            {currentElement === item.id ? (
                              <span>{addToBasketData.data?.quantity}</span>
                            ) : (
                              <span>0</span>
                            )}
                            <MinusOutlined
                              data-id={item.id}
                              onClick={handleMinusQuantity}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
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
                      {/* +1000 کالا */}
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
                      {/* +1000 کالا */}
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
                      {/* +1000 کالا */}
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
                      {/* +1000 کالا */}
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
                      {/* +1000 کالا */}
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
