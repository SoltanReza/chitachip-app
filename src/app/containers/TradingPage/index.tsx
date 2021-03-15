/**
 *
 * TradingPage
 *
 */

import { translations } from 'locales/i18n';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Filters, TradingFilter } from './components/TradingFilter';
import { TradingList } from './components/TradingList';
import { tradingPageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledTradingPage } from './styles';

interface Props {
  className?: string;
}

export function TradingPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: tradingPageSaga });

  const { t } = useTranslation();

  const [filters, setFilters] = useState<Filters | undefined>(undefined);

  const handleFilterChange = useCallback((values: Filters) => {
    setFilters(values);
  }, []);

  return (
    <StyledTradingPage
      className={`TradingPage ${className || ''}`}
      title={t(translations.pages.TradingPage.title)}
      description={t(translations.pages.TradingPage.description)}
    >
      <TradingFilter onChange={handleFilterChange} />

      <TradingList filters={filters} />
    </StyledTradingPage>
  );
}
