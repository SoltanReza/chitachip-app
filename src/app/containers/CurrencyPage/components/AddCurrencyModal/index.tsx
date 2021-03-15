/**
 *
 * AddCurrencyModal
 *
 */
import { Button, Form, Input, Modal } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddCurrency } from '../../selectors';
import { actions } from '../../slice';
import { StyledAddCurrencyModal } from './styles';

interface Props {
  className?: string;
}

export const AddCurrencyModal = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const addCurrencyData = useSelector(selectAddCurrency);
  const loading = useMemo(() => !!addCurrencyData.params, [
    addCurrencyData.params,
  ]);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);
  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.addCurrency({
          name: values.name,
          rate_in_rial: values.rate_in_rial,
        }),
      );
    },
    [dispatch],
  );
  const handleClearData = useCallback(() => {
    dispatch(actions.addCurrencyClear());
  }, [dispatch]);

  useEffect(() => {
    if (addCurrencyData.data) {
      handleCloseModal();
    }
  }, [addCurrencyData.data, handleCloseModal]);

  return (
    <StyledAddCurrencyModal className={`AddCurrencyModal ${className || ''}`}>
      <Button onClick={handleShowModal} className="btn btn-secondary">
        {t(translations.pages.CurrencyPage.add.submit)}
      </Button>

      <Modal
        title={t(translations.pages.CurrencyPage.update.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
        afterClose={handleClearData}
      >
        <Form className="addCurrencyForm" onFinish={handleSubmit}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(translations.pages.CurrencyPage.list.name)}
              readOnly={loading}
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
      </Modal>
    </StyledAddCurrencyModal>
  );
});
