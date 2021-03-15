/**
 *
 * RegisterForm
 *
 */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectRegister } from '../../selectors';
import { actions } from '../../slice';
import { StyledRegisterForm } from './styles';

interface Props {
  className?: string;
}

export const RegisterForm = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegister);
  const loading = useMemo(() => !!registerData.params, [registerData.params]);

  const validateMessages = {
    required: `\${name} ${t(translations.global.validation.required)}`,
    types: {
      string: `\${label} ${t(translations.global.validation.types.string)}`,
      number: `\${label} ${t(translations.global.validation.types.string)}`,
      password: `\${label} ${t(translations.global.validation.types.password)}`,
    },
    number: {
      range: `\${label} ${t(translations.global.validation.number.range)}`,
    },
  };

  const handleRegister = useCallback(
    (values: any) => {
      dispatch(
        actions.register({
          email: values.email,
          password: values.password,
        }),
      );
    },
    [dispatch],
  );

  return (
    <StyledRegisterForm className={`RegisterForm ${className || ''}`}>
      <div className="form">
        <div className="logo">
          <img alt="logo" src={process.env.PUBLIC_URL + '/assest/logo.png'} />
        </div>
        <Form
          className="login-form"
          validateMessages={validateMessages}
          onFinish={handleRegister}
        >
          <Form.Item name="email" rules={[{ required: true }]}>
            <Input
              prefix={
                <UserOutlined style={{ fontSize: 13, paddingLeft: '.5em' }} />
              }
              placeholder={t(translations.global.placeholder.username)}
              disabled={loading}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, min: 6, max: 20 }]}
          >
            <Input.Password
              prefix={
                <LockOutlined style={{ fontSize: 13, paddingLeft: '.5em' }} />
              }
              type="password"
              placeholder={t(translations.global.placeholder.password)}
              disabled={loading}
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!',
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={
                <LockOutlined style={{ fontSize: 13, paddingLeft: '.5em' }} />
              }
              placeholder={t(translations.global.placeholder.password)}
              disabled={loading}
            />
          </Form.Item>

          <Row>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              loading={loading}
            >
              {t(translations.pages.RegisterPage.RegisterForm.registerBtn)}
            </Button>
          </Row>
        </Form>
      </div>
      <div className="footer"></div>
    </StyledRegisterForm>
  );
});
