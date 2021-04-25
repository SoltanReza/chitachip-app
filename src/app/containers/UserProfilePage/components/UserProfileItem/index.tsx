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
import { UserOutlined } from '@ant-design/icons';
import userIcon from '../../images/person.svg';
import addressIcon from '../../images/address.svg';
import calendarIcon from '../../images/calendar.svg';
import arrowIcon from '../../images/arrow.svg';
import heartIcon from '../../images/heart.svg';
import mailIcon from '../../images/mail.svg';

interface Props {
  className?: string;
}

const { Title } = Typography;

export const UserProfileItem = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledUserProfileItem className={`UserProfileItem ${className || ''}`}>
      <Row gutter={[32, { xs: 8, sm: 16, md: 32, lg: 32 }]}>
        <Col xs={24} sm={24} md={7} lg={7} xl={7}>
          <Card className="profileTitleItem">
            <Title level={4}>
              <img src={userIcon} className="profileIcon" />
              اطلاعات کاربری
            </Title>
            <Title level={4}>
              <img src={addressIcon} className="profileIcon" />
              آدرس ها
            </Title>
            <Title level={4}>
              <img src={calendarIcon} className="profileIcon" />
              تاریخچه سفارشات
            </Title>
            <Title level={4}>
              <img src={arrowIcon} className="profileIcon" />
              مکالمات پشتیبانی
            </Title>
            <Title level={4}>
              <img src={heartIcon} className="profileIcon" />
              لیست علاقه مندی ها
            </Title>
            <Title level={4}>
              <img src={mailIcon} className="profileIcon" />
              اعلان های من
            </Title>
          </Card>
        </Col>

        <Col className="actionItem" xs={24} sm={24} md={17} lg={17} xl={17}>
          <Card className="profileContentItem">
            <UserInfo />
          </Card>
        </Col>
      </Row>
    </StyledUserProfileItem>
  );
});
