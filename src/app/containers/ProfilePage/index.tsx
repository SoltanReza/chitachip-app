/**
 *
 * ProfilePage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ProfileInfo } from './components/ProfileInfo';
import { profilePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledProfilePage } from './styles';

interface Props {
  className?: string;
}

export function ProfilePage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: profilePageSaga });

  const { t } = useTranslation();
  return (
    <StyledProfilePage
      className={`ProfilePage ${className || ''}`}
      title={t(translations.pages.ProfilePage.title)}
      description={t(translations.pages.ProfilePage.description)}
    >
      <ProfileInfo />
    </StyledProfilePage>
  );
}
