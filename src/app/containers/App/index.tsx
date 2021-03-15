/**
 *
 * App
 *
 */

import { ConfigProvider } from 'antd';
import { Notifications } from 'app/components/Notifications';
import { translations } from 'locales/i18n';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { GlobalStyle } from 'styles/global-styles';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Router } from './Router';
import { appSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledApp } from './styles';

interface Props {
  className?: string;
}

export function App({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: appSaga });

  const { t } = useTranslation();

  return (
    <StyledApp className={`App ${className || ''}`}>
      <Helmet
        titleTemplate={t(translations.app.titleTemplate)}
        defaultTitle={t(translations.app.title)}
      >
        <meta name="description" content={t(translations.app.description)} />
      </Helmet>
      <ConfigProvider direction="rtl">
        <Router />
        <GlobalStyle />
        <Notifications />
      </ConfigProvider>
    </StyledApp>
  );
}
