/**
 *
 * HomePage
 *
 */

import {
  AndroidOutlined,
  AppleOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import { TopPackagesCarousel } from 'app/containers/HomePage/components/TopPackagesCarousel';
import { translations } from 'locales/i18n';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Routes } from '../App/Router/routes';
import { selectBrowseHomeList } from '../App/selectors';
import { appActions } from '../App/slice';
import { Offer } from './components/Offer';
import pic from './image/1.jpeg';
import pic2 from './image/2.jpeg';
import pic3 from './image/3.jpeg';
import pic4 from './image/4.jpeg';
import pic5 from './image/5.jpeg';
import pic6 from './image/6.jpeg';
import { homePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledHomePage } from './styles';

interface Props {
  className?: string;
}
const { TabPane } = Tabs;

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
        ></TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              ویژه ها
            </span>
          }
          key="2"
        >
           {BrowseHomeList && BrowseHomeList.data && (
            <Offer product={BrowseHomeList.data.offers} />

          ) }
        </TabPane>
      </Tabs>
    </StyledHomePage>
  );
}
