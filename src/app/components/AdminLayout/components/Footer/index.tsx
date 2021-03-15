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
      <Row className="footerRow" gutter={16}>
        <Col md={6} xs={24}>
          {t(translations.layouts.base.footer.address)}
        </Col>

        <Col md={6} xs={24}>
          {t(translations.layouts.base.footer.phone)}
        </Col>

        <Col md={6} xs={24}>
          {t(translations.layouts.base.footer.email)}
        </Col>
        <Col md={6} xs={24}>
          <img src={instagram} width="60px" height="60px" alt="Instagram" />
        </Col>
      </Row>
      <Row className="footerRow" gutter={16}>
        <Col md={24} xs={24}>
          {t(translations.layouts.base.footer.copyWrite)}
        </Col>
      </Row>
    </StyledFooter>
  );
});
