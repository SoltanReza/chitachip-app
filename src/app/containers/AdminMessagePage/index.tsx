/**
 *
 * AdminMessagePage
 *
 */

import { MessageList } from 'app/containers/AdminMessagePage/components/MessageList';
import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { adminMessagePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledAdminMessagePage } from './styles';

interface Props {
  className?: string;
}

export function AdminMessagePage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: adminMessagePageSaga });

  const { t } = useTranslation();

  return (
    <StyledAdminMessagePage
      className={`AdminMessagePage ${className || ''}`}
      title={t(translations.pages.AdminMessagePage.title)}
      description={t(translations.pages.AdminMessagePage.description)}
    >
      <MessageList />
    </StyledAdminMessagePage>
  );
}
