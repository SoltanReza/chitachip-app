/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';

import { StyledFooter } from './styles';

import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { translations } from 'locales/i18n';
import instagram from '../../../LazyImg/assets/instagram.png';

interface Props {
  className?: string;
}

export const Footer = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledFooter className={`Footer ${className || ''}`}>
      <Row>
        <Col span={8}>
          <Row>
            <Col span={24}>
              <span>پشتیبانی</span>
            </Col>
            <Col span={24}>پیگیری سفارشات</Col>
            <Col span={24}>پشتیبانی فنی</Col>
            <Col span={24}>ضمانت محصول</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={24}>
              <span>درباره ما</span>
            </Col>
            <Col span={24}>آشنایی با بخش ها</Col>
            <Col span={24}>اهداف</Col>
            <Col span={24}>قوانین و مقررات</Col>
          </Row>
        </Col>
        <Col span={8}>
          <Row>
            <Col span={24}>
              <span>تماس با ما</span>
            </Col>
            <Col span={24}>اطلاعات تماس</Col>
            <Col span={24}>آدرس</Col>
          </Row>
        </Col>
      </Row>
    </StyledFooter>
  );
});
