/**
 *
 * CodeLoginModal
 *
 */
import React, { memo, useCallback, useEffect, useState } from 'react';

import { StyledCodeLoginModal } from './styles';
import { Form, Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { ValidateCodeResponse } from 'app/containers/App/types';
import { validateCodeApi } from 'app/containers/App/api';
import { appActions } from 'app/containers/App/slice';
import { FieldBinaryOutlined } from '@ant-design/icons';
import { redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';

interface Props {
  className?: string;
  onClose: () => void;
}

export const CodeLoginModal = memo(({ className, onClose }: Props) => {
  const { t } = useTranslation();

  const [showData, setShowData] = useState<ValidateCodeResponse>();

  const handleSubmit = useCallback(values => {
    validateCodeApi({
      code: values.code,
    })
      .then(data => setShowData(data))

      .catch(() => {
        appActions.loginClear();
      });
  }, []);

  useEffect(() => {
    if (showData) {
      if (showData.status === 200) {
        onClose();
        redirect(Routes.home)
      }
    }
  }, [onClose, showData]);

  return (
    <StyledCodeLoginModal
      className={`CodeLoginModal ${className || ''}`}
      title="کد ارسالی از طریق  پیامک"
      visible
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
      // closable={!loading}
      onCancel={onClose}
      // afterClose={handleClearData}
    >
      <Form className="profilForm" onFinish={handleSubmit}>
        <Form.Item name="code" rules={[{ required: true }]}>
          <Input
            prefix={<FieldBinaryOutlined style={{ fontSize: 13 }} />}
            type="text"
            placeholder="لطفا کد ارسالی را وارد نمایید"
          />
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            تایید
          </Button>
        </Form.Item>
      </Form>
    </StyledCodeLoginModal>
  );
});
