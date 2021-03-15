/**
 *
 * AddUsersModal
 *
 */
import { Button, Form, Input, Modal } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddUsers } from '../../selectors';
import { actions } from '../../slice';
import { StyledAddUsersModal } from './styles';

interface Props {
  className?: string;
}

export const AddUsersModal = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const addUsersData = useSelector(selectAddUsers);
  const loading = useMemo(() => !!addUsersData.params, [addUsersData.params]);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);
  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.AddUsers({
          email: values.email,
          password: values.password,
        }),
      );
    },
    [dispatch],
  );
  const handleClearData = useCallback(() => {
    dispatch(actions.AddUsersClear());
  }, [dispatch]);

  useEffect(() => {
    if (addUsersData.data) {
      handleCloseModal();
    }
  }, [addUsersData.data, handleCloseModal]);

  return (
    <StyledAddUsersModal className={`AddUsersModal ${className || ''}`}>
      <Button onClick={handleShowModal} className="btn btn-secondary">
        {t(translations.pages.UserManagementPage.add.submit)}
      </Button>

      <Modal
        title={t(translations.pages.UserManagementPage.update.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
        afterClose={handleClearData}
      >
        <Form className="addCurrencyForm" onFinish={handleSubmit}>
          <Form.Item name="email" rules={[{ required: true }]}>
            <Input
              type="text"
              autoComplete="off"
              placeholder={t(
                translations.pages.UserManagementPage.list.userName,
              )}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password
              type="password"
              autoComplete="off"
              min={0}
              placeholder={t(
                translations.pages.UserManagementPage.list.password,
              )}
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
              {t(translations.pages.UserManagementPage.add.submit)}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledAddUsersModal>
  );
});
