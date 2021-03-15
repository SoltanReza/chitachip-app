/**
 *
 * NewsPage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { NewsList } from './components/NewsList';
import { newsPageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledNewsPage } from './styles';

interface Props {
  className?: string;
}

export function NewsPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: newsPageSaga });

  const { t } = useTranslation();

  return (
    <StyledNewsPage
      className={`NewsPage ${className || ''}`}
      title={t(translations.pages.NewsPage.title)}
      description={t(translations.pages.NewsPage.description)}
    >
      <NewsList />
    </StyledNewsPage>
  );
}
