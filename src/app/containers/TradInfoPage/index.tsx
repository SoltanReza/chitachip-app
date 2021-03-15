/**
 *
 * TradInfoPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledTradInfoPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectTradInfoPage } from './selectors';

import { tradInfoPageSaga } from './saga';
import { TradList } from './components/TradList';
import { TradInfoChart } from './components/TradInfoChart';

interface Props {
  className?: string;
}

export function TradInfoPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: tradInfoPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tradInfoPage = useSelector(selectTradInfoPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledTradInfoPage
      className={`TradInfoPage ${className || ''}`}
      title={t(translations.pages.TradInfoPage.title)}
      description={t(translations.pages.TradInfoPage.description)}
    >
      <TradInfoChart />
      <TradList />
    </StyledTradInfoPage>
  );
}
