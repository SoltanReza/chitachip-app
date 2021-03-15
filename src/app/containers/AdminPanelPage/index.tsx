/**
 *
 * AdminPanelPage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AllNewsDashboard } from './components/AllNewsDashboard';
import { adminPanelPageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledAdminPanelPage } from './styles';

interface Props {
  className?: string;
}

export function AdminPanelPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: adminPanelPageSaga });

  const { t } = useTranslation();

  return (
    <StyledAdminPanelPage
      className={`AdminPanelPage ${className || ''}`}
      title={t(translations.pages.AdminPanelPage.title)}
      description={t(translations.pages.AdminPanelPage.description)}
    >
      <AllNewsDashboard />
    </StyledAdminPanelPage>
  );
}
