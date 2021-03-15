/**
 *
 * ModifyCurrencyTypeModal
 *
 */
import { Button, Form, Input } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectModifyCurrencyType } from '../../selectors';
import { actions } from '../../slice';
import { ModifyCurrencyTypeRequest } from '../../types';
import { StyledModifyCurrencyTypeModal } from './styles';

interface Props {
  className?: string;
  item: ModifyCurrencyTypeRequest;
  onClose: () => void;
}

export const ModifyCurrencyTypeModal = memo(
  ({ className, item, onClose }: Props) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const modifyCurrencyTypeData = useSelector(selectModifyCurrencyType);
    const loading = useMemo(() => !!modifyCurrencyTypeData.params, [
      modifyCurrencyTypeData.params,
    ]);

    const handleSubmit = useCallback(
      values => {
        dispatch(
          actions.modifyCurrencyType({
            user_id: item.user_id,
            currency_id: item.currency_id,
            type: values.type,
          }),
        );
      },
      [dispatch, item.currency_id, item.user_id],
    );

    const handleClearData = useCallback(() => {
      dispatch(actions.modifyCurrencyTypeClear());
    }, [dispatch]);

    useEffect(() => {
      if (modifyCurrencyTypeData.data) {
        dispatch(actions.modifyCurrencyTypeClear());
        onClose();
      }
    }, [modifyCurrencyTypeData.data, dispatch, onClose]);

    return (
      <StyledModifyCurrencyTypeModal
        className={`ModifyCurrencyTypeModal ${className || ''}`}
        title={t(
          translations.pages.UserManagementPage.modifyCurrencyType.title,
        )}
        visible
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={onClose}
        afterClose={handleClearData}
      >
        <Form className="currencyTypeForm" onFinish={handleSubmit}>
          <Form.Item name="type" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(
                translations.pages.UserManagementPage.modifyCurrencyType
                  .placeholder,
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
              {t(
                translations.pages.UserManagementPage.modifyCurrencyType.submit,
              )}
            </Button>
          </Form.Item>
        </Form>
      </StyledModifyCurrencyTypeModal>
    );
  },
);
