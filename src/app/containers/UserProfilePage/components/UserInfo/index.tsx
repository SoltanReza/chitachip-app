/**
 *
 * UserInfo
 *
 */
import React, { memo } from 'react';

import { StyledUserInfo } from './styles';
import { Descriptions, Col, Row, Button } from 'antd';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const UserInfo = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledUserInfo className={`UserInfo ${className || ''}`}>
      <Row gutter={[8, 8]} className="profileInfoTitle">
        <Col span={10}>نام:</Col>
        <Col span={10}>علی </Col>
        <Col span={4}></Col>
      </Row>
      <Row gutter={[8, 8]} className="profileInfoTitle">
        <Col span={10}>نام خانوادگی:</Col>
        <Col span={10}>قربانی </Col>
        <Col span={4}></Col>
      </Row>
      <Row gutter={[8, 8]} className="profileInfoTitle">
        <Col span={10}>ایمیل:</Col>
        <Col span={10}>example@ex.com </Col>
        <Col span={4}></Col>
      </Row>
      <Row gutter={[8, 8]} className="profileInfoTitle">
        <Col span={10}>شماره همراه:</Col>
        <Col span={10}>09122222222 </Col>
        <Col span={4}></Col>
      </Row>

      <Row gutter={[8, 8]} className="btnEditRow">
        <Button className="btnEdit"> ویرایش</Button>
      </Row>
    </StyledUserInfo>
  );
});
