/**
 *
 * CodeRegisterModal
 *
 */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { StyledCodeRegisterModal } from './styles';

import { useTranslation } from 'react-i18next';
import { Form, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { FieldBinaryOutlined } from '@ant-design/icons';
import { getCodeApi, validateCodeApi } from 'app/containers/App/api';
import { appActions } from 'app/containers/App/slice';
import { ValidateCodeResponse } from 'app/containers/App/types';
import { redirect } from 'utils/history';
import { Routes } from 'app/containers/App/Router/routes';

interface Props {
  className?: string;
  onClose: () => void;
}

export const CodeRegisterModal = memo(({ className, onClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showData, setShowData] = useState<ValidateCodeResponse>();
  // const editUserData = useSelector(selectEditUsers);
  // const loading = useMemo(() => !!editUserData.params, [editUserData.params]);
  const handleSubmit = useCallback(values => {
    validateCodeApi({
      code: values.code,
    })
      .then(data => setShowData(data))

      .catch(() => {
        appActions.registerClear();
      });
  }, []);

  // const handleClearData = useCallback(() => {
  //   dispatch(actions.editUsersClear());
  // }, [dispatch]);

  useEffect(() => {
    if (showData) {
      if (showData.status === 200) {
        onClose();
        redirect(Routes.home);
      }
    }
  }, [onClose, showData]);

  return (
    <StyledCodeRegisterModal
      className={`CodeRegisterModal ${className || ''}`}
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
    </StyledCodeRegisterModal>
  );
});
