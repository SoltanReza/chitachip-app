/**
 *
 * LoginPage
 *
 */

import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { translations } from 'locales/i18n';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { VALIDATION_REQUIRED_FIELD } from 'utils/rules';
import { Routes } from '../App/Router/routes';
import { loginPageSaga } from './saga';
import { selectLoginPage } from './selectors';
import { reducer, sliceKey } from './slice';
import { StyledLoginForm, StyledLoginPage } from './styles';

interface Props {
  className?: string;
}

export function LoginPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: loginPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const loginPage = useSelector(selectLoginPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const history = useHistory();
  const { t } = useTranslation();

  const handleRoutToRegister = useCallback(
    () => history.push(Routes.register),
    [history],
  );

  return (
    <StyledLoginPage
      className={`LoginPage ${className || ''}`}
      title={t(translations.pages.LoginPage.title)}
      description={t(translations.pages.LoginPage.description)}
    >
      <StyledLoginForm>
        <div className="container">
          <div className="header">
            <h5 className="title">ورود به سیستم</h5>
            <p className="description">ورود به سامانه فروشگاهی چیتا چیپ</p>

            <div className="logo" />
          </div>

          <StyledLoginForm.Item
            name="username"
            rules={[VALIDATION_REQUIRED_FIELD]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="نام کاربری را وارد نمایید"
            />
          </StyledLoginForm.Item>
          <StyledLoginForm.Item
            name="password"
            rules={[VALIDATION_REQUIRED_FIELD]}
          >
            <Input
              size="large"
              prefix={<KeyOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="گذرواژه را وارد نمایید"
            />
          </StyledLoginForm.Item>

          <StyledLoginForm.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
              // loading={LOGIN.loading}
              block
            >
              ورود
            </Button>

            <div className="goToRegister" onClick={handleRoutToRegister}>
              ثبت نام
            </div>
          </StyledLoginForm.Item>
        </div>
      </StyledLoginForm>
    </StyledLoginPage>
  );
}
