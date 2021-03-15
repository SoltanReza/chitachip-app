/**
 *
 * LoginForm
 *
 */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Row } from 'antd';
import { selectLogin } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledLoginForm } from './styles';

interface Props {
  className?: string;
}

export const LoginForm = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const loginData = useSelector(selectLogin);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loading = useMemo(() => !!loginData.params, [loginData.params]);

  const handleChangeUsername = useCallback(e => {
    setUsername(e.currentTarget.value);
  }, []);
  const handleChangePassword = useCallback(e => {
    setPassword(e.currentTarget.value);
  }, []);

  const handleLogin = useCallback(
    values => {
      dispatch(
        appActions.login({
          username: values.username,
          password: values.password,
        }),
      );
    },
    [dispatch],
  );

  useEffect(
    () => () => {
      dispatch(appActions.loginClear());
    },
    [dispatch],
  );

  return (
    <StyledLoginForm className={`LoginForm ${className || ''}`}>
      <div className="form">
        <div className="logo">
          {t(translations.global.placeholder.logoTitle)}
          <img alt="logo" src={process.env.PUBLIC_URL + '/assest/logo.png'} />
        </div>
        <div className="noRegister">
          {t(translations.global.placeholder.noRegister)}
        </div>
        <Form onFinish={handleLogin}>
          <Form.Item name="username" rules={[{ required: true }]} hasFeedback>
            <Input
              prefix={
                <UserOutlined style={{ fontSize: 13, paddingLeft: '.5em' }} />
              }
              placeholder={t(translations.global.placeholder.username)}
              disabled={loading}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]} hasFeedback>
            <Input
              prefix={
                <LockOutlined style={{ fontSize: 13, paddingLeft: '.5em' }} />
              }
              type="password"
              min={3}
              max={20}
              disabled={loading}
              placeholder={t(translations.global.placeholder.password)}
            />
          </Form.Item>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              loading={loading}
            >
              {t(translations.pages.LoginPage.LoginForm.login)}
            </Button>{' '}
            {/* <Link className="textLink" to="/register">
              {t(translations.pages.LoginPage.LoginForm.registerNow)}
            </Link> */}
          </Row>
        </Form>
        <div className="notifLogin">
          {t(translations.global.placeholder.notifLogin)}
        </div>
        <div className="notifForgetPass">
          {t(translations.global.placeholder.notifForgetPass)}
        </div>
      </div>
    </StyledLoginForm>
  );
});
