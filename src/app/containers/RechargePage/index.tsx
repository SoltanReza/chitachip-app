/**
 *
 * RechargePage
 *
 */

import { Tabs } from 'antd';
import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { RechargeForm } from './components/RechargeForm';
import { RechargeResult } from './components/RechargeResult';
import { WithdrawForm } from './components/WithdrawForm';
import { rechargePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledRechargePage } from './styles';

interface Props {
  className?: string;
}

export function RechargePage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: rechargePageSaga });

  const { t } = useTranslation();

  return (
    <StyledRechargePage
      className={`RechargePage ${className || ''}`}
      title={t(translations.pages.RechargePage.title)}
      description={t(translations.pages.RechargePage.description)}
    >
      <RechargeResult />

      <Tabs defaultActiveKey="deposit" type="card">
        <Tabs.TabPane
          tab={t(translations.pages.RechargePage.depositForm.title)}
          key="deposit"
        >
          <RechargeForm />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={t(translations.pages.RechargePage.withdrawForm.title)}
          key="withdraw"
        >
          <WithdrawForm />
        </Tabs.TabPane>
      </Tabs>
    </StyledRechargePage>
  );
}
