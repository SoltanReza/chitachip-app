/**
 *
 * UserProfileItem
 *
 */
import React, { memo } from 'react';

import { StyledUserProfileItem } from './styles';
import { UserInfo } from '../UserInfo';

import { useTranslation } from 'react-i18next';
import { Card, Row, Col, Avatar, Button, Typography } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import userIcon from '../../images/person.svg';
import addressIcon from '../../images/address.svg';
import calendarIcon from '../../images/calendar.svg';
import arrowIcon from '../../images/arrow.svg';
import heartIcon from '../../images/heart.svg';
import mailIcon from '../../images/mail.svg';
import { useState } from 'react';
import { useCallback } from 'react';
import { UserAddress } from 'app/components/UserAddress';
import { UserOrder } from 'app/components/UserOrder';
import { UserFavorite } from 'app/components/UserFavorite';
import { history } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';

interface Props {
  className?: string;
}

const { Title } = Typography;

export const UserProfileItem = memo(({ className }: Props) => {
  const { t } = useTranslation();

  const [showUserInfo, setShowUserInfo] = useState(true);
  const [showAddress, setShowAddress] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);

  const handleShowUserInfo = useCallback(() => {
    setShowUserInfo(true);
    setShowAddress(false);
    setShowFavorite(false);
    setShowOrder(false);
  }, []);
  const handleShowAddress = useCallback(() => {
    setShowAddress(true);
    setShowUserInfo(false);
    setShowFavorite(false);
    setShowOrder(false);
  }, []);
  const handleShowOrder = useCallback(() => {
    setShowOrder(true);
    setShowUserInfo(false);
    setShowAddress(false);
    setShowFavorite(false);
  }, []);
  const handleFavoriteList = useCallback(() => {
    setShowFavorite(true);
    setShowUserInfo(false);
    setShowAddress(false);
    setShowOrder(false);
  }, []);

  const handleRoutToLogout = useCallback(() => history.push(Routes.logout), []);

  return (
    <StyledUserProfileItem className={`UserProfileItem ${className || ''}`}>
      <Row gutter={[32, { xs: 8, sm: 16, md: 32, lg: 32 }]}>
        <Col xs={19} sm={19} md={5} lg={5} xl={5}>
          <Card className="profileTitleItem">
            <div
              className={`profileTitleText ${showUserInfo ? 'activeItem' : ''}`}
              onClick={handleShowUserInfo}
            >
              <img src={userIcon} className="profileIcon" />
              اطلاعات کاربری
            </div>
            <div
              className={`profileTitleText ${showAddress ? 'activeItem' : ''}`}
              onClick={handleShowAddress}
            >
              <img src={addressIcon} className="profileIcon" />
              آدرس ها
            </div>
            <div
              className={`profileTitleText ${showOrder ? 'activeItem' : ''}`}
              onClick={handleShowOrder}
            >
              <img src={calendarIcon} className="profileIcon" />
              تاریخچه سفارشات
            </div>
            <div className="profileTitleText">
              <img src={arrowIcon} className="profileIcon" />
              مکالمات پشتیبانی
            </div>
            <div
              className={`profileTitleText ${showFavorite ? 'activeItem' : ''}`}
              onClick={handleFavoriteList}
            >
              <img src={heartIcon} className="profileIcon" />
              لیست علاقه مندی ها
            </div>
            <div className="profileTitleText">
              <img src={mailIcon} className="profileIcon" />
              اعلان های من
            </div>
            <div className="logout" onClick={handleRoutToLogout}>
              <img src="images/logout.svg" alt="خروج" className="imgLogout" />
              <span> خروج</span>
            </div>
          </Card>
        </Col>

        <Col className="actionItem" xs={24} sm={24} md={17} lg={17} xl={17}>
          <Card className="profileContentItem">
            {showUserInfo && <UserInfo />}
            {showAddress && <UserAddress />}
            {showOrder && <UserOrder />}
            {showFavorite && <UserFavorite />}
          </Card>
        </Col>
      </Row>
    </StyledUserProfileItem>
  );
});
