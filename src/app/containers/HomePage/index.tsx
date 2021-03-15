/**
 *
 * HomePage
 *
 */

import { Button, Card, Col, Divider, Row, Tabs } from 'antd';
import { ArdbitChangeHistoryChart } from 'app/components/ArdbitChangeHistoryChart';
import { ArdbitExchangeHisrotyChart } from 'app/components/ArdbitExchangeHisrotyChart';
import { FloatContactUs } from 'app/components/FloatContactUs';
import { TopPackagesCarousel } from 'app/containers/HomePage/components/TopPackagesCarousel';
import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ellipseString } from 'utils/helpers';
import { NewsCards } from './components/NewsCards';
import { homePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledHomePage } from './styles';
import {
  AppleOutlined,
  AndroidOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import pic from './image/1.jpeg';
import pic2 from './image/2.jpeg';
import pic3 from './image/3.jpeg';
import pic4 from './image/4.jpeg';
import pic5 from './image/5.jpeg';
import pic6 from './image/6.jpeg';

interface Props {
  className?: string;
}
const { TabPane } = Tabs;
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function HomePage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: homePageSaga });
  const { t } = useTranslation();

  return (
    <StyledHomePage
      className={`HomePage ${className || ''}`}
      title={t(translations.pages.HomePage.title)}
      description={t(translations.pages.HomePage.description)}
    >
      {/* <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <img src="https://picsum.photos/500/500" />
        <img src="https://picsum.photos/500/500" />
        <img src="https://picsum.photos/500/500" />
        <img src="https://picsum.photos/500/500" />

        <img src="https://picsum.photos/500/500" />

        <img src="https://picsum.photos/500/500" />

        <img src="https://picsum.photos/500/500" />

        <img src="https://picsum.photos/500/500" />
      </Carousel> */}

      <TopPackagesCarousel />
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              پرفروش ترین ها
            </span>
          }
          key="1"
        >
          <div className="container category">
            <div className="row slide">
              <ul
                className="col container-filter list-unstyled categories-filter text-center"
                id="filter"
              >
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">
                      {ellipseString(
                        'ماژول تشخیص گاز کربن مونوکسید CO مبتنی بر سنسور MQ7',
                        11,
                      )}
                    </div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div>
                        <ShoppingOutlined size={6} />{' '}
                        <span className="price">2000 تومان</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">نمایشگر 1.3 inch</div>
                    <div>
                      <img src={pic2} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic3} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div>
                        <ShoppingOutlined size={6} />
                        <span className="price">5253 تومان</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic4} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic5} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic6} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div>
                        <ShoppingOutlined size={6} />
                        <span className="price">5253 تومان</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div>
                        <ShoppingOutlined size={6} />
                        <span className="price">5253 تومان</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div>
                        <ShoppingOutlined size={6} />
                      </div>
                    </div>
                  </div>
                </li>
                <li className=" slideItem">
                  <div className="offerCard">
                    <div className="titleProduct">آردینو DOU</div>
                    <div>
                      <img src={pic} className="imgProduct" />
                    </div>
                    <div className="buyProduct">
                      <div>
                        <HeartOutlined size={6} />
                      </div>
                      <div className="priceBtn">
                        <div className="iconeShop">
                          <ShoppingOutlined
                            style={{ color: '#ff9800', fontSize: '1.5em' }}
                          />
                        </div>
                        <div>
                          <Button className="discountBtn">3+</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              ویژه ها
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    </StyledHomePage>
  );
}
