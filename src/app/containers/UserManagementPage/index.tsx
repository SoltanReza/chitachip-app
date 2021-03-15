/**
 *
 * UserManagementPage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { UsersList } from './components/UsersList';
import { userManagementPageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledUserManagementPage } from './styles';

interface Props {
  className?: string;
}

export function UserManagementPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: userManagementPageSaga });

  const { t } = useTranslation();

  return (
    <StyledUserManagementPage
      className={`UserManagementPage ${className || ''}`}
      title={t(translations.pages.UserManagementPage.title)}
      description={t(translations.pages.UserManagementPage.description)}
    >
      <UsersList />
    </StyledUserManagementPage>
  );
}
