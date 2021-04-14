/**
 *
 * HomePage
 *
 */

import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Row, Space, Tabs } from 'antd';
import { DateTimeViewer } from 'app/components/DateTimeViewer';
import { TopPackagesCarousel } from 'app/containers/HomePage/components/TopPackagesCarousel';
import { translations } from 'locales/i18n';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { selectBrowseHomeList } from '../App/selectors';
import { appActions } from '../App/slice';
import { Offer } from './components/Offer';
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
    </StyledHomePage>
  );
}
