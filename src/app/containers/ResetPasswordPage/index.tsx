/**
 *
 * ResetPasswordPage
 *
 */

import React, { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { Button, Input, Form, Col, Row, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { StyledResetPasswordPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectResetPasswordPage } from './selectors';

import { resetPasswordPageSaga } from './saga';
import { history } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { appActions } from '../App/slice';

interface Props {
  className?: string;
}

export function ResetPasswordPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: resetPasswordPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const resetPasswordPage = useSelector(selectResetPasswordPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const [showCodeSend, setShowCodeSend] = useState(false);
  const [loadingValideData, setLoadingValideData] = useState(false);

  const handleRoutToLogin = useCallback(() => history.push(Routes.login), []);
  const handleRegister = useCallback(values => {}, []);

  const handleValidateCode = useCallback(values => {
    setLoadingValideData(true);
    // validateCodeApi({
    //   code: values.code,
    // })
    //   .then(data => {
    //     if (data.status === 200) {
    //       setLoadingValideData(false);
    //       message.info('ثبت نام شما با موفقیت انجام');
    //       history.push(Routes.home);
    //     } else if (data.status === 400) {
    //       message.info('کد وارد شده صحیح نمیباشد');
    //       history.push(Routes.register);
    //     } else {
    //       setLoadingValideData(false);
    //     }
    //   })
    //   .catch(() => {});
  }, []);

  return (
    <StyledResetPasswordPage
      className={`ResetPasswordPage ${className || ''}`}
      title={t(translations.pages.ResetPasswordPage.title)}
      description={t(translations.pages.ResetPasswordPage.description)}
    >
      <div className="form">
        <div className="logo">
          {/* {t(translations.global.placeholder.logoTitle)} */}
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
          />
        </div>

        <div className="titleLogin">فراموشی رمز عبور</div>
        <div>لطفا کد پیامک شده به شماره همراه خود را وارد نمایید</div>
        <Form onFinish={handleRegister}>
          <Form.Item name="code" rules={[{ required: true }]}>
            <Input
              className="inputLoginStyle"
              placeholder={t(translations.global.placeholder.code)}
              disabled={loadingValideData}
            />
          </Form.Item>

          <Row className="btnDir">
            <Button
              type="primary"
              htmlType="submit"
              className="btnLogin"
              loading={loadingValideData}
            >
              {t(translations.pages.LoginPage.LoginForm.continue)}
            </Button>{' '}
          </Row>
        </Form>
      </div>
    </StyledResetPasswordPage>
  );
}
