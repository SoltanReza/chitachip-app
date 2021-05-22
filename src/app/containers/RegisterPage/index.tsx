/**
 *
 * RegisterPage
 *
 */

import { Button, Form, Input, message, Row } from 'antd';
import { translations } from 'locales/i18n';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { validateCodeApi } from '../App/api';
import { Routes } from '../App/Router/routes';
import { selectRegister } from '../App/selectors';
import { appActions } from '../App/slice';
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
  const history = useHistory();
  const { t } = useTranslation();
  const mobile = useParams<{ mobile: string }>();
  const dispatch = useDispatch();
  const [showCodeSend, setShowCodeSend] = useState(false);
  const [loadingValideData, setLoadingValideData] = useState(false);

  const registerData = useSelector(selectRegister);
  const loading = useMemo(() => !!registerData.params, [registerData.params]);
  const handleRoutToLogin = useCallback(() => history.push(Routes.login), [
    history,
  ]);
  const handleRegister = useCallback(
    values => {
      dispatch(
        appActions.register({
          password: values.password,
          mobile: mobile.mobile,
        }),
      );
    },
    [dispatch, mobile.mobile],
  );

  const handleValidateCode = useCallback(
    values => {
      setLoadingValideData(true);
      validateCodeApi({
        code: values.code,
      })
        .then(data => {
          if (data.status === 200) {
            setLoadingValideData(false);
            message.info(
              'لطفا برای تکمیل اطلاعات کاربری به صفحه پروفایل کاربری مراجعه فرمایید',
            );
            history.push(Routes.home);
          } else if (data.status === 400) {
            message.info('کد وارد شده صحیح نمیباشد');
            history.push(Routes.register);
          } else {
            setLoadingValideData(false);
          }
        })
        .catch(() => {});
    },
    [history],
  );

  const handleRoutToHome = useCallback(() => history.push(Routes.home), [
    history,
  ]);

  useEffect(() => {
    if (registerData.data) {
      if (registerData.data.status === 201) {
        setShowCodeSend(true);
      }
    }
    dispatch(appActions.registerClear());
  }, [dispatch, registerData.data]);

  console.log(mobile);
  return (
    <StyledRegisterPage
      className={`RegisterPage ${className || ''}`}
      title={t(translations.pages.RegisterPage.title)}
      // description={t(translations.pages.RegisterPage.description)}
    >
      {!showCodeSend ? (
        <div className="form">
          <div className="logo" onClick={handleRoutToHome}>
            {/* {t(translations.global.placeholder.logoTitle)} */}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
            />
          </div>

          <div className="titleLogin">ثبت نام</div>
          <Form onFinish={handleRegister}>
            {/* <Form.Item name="first_name" rules={[{ required: true }]}>
              <Input
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.firstName)}
                disabled={loading}
              />
            </Form.Item>
            <Form.Item name="last_name" rules={[{ required: true }]}>
              <Input
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.lastName)}
                disabled={loading}
              />
            </Form.Item> */}
            <Form.Item name="mobile">
              <Input
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.username)}
                defaultValue={`${mobile.mobile}`}
                disabled={true}
              />
            </Form.Item>
            {/* <Form.Item name="national_code" rules={[{ required: true }]}>
              <Input
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.nationalCode)}
                disabled={loading}
              />
            </Form.Item> */}
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'لطفا رمز عبور خود را وارد نمایید',
                },
              ]}
            >
              <Input
                type="password"
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.password)}
                disabled={loading}
              />
            </Form.Item>

            <Row className="btnDir">
              <Button
                type="primary"
                htmlType="submit"
                className="btnLogin"
                loading={loading}
              >
                {t(translations.pages.LoginPage.LoginForm.continue)}
              </Button>{' '}
            </Row>
          </Form>
        </div>
      ) : (
        <div className="form">
          <div className="logo">
            {/* {t(translations.global.placeholder.logoTitle)} */}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
            />
          </div>

          <div className="titleLogin">کد ارسالی</div>
          <Form onFinish={handleValidateCode}>
            <Form.Item name="code" rules={[{ required: true }]}>
              <Input
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.code)}
                disabled={loading}
              />
            </Form.Item>

            <Row className="btnDir">
              <Button
                type="primary"
                htmlType="submit"
                className="btnLogin"
                loading={loading}
              >
                {t(translations.pages.RegisterPage.RegisterForm.registerBtn)}
              </Button>{' '}
            </Row>
          </Form>
        </div>
      )}

      {/* <StyledRegisterForm onFinish={handleRegister}>
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
      {showCodeModal && <CodeRegisterModal onClose={handleCloseCodeModal} />} */}
    </StyledRegisterPage>
  );
}
