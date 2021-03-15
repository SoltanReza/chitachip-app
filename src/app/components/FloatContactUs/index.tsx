/**
 *
 * FloatContactUs
 *
 */
import { CloseCircleTwoTone } from '@ant-design/icons';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Storage } from 'utils/storage';
import { StyledButton, StyledFloatContactUs } from './styles';
import imgFloat from './images/helpdesk.png';
import {theme} from 'styles/theme';
interface Props {
  className?: string;
}

export const DONT_SHOW_CONTACT_US_STORAGE_KEY =
  'DO_NOT_SHOW_CONTACT_US_FLOATING_MODAL';

export const FloatContactUs = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [dontShowMe, setDontShowMe] = useState(
    Storage.read(DONT_SHOW_CONTACT_US_STORAGE_KEY, false),
  );

  const handleShowMoreInfo = useCallback(() => {
    setShow(true);
    if (show) {
      setShow(false);
    }
  }, [setShow, show]);

  const handleDontShowMeAnymore = useCallback(() => {
    Storage.put(DONT_SHOW_CONTACT_US_STORAGE_KEY, true);
    setDontShowMe(true);
  }, [setDontShowMe]);

  useEffect(() => {
    setDontShowMe(false);
  }, [setDontShowMe]);

  return dontShowMe ? null : (
    <StyledFloatContactUs className={`FloatContactUs ${className || ''}`}>
      <CloseCircleTwoTone
        className="removeIcon"
        onClick={handleDontShowMeAnymore}
        twoToneColor={theme.FLOAT_CONTACTUS_BUTTON_CLOSE_COLOR}
      />

      <StyledButton onClick={handleShowMoreInfo}>
        <img
          className="imgFloat"
          src={imgFloat}
          alt={t(translations.global.floatContactUs.title)}
        />
        <div className="discriptionFloat">
          {t(translations.global.floatContactUs.title)}
          {show && (
            <>
              <div> {t(translations.global.floatContactUs.name)}</div>
              <a href="tel:021-88523876">
                <div>{t(translations.global.floatContactUs.tel)}</div>
              </a>
              <a href="tel:09194141260">
                {' '}
                <div> {t(translations.global.floatContactUs.mobile)}</div>{' '}
              </a>
              <a href="mailto:info@ardbit.org">
                <div> {t(translations.global.floatContactUs.email)}</div>
              </a>
            </>
          )}
        </div>
      </StyledButton>
    </StyledFloatContactUs>
  );
});
