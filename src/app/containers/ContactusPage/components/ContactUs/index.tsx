/**
 *
 * ContactUs
 *
 */
import {
  ContactsOutlined,
  MailOutlined,
  PhoneOutlined,
  PrinterOutlined,
} from '@ant-design/icons';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import { translations } from 'locales/i18n';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import mapImg from '../../images/map.jpeg';
import { StyledContactUs } from './styles';
interface Props {
  className?: string;
}

export const ContactUs = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledContactUs className={`ContactUs ${className || ''}`}>
      <Title level={2}>{t(translations.components.ContactUs.title)}</Title>
      <Row gutter={16}>
        <Col md={12} xs={24}>
          <Row className="contactUsRow" gutter={16}>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <ContactsOutlined />
              {t(translations.components.ContactUs.address)}
            </Col>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <PhoneOutlined />
              رییس هیات مدیره آقای سید جواد میر شریفی : 02122222222
            </Col>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <PhoneOutlined />
              مدیر عامل آقای مرتضی حیدریان: 02122222222
            </Col>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <PhoneOutlined />
             بازرسی آقای عبدالرضا صفی آریان: 02122222222
            </Col>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <PhoneOutlined />
              پشتیبانی خانم ...: 02122222222
            </Col>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <PhoneOutlined />
              {t(translations.components.ContactUs.tel)}
            </Col>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <PrinterOutlined />
              {t(translations.components.ContactUs.fax)}
            </Col>
            <Col className="contactUsColInfo" md={24} xs={24}>
              <MailOutlined />
              {t(translations.components.ContactUs.email)}
            </Col>
          </Row>
        </Col>

        <Col className="map" md={12} xs={24}>
          <img
            className="mapImg"
            src={mapImg}
            alt={t(translations.components.ContactUs.title)}
          />
        </Col>
      </Row>
    </StyledContactUs>
  );
});
