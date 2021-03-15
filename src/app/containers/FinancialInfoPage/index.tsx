/**
 *
 * FinancialInfoPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledFinancialInfoPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectFinancialInfoPage } from './selectors';

import { financialInfoPageSaga } from './saga';
import { FinancialInfo } from '../../components/FinancialInfo';

interface Props {
  className?: string;
}

export function FinancialInfoPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: financialInfoPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const financialInfoPage = useSelector(selectFinancialInfoPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledFinancialInfoPage
      className={`FinancialInfoPage ${className || ''}`}
      title={t(translations.pages.FinancialInfoPage.title)}
      description={t(translations.pages.FinancialInfoPage.description)}
    >
      <FinancialInfo />
    </StyledFinancialInfoPage>
  );
}
