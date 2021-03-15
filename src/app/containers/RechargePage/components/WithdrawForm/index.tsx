/**
 *
 * WithdrawForm
 *
 */
import { Button, Form, InputNumber } from 'antd';
import { MIN_PAYMENT_MONEY } from 'app/containers/App/constants';
import { selectAuthData } from 'app/containers/App/selectors';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectWithdraw } from '../../selectors';
import { actions } from '../../slice';
import { StyledWithdrawForm } from './styles';

interface Props {
  className?: string;
}

export const WithdrawForm = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const authData = useSelector(selectAuthData);
  const dispatch = useDispatch();
  const withdrawData = useSelector(selectWithdraw);
  const loading = useMemo(() => !!withdrawData.params, [withdrawData.params]);

  const validateMessages = {
    number: {
      range: `\${label} باید بین \${min} و \${max} باشد`,
    },
  };

  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.withdraw({
          amount: values.amount,
        }),
      );
    },
    [dispatch],
  );

  return (
    <StyledWithdrawForm className={`WithdrawForm ${className || ''}`}>
      <Form onFinish={handleSubmit} validateMessages={validateMessages}>
        <Form.Item
          name="amount"
          label="مبلغ درخواستی"
          rules={[
            {
              type: 'number',
              min: MIN_PAYMENT_MONEY,
              max: authData?.user.stock,
            },
          ]}
        >
          <InputNumber
            style={{ width: '100%' }}
            placeholder={t(
              translations.pages.RechargePage.withdrawForm.amountPlaceholder,
            )}
            width="200px"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn btn-secondary"
            block
            loading={loading}
          >
            {t(translations.pages.RechargePage.withdrawForm.submit)}
          </Button>
        </Form.Item>
      </Form>
    </StyledWithdrawForm>
  );
});
