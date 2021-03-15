/**
 *
 * EditCurrencyModal
 *
 */
import { Button, Form, Input } from 'antd';
import { Currency } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditCurrency } from '../../selectors';
import { actions } from '../../slice';
import { StyledEditCurrencyModal } from './styles';

interface Props {
  className?: string;
  currency: Currency;
  onClose: () => void;
}

export const EditCurrencyModal = memo(
  ({ className, currency, onClose }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const editCurrencyData = useSelector(selectEditCurrency);
    const loading = useMemo(() => !!editCurrencyData.params, [
      editCurrencyData.params,
    ]);

    const handleSubmit = useCallback(
      values => {
        dispatch(
          actions.editCurrency({
            name: values.name,
            rate_in_rial: values.rate_in_rial,
          }),
        );
      },
      [dispatch],
    );

    const handleClearData = useCallback(() => {
      dispatch(actions.editCurrencyClear());
    }, [dispatch]);

    useEffect(() => {
      if (editCurrencyData.data) {
        dispatch(actions.editCurrencyClear());
        onClose();
      }
    }, [editCurrencyData.data, dispatch, onClose]);

    return (
      <StyledEditCurrencyModal
        className={`EditCurrencyModal ${className || ''}`}
        title={t(translations.pages.CurrencyPage.update.title)}
        visible
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={onClose}
        afterClose={handleClearData}
      >
        <Form
          className="editCurrencyForm"
          onFinish={handleSubmit}
          initialValues={currency || {}}
        >
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input
              readOnly
              type="text"
              placeholder={t(translations.pages.CurrencyPage.list.name)}
            />
          </Form.Item>
          <Form.Item name="rate_in_rial" rules={[{ required: true }]}>
            <Input
              type="number"
              min={0}
              placeholder={t(translations.pages.CurrencyPage.list.rate)}
              readOnly={loading}
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
              {t(translations.pages.CurrencyPage.update.submit)}
            </Button>
          </Form.Item>
        </Form>
      </StyledEditCurrencyModal>
    );
  },
);
