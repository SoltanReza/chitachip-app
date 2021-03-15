/**
 *
 * RechargeForm
 *
 */
import React, { memo, useCallback } from 'react';

import { StyledRechargeForm } from './styles';

import { useTranslation } from 'react-i18next';
import { Form, Input, Button } from 'antd';
import { translations } from 'locales/i18n';
import { BACKEND_URL } from 'utils/request';
import { MIN_PAYMENT_MONEY } from 'app/containers/App/constants';
import { useSelector } from 'react-redux';
import { selectAuthData } from 'app/containers/App/selectors';

interface Props {
  className?: string;
}

export const RechargeForm = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const authData = useSelector(selectAuthData);
  const handleSubmit = useCallback(
    values => {
      const form = document.createElement('form');
      form.action = BACKEND_URL + '/transactions/deposit';
      form.method = 'post';
      form.innerHTML = `
      <input name="amount" value=${values.amount} />
      <input name="user_id" value=${authData?.user.id} />
    `;
      document.body.appendChild(form);
      form.submit();
    },
    [authData],
  );

  return (
    <StyledRechargeForm className={`RechargeForm ${className || ''}`}>
      <Form onFinish={handleSubmit}>
        <Form.Item name="amount" rules={[{ required: true }]}>
          <Input
            suffix={t(translations.pages.RechargePage.depositForm.amountPerfix)}
            type="number"
            min={MIN_PAYMENT_MONEY}
            placeholder={t(
              translations.pages.RechargePage.depositForm.amountPlaceholder,
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn btn-secondary"
            block
          >
            {t(translations.pages.RechargePage.depositForm.submit)}
          </Button>
        </Form.Item>
      </Form>
    </StyledRechargeForm>
  );
});
