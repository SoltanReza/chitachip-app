/**
 *
 * CurrencyPage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { CurrencyList } from './components/CurrencyList';
import { currencyPageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledCurrencyPage } from './styles';

interface Props {
  className?: string;
}

export function CurrencyPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: currencyPageSaga });

  const { t } = useTranslation();

  return (
    <StyledCurrencyPage
      className={`CurrencyPage ${className || ''}`}
      title={t(translations.pages.CurrencyPage.title)}
      description={t(translations.pages.CurrencyPage.description)}
    >
      <CurrencyList />
    </StyledCurrencyPage>
  );
}
