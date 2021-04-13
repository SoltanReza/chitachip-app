/**
 *
 * RegisterPage
 *
 */

import {
  KeyOutlined,
  UserOutlined,
  MobileOutlined,
  FieldBinaryOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import { translations } from 'locales/i18n';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { VALIDATION_REQUIRED_FIELD } from 'utils/rules';
import { Routes } from '../App/Router/routes';
import { selectRegister } from '../App/selectors';
import { appActions } from '../App/slice';
import { CodeRegisterModal } from './components/CodeRegisterModal';
import { registerPageSaga } from './saga';
import { selectRegisterPage } from './selectors';
import { reducer, sliceKey } from './slice';
import { StyledRegisterForm, StyledRegisterPage } from './styles';

interface Props {
  className?: string;
}

export function RegisterPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: registerPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const registerPage = useSelector(selectRegisterPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history = useHistory();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showCodeModal, setShowCodeModal] = useState(false);

  const registerData = useSelector(selectRegister);
  const loading = useMemo(() => !!registerData.params, [registerData.params]);
  const handleRoutToLogin = useCallback(() => history.push(Routes.login), [
    history,
  ]);
  const handleCloseCodeModal = useCallback(() => {
    setShowCodeModal(false);
  }, [setShowCodeModal]);

  const handleRegister = useCallback(
    values => {
      dispatch(
        appActions.register({
          first_name: values.first_name,
          last_name: values.last_name,
          mobile: values.mobile,
          national_code: values.national_code,
          password: values.password,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    if (registerData.data) {
      if (registerData.data.status === 201) {
        setShowCodeModal(true);
      }
    }
    dispatch(appActions.registerClear());
  }, [dispatch, registerData.data]);

  return (
    <StyledRegisterPage
      className={`RegisterPage ${className || ''}`}
      title={t(translations.pages.RegisterPage.title)}
      description={t(translations.pages.RegisterPage.description)}
    >
      <StyledRegisterForm onFinish={handleRegister}>
        <div className="container">
          <div className="header">
            <h5 className="title">فرم ثبت نام</h5>
            <p className="description"> ثبت نام در سامانه فروشگاهی چیتا چیپ</p>

            <div className="logo" />
          </div>

          <StyledRegisterForm.Item
            name="first_name"
            rules={[VALIDATION_REQUIRED_FIELD]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="نام را وارد نمایید"
            />
          </StyledRegisterForm.Item>
          <StyledRegisterForm.Item
            name="last_name"
            rules={[VALIDATION_REQUIRED_FIELD]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder=" نام خانوادگی را وارد نمایید"
            />
          </StyledRegisterForm.Item>

          <StyledRegisterForm.Item
            name="mobile"
            rules={[VALIDATION_REQUIRED_FIELD]}
          >
            <Input
              size="large"
              prefix={<MobileOutlined className="site-form-item-icon" />}
              placeholder="موبایل را وارد نمایید"
            />
          </StyledRegisterForm.Item>
          <StyledRegisterForm.Item
            name="national_code"
            rules={[VALIDATION_REQUIRED_FIELD]}
          >
            <Input
              size="large"
              prefix={<FieldBinaryOutlined className="site-form-item-icon" />}
              placeholder="کد ملی را وارد نمایید"
            />
          </StyledRegisterForm.Item>
          <StyledRegisterForm.Item
            name="password"
            rules={[VALIDATION_REQUIRED_FIELD]}
          >
            <Input
              size="large"
              prefix={<KeyOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="گذرواژه را وارد نمایید"
            />
          </StyledRegisterForm.Item>

          <StyledRegisterForm.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
              block
            >
              ثبت نام
            </Button>

            <div className="goToRegister" onClick={handleRoutToLogin}>
              ورود
            </div>
          </StyledRegisterForm.Item>
        </div>
      </StyledRegisterForm>
      {showCodeModal && <CodeRegisterModal onClose={handleCloseCodeModal} />}
    </StyledRegisterPage>
  );
}
