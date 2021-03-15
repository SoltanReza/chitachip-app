/**
 *
 * TransactionPage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { TransactionList } from './components/TransactionList';
import { transactionPageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledTransactionPage } from './styles';

interface Props {
  className?: string;
}

export function TransactionPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: transactionPageSaga });

  const { t } = useTranslation();

  return (
    <StyledTransactionPage
      className={`TransactionPage ${className || ''}`}
      title={t(translations.pages.TransactionPage.title)}
      description={t(translations.pages.TransactionPage.description)}
    >
      <TransactionList />
    </StyledTransactionPage>
  );
}
