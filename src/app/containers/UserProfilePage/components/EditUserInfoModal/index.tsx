/**
 *
 * EditUserInfoModal
 *
 */
import { Button, Form, Input } from 'antd';
import { appActions } from 'app/containers/App/slice';
import { UserData } from 'app/containers/App/types';
import { selectEditUser } from 'app/containers/UserProfilePage/selectors';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slice';
import { StyledEditUserInfoModal } from './styles';

interface Props {
  className?: string;
  user: UserData;
  onClose: () => void;
}

export const EditUserInfoModal = memo(({ className, user, onClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const editUserData = useSelector(selectEditUser);
  const loading = useMemo(() => !!editUserData.params, [editUserData.params]);

  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.editUser({
          first_name: values.first_name,
          last_name: values.last_name,
          mobile: values.mobile,
          national_code: values.national_code,
        }),
      );
    },
    [dispatch],
  );

  const handleClearData = useCallback(() => {
    dispatch(actions.editUserClear());
  }, [dispatch]);

  useEffect(() => {
    if (editUserData.data) {
      dispatch(actions.editUserClear());
      dispatch(appActions.userInfo({}));
      onClose();
    }
  }, [editUserData.data, dispatch, onClose]);

  return (
    <StyledEditUserInfoModal
      className={`EditUserInfoModal ${className || ''}`}
      title="ویرایش پروفایل کاربری"
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
        initialValues={user || {}}
      >
        <Form.Item name="first_name" rules={[{ required: true }]}>
          <Input readOnly={loading} type="text" placeholder="نام کاربری" />
        </Form.Item>
        <Form.Item name="last_name" rules={[{ required: true }]}>
          <Input type="text" placeholder="نام خانوادگی" readOnly={loading} />
        </Form.Item>
        <Form.Item name="mobile" rules={[{ required: true }]}>
          <Input type="text" placeholder="شماره همراه" readOnly={loading} />
        </Form.Item>
        <Form.Item name="national_code" rules={[{ required: true }]}>
          <Input type="text" placeholder="کد ملی" readOnly={loading} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn btn-secondary"
            block
            loading={loading}
          >
            ویرایش
          </Button>
        </Form.Item>
      </Form>
    </StyledEditUserInfoModal>
  );
});
