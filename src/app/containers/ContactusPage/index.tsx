/**
 *
 * ContactusPage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ContactUs } from './components/ContactUs';
import { contactusPageSaga } from './saga';
import { selectContactusPage } from './selectors';
import { reducer, sliceKey } from './slice';
import { StyledContactusPage } from './styles';

interface Props {
  className?: string;
}

export function ContactusPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: contactusPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const contactusPage = useSelector(selectContactusPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledContactusPage
      className={`ContactusPage ${className || ''}`}
      title={t(translations.pages.ContactusPage.title)}
      description={t(translations.pages.ContactusPage.description)}
    >
      <ContactUs />
    </StyledContactusPage>
  );
}
