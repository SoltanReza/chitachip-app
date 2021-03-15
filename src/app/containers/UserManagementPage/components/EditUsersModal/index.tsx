/**
 *
 * EditUsersModal
 *
 */
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { StyledEditUsersModal } from './styles';

import { useTranslation } from 'react-i18next';
import { Button, Form, Input } from 'antd';
import { translations } from 'locales/i18n';
import { User, UserProfile } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditUsers } from '../../selectors';
import { actions } from '../../slice';

interface Props {
  className?: string;
  user: User;
  onClose: () => void;
}

export const EditUsersModal = memo(({ className, user, onClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const editUserData = useSelector(selectEditUsers);
  const loading = useMemo(() => !!editUserData.params, [editUserData.params]);
  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.editUsers({
          id: user.id,
          profile: values as UserProfile,
        }),
      );
    },
    [dispatch, user.id],
  );

  const handleClearData = useCallback(() => {
    dispatch(actions.editUsersClear());
  }, [dispatch]);

  useEffect(() => {
    if (editUserData.data) {
      dispatch(actions.editUsersClear());
      onClose();
    }
  }, [editUserData.data, dispatch, onClose]);
  return (
    <StyledEditUsersModal
      className={`EditUsersModal ${className || ''}`}
      title={t(translations.pages.UserManagementPage.update.title)}
      visible
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
      closable={!loading}
      onCancel={onClose}
      afterClose={handleClearData}
    >
      <Form
        className="profilForm"
        onFinish={handleSubmit}
        initialValues={user.profile || {}}
      >
        <Form.Item name="first_name" rules={[{ required: true }]}>
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            type="text"
            placeholder={t(translations.global.placeholder.firstName)}
          />
        </Form.Item>
        <Form.Item name="last_name" rules={[{ required: true }]}>
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            placeholder={t(translations.global.placeholder.lastName)}
          />
        </Form.Item>
        <Form.Item name="father_name" rules={[{ required: true }]}>
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            placeholder={t(translations.global.placeholder.fatherName)}
          />
        </Form.Item>
        <Form.Item name="sh_sh" rules={[{ required: true }]}>
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            placeholder={t(translations.global.placeholder.shSh)}
          />
        </Form.Item>
        <Form.Item
          name="national_code"
          rules={[{ required: true, min: 10, max: 10 }]}
        >
          <Input
            prefix={<LockOutlined style={{ fontSize: 13 }} />}
            placeholder={t(translations.global.placeholder.nationalCode)}
          />
        </Form.Item>
        <Form.Item name="tel" rules={[{ required: true }]}>
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            placeholder={t(translations.global.placeholder.mobile)}
          />
        </Form.Item>
        <Form.Item name="address" rules={[{ required: true }]}>
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            placeholder={t(translations.global.placeholder.address)}
          />
        </Form.Item>
        <Form.Item name="post_code" rules={[{ required: true }]}>
          <Input
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            placeholder={t(translations.global.placeholder.postCode)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn btn-secondary"
            block
          >
            {t(translations.pages.UserManagementPage.update.submit)}
          </Button>
        </Form.Item>
      </Form>
    </StyledEditUsersModal>
  );
});
