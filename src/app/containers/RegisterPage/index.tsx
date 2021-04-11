/**
 *
 * RegisterPage
 *
 */

import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { VALIDATION_REQUIRED_FIELD } from 'utils/rules';
import { StyledLoginForm } from '../LoginPage/styles';
import { registerPageSaga } from './saga';
import { selectRegisterPage } from './selectors';
import { reducer, sliceKey } from './slice';
import { StyledRegisterPage } from './styles';

interface Props {
  className?: string;
}

export function RegisterPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: registerPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const registerPage = useSelector(selectRegisterPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledRegisterPage
      className={`RegisterPage ${className || ''}`}
      title={t(translations.pages.RegisterPage.title)}
      description={t(translations.pages.RegisterPage.description)}
    >
      <StyledLoginForm>
        <div className="container">
          <div className="header">
            <h5 className="title">فرم ثبت نام</h5>
            <p className="description"> ثبت نام در سامانه فروشگاهی چیتا چیپ</p>

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
              ثبت نام
            </Button>
          </StyledLoginForm.Item>
        </div>
      </StyledLoginForm>
    </StyledRegisterPage>
  );
}
