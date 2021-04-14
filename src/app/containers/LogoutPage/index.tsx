/**
 *
 * LogoutPage
 *
 */

import { LazyLoadSpinner } from 'app/components/LazyLoadSpinner';
import { translations } from 'locales/i18n';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Storage } from 'utils/storage';
import { selectAuthData } from '../App/selectors';
import { appActions } from '../App/slice';
import { StyledLogoutPage } from './styles';

interface Props {
  className?: string;
}

export function LogoutPage({ className }: Props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(selectAuthData);

  useEffect(() => {
    if (authData) {
      dispatch(appActions.clearAuth());
      Storage.remove('auth');
    }
  }, [dispatch, authData]);

  return (
    <StyledLogoutPage>
      <Helmet>
        <title>{t(translations.pages.LogoutPage.title)}</title>
        <meta
          name="description"
          content={t(translations.pages.LogoutPage.description)}
        />
      </Helmet>

      <LazyLoadSpinner />
    </StyledLogoutPage>
  );
}
