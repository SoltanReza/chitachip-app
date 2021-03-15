/**
 *
 * ProfileInfo
 *
 */
import { Button, Card, Descriptions, Form, Input, Modal, Row } from 'antd';
import { UserProfileForm } from 'app/components/UserProfileForm';
import { selectAuth } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { resetPasswordApi } from 'app/containers/UserManagementPage/api';
import { translations } from 'locales/i18n';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRoles, UserProfile } from 'types';
import { selectEditProfile } from '../../selectors';
import { actions } from '../../slice';
import { StyledProfileInfo } from './styles';

interface Props {
  className?: string;
}

export const ProfileInfo = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [changePassword, setChangePassword] = useState('');
  const authData = useSelector(selectAuth);
  const formRef = useRef<any>();
  const editProfileData = useSelector(selectEditProfile);
  const loading = useMemo(() => !!editProfileData.params, [
    editProfileData.params,
  ]);

  if (!authData.data) return null;

  const showModal = useCallback(() => {
    setVisible(true);
  }, [setVisible]);

  const handleCancel = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const handleSubmit = useCallback(
    values => {
      if (authData.data) {
        dispatch(
          actions.editProfile({
            id: authData.data.user.id,
            profile: values as UserProfile,
          }),
        );
      }
    },
    [dispatch, authData.data],
  );

  const handleClearData = useCallback(() => {
    dispatch(actions.editProfileClear());
  }, [dispatch]);

  const hamdleChangePassword = useCallback(e => {
    setChangePassword(e.currentTarget.value);
  }, []);
  const handleResetPassword = useCallback(
    e => {
      if (authData.data) {
        resetPasswordApi(authData.data.user.id, changePassword)
          .then(() =>
            dispatch(
              appActions.notifySuccess(
                t(translations.pages.UserManagementPage.resetPasswordSuccess),
              ),
            ),
          )
          .then(() => formRef.current.resetFields())
          .catch(error =>
            t(translations.pages.UserManagementPage.resetPasswordError),
          );
      }
    },
    [dispatch, changePassword, t, authData.data],
  );

  useEffect(() => {
    if (editProfileData.data) {
      setVisible(false);
    }
  }, [editProfileData.data, setVisible]);

  return (
    <StyledProfileInfo className={`ProfileInfo ${className || ''}`}>
      <Card hoverable>
        {authData.data?.user?.profile ? (
          <Row justify="space-around" align="middle" gutter={[16, 16]}>
            <Descriptions title={t(translations.pages.ProfilePage.title)}>
              <Descriptions.Item
                label={t(translations.global.placeholder.username)}
              >
                {authData.data.user.profile.national_code}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.mobile)}
              >
                {authData.data.user.profile?.tel}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.firstName)}
              >
                {authData.data.user.profile?.first_name}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.lastName)}
              >
                {authData.data.user.profile?.last_name}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.fatherName)}
              >
                {authData.data.user.profile?.father_name}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.nationalCode)}
              >
                {authData.data.user.profile?.national_code}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.shSh)}
              >
                {authData.data.user.profile?.sh_sh}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.address)}
              >
                {authData.data.user.profile?.address}
              </Descriptions.Item>
              <Descriptions.Item
                label={t(translations.global.placeholder.postCode)}
              >
                {authData.data.user.profile?.post_code}
              </Descriptions.Item>
            </Descriptions>
          </Row>
        ) : (
          <Row justify="space-around" align="middle" gutter={[16, 16]}>
            پروفایل هنوز تکمیل نشده
          </Row>
        )}

        {authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]) && (
          <Button onClick={showModal} className="btn btn-secondary">
            {t(translations.pages.ProfilePage.updateButton)}
          </Button>
        )}
      </Card>
      <Card>
        <Form
          name="customized_form_controls"
          layout="inline"
          onFinish={handleResetPassword}
          ref={formRef}
        >
          <Form.Item
            name="price"
            label={t(translations.pages.ProfilePage.modifyPassword.placeholder)}
            // rules={[{ validator: checkPrice }]}
          >
            <Input
              placeholder={t(
                translations.pages.ProfilePage.modifyPassword.submit,
              )}
              onChange={hamdleChangePassword}
            />
          </Form.Item>
          <Form.Item>
            <Button
              className="btn btn-secondary"
              type="primary"
              htmlType="submit"
            >
              {t(translations.pages.ProfilePage.modifyPassword.submit)}
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Modal
        title={t(translations.pages.ProfilePage.updateForm.title)}
        visible={visible}
        footer={null}
        onCancel={handleCancel}
        afterClose={handleClearData}
      >
        <Form
          className="profilForm"
          onFinish={handleSubmit}
          initialValues={authData.data?.user.profile || {}}
        >
          <UserProfileForm />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              {t(translations.pages.ProfilePage.updateForm.ok)}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledProfileInfo>
  );
});
