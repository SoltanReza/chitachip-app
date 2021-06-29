/**
 *
 * LoginPage
 *
 */

import {
  FacebookOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Button, Col, Form, Input, message, Row } from 'antd';
import { translations } from 'locales/i18n';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { redirect } from 'utils/history';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Storage } from 'utils/storage';

import {
  changePasswordApi,
  checkPasswordApi,
  checkUserApi,
  getCodeApi,
  getTokenApi,
  resetPasswordCodeApi,
  validateCodeApi,
  validationCodeApi,
} from '../App/api';
import { Routes } from '../App/Router/routes';
import { selectLogin } from '../App/selectors';
import { appActions } from '../App/slice';
import { loginPageSaga } from './saga';
import { selectLoginPage } from './selectors';
import { reducer, sliceKey } from './slice';
import { StyledLoginPage } from './styles';

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
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showCheckUsername, setShowCheckUsername] = useState(true);
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const [showValidationCode, setShowValidationCode] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [showActive, setShowActive] = useState(false);
  const [lodingData, setLodingData] = useState(false);
  const [lodingPassData, setLodingPassData] = useState(false);
  const [loadingValideData, setLoadingValideData] = useState(false);
  const [loadingResetPass, setLoadingResetPass] = useState(false);
  const loginData = useSelector(selectLogin);
  const loading = useMemo(() => !!loginData.params, [loginData.params]);

  const handleChangeUsername = useCallback(
    e => setUsername(e.currentTarget.value),
    [],
  );
  const handleChangePassword = useCallback(e => {
    setPassword(e.currentTarget.value);
  }, []);
  const handleUsernameSubmit = useCallback(
    values => {
      setLodingData(true);

      checkUserApi({
        username: username,
      })
        .then(data => {
          if (data.status === 200) {
            setLodingData(false);
            setShowCheckUsername(false);
            setShowCheckPassword(true);
          } else if (data.status === 201) {
            message.info('لطفا ابتدا ثبت نام کنید');
            redirect(Routes.register, { mobile: username });
          }
        })
        .catch(() => {});
    },
    [username],
  );

  const handleGoToResetPassword = useCallback(() => {
    setShowValidationCode(true);
    setShowCheckPassword(false);
    resetPasswordCodeApi({
      mobile: username,
    })
      .then(data => {
        if (data.status === 100) {
          message.info('کد اعتبار سنجی ارسال شد');
        } else {
        }
      })
      .catch(() => {});
  }, [username]);
  const handlePasswordSubmit = useCallback(
    values => {
      setLodingPassData(true);
      checkPasswordApi({
        username: username,
        password: password,
        mobile: username,
        first_name: '',
        last_name: '',
        national_code: '',
      })
        .then(data => {
          if (data.status === 200) {
            setLodingPassData(false);
            message.info('شما با موفقیت وارد سامانه شدید');
            getTokenApi({
              username: username,
              password: password,
            })
              .then(data => {
                if (data) {
                  history.push(Routes.home);

                  dispatch(
                    appActions.setAuth({
                      access: data.access,
                      refresh: data.refresh,
                    }),
                  );
                  Storage.put('auth', data);
                }
              })
              .catch(() => {
                setShowCheckPassword(false);
              });
          } else {
            message.warning('اطلاعات وارد شده نادرست است');
            setLodingData(false);
            setLodingPassData(false);

            setShowCheckPassword(true);
          }
        })

        .catch(() => {});
    },
    [dispatch, history, password, username],
  );

  const handleValidationCode = useCallback(
    values => {
      setLoadingValideData(true);
      validationCodeApi({
        code: values.code,
        mobile: username,
      })
        .then(data => {
          if (data.status === 200) {
            setLoadingValideData(false);
            setShowResetPassword(true);
            setShowValidationCode(false);
          } else {
          }
        })

        .catch(e => {
          console.log(e);
        });
    },
    [username],
  );

  const handleValidatCode = useCallback(
    values => {
      setLodingPassData(true);
      validateCodeApi({
        code: values.code,
      })
        .then(data => {
          if (data.status === 200) {
            message.info('اکانت شما فعال شد');
            history.push(Routes.home);
            setShowActive(false);
            getTokenApi({
              username: username,
              password: password,
            })
              .then(data => {
                if (data) {
                  setLodingPassData(false);

                  dispatch(
                    appActions.setAuth({
                      access: data.access,
                      refresh: data.refresh,
                    }),
                  );
                  Storage.put('auth', data);
                  getCodeApi({})
                    .then(data => {})
                    .catch(() => {});
                }
              })
              .catch(() => {});
          } else if (data.status === 400) {
            message.info('کد را اشتباه وارد کردید, لطفا دوباره تلاش کنید');
          } else {
          }
        })

        .catch(e => {
          console.log(e);
        });
    },
    [dispatch, history, password, username],
  );

  const handleResetPassword = useCallback(
    values => {
      setLoadingResetPass(true);
      changePasswordApi({
        username: username,
        password: values.password,
      })
        .then(data => {
          if (data.status === 200) {
            setLoadingResetPass(false);
            setShowValidationCode(false);
            message.info('رمز عبور شما با موفقیت تغغیر کرد');

            checkPasswordApi({
              username: username,
              password: password,
              mobile: username,
              first_name: '',
              last_name: '',
              national_code: '',
            })
              .then(data => {
                if (data.status === 200) {
                  history.push(Routes.home);
                  getTokenApi({
                    username: username,
                    password: values.password,
                  })
                    .then(data => {
                      if (data) {
                        dispatch(
                          appActions.setAuth({
                            access: data.access,
                            refresh: data.refresh,
                          }),
                        );
                        Storage.put('auth', data);
                      }
                    })
                    .catch(() => {});
                } else {
                }
              })
              .catch(() => {});
          } else {
          }
        })
        .catch(() => {});
    },
    [dispatch, history, password, username],
  );

  const handleRoutToHome = useCallback(() => history.push(Routes.home), [
    history,
  ]);

  useEffect(() => {
    if (loginData.data) {
      if (loginData.data.status === 100) {
        setShowCodeModal(true);
      }
    }
  }, [dispatch, loginData.data]);

  return (
    <StyledLoginPage
      className={`LoginPage ${className || ''}`}
      title={t(translations.pages.LoginPage.title)}
      // description={t(translations.pages.LoginPage.description)}
    >
      {showCheckUsername && (
        <div className="form">
          <div className="logo" onClick={handleRoutToHome}>
            {/* {t(translations.global.placeholder.logoTitle)} */}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
            />
          </div>

          <div className="titleLogin">ورود / ثبت نام</div>
          <Form onFinish={handleUsernameSubmit}>
            <Form.Item name="username" rules={[{ required: true }]}>
              <Input
                className="inputLoginStyle"
                placeholder="شماره همراه"
                disabled={loading}
                onChange={handleChangeUsername}
              />
            </Form.Item>

            <Row className="btnDir">
              <Button
                type="primary"
                htmlType="submit"
                className="btnLogin"
                loading={lodingData}
              >
                ادامه
              </Button>
            </Row>
          </Form>
          <Row gutter={8} className="footer">
            <Col>
              <GoogleOutlined />
            </Col>
            <Col>
              <FacebookOutlined />
            </Col>
            <Col>
              <TwitterOutlined />
            </Col>
            <Col>ورود از طریق</Col>
          </Row>
        </div>
      )}

      {showCheckPassword && (
        <div className="form">
          <div className="logo" onClick={handleRoutToHome}>
            {/* {t(translations.global.placeholder.logoTitle)} */}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
            />
          </div>

          <div className="titleLogin">رمز عبور</div>
          <div className="descPassowrd">
            جهت ورود به حساب کاربری لطفا رمز عبور خود را وارد نمایید.
            {invalidPassword && (
              <p className="invalidPass">اطلاعات وارد شده نادرست است</p>
            )}
          </div>
          <Form onFinish={handlePasswordSubmit}>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input
                type="password"
                className="inputLoginStyle"
                placeholder="رمز عبور"
                disabled={lodingPassData}
                onChange={handleChangePassword}
              />
            </Form.Item>

            <Row className="actionPass">
              <div className="forgetPassword" onClick={handleGoToResetPassword}>
                فراموشی رمز عبور
              </div>
              <Button
                type="primary"
                htmlType="submit"
                className="btnLogin"
                loading={lodingPassData}
              >
                ورود
              </Button>
            </Row>
          </Form>
          <Row gutter={8} className="footer">
            <Col>
              <GoogleOutlined />
            </Col>
            <Col>
              <FacebookOutlined />
            </Col>
            <Col>
              <TwitterOutlined />
            </Col>
            <Col>ورود از طریق</Col>
          </Row>
        </div>
      )}

      {showActive && (
        <div className="form">
          <div className="logo" onClick={handleRoutToHome}>
            {/* {t(translations.global.placeholder.logoTitle)} */}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
            />
          </div>

          <div className="titleLogin">کد فعال سازی</div>
          <div>لطفا کد پیامک شده به شماره همراه خود را وارد نمایید</div>
          <Form onFinish={handleValidatCode}>
            <Form.Item name="code" rules={[{ required: true }]}>
              <Input
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.code)}
                // disabled={loadingValideData}
              />
            </Form.Item>

            <Row className="btnDir">
              <Button
                type="primary"
                htmlType="submit"
                className="btnLogin"
                // loading={loadingValideData}
              >
                {t(translations.pages.LoginPage.LoginForm.continue)}
              </Button>{' '}
            </Row>
          </Form>
        </div>
      )}

      {showValidationCode && (
        <div className="form">
          <div className="logo" onClick={handleRoutToHome}>
            {/* {t(translations.global.placeholder.logoTitle)} */}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
            />
          </div>

          <div className="titleLogin">فراموشی رمز عبور</div>
          <div>لطفا کد پیامک شده به شماره همراه خود را وارد نمایید</div>
          <Form onFinish={handleValidationCode}>
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
      )}
      {showResetPassword && (
        <div className="form">
          <div className="logo" onClick={handleRoutToHome}>
            {/* {t(translations.global.placeholder.logoTitle)} */}
            <img
              alt="logo"
              src={process.env.PUBLIC_URL + '/assest/Chitachip.svg'}
            />
          </div>

          <div className="titleLogin">فراموشی رمز عبور</div>
          <div>لطفا رمز عبور جدید را وارد نمایید</div>
          <Form onFinish={handleResetPassword}>
            <Form.Item name="password" rules={[{ required: true }]}>
              <Input
                className="inputLoginStyle"
                placeholder={t(translations.global.placeholder.password)}
                disabled={loadingResetPass}
              />
            </Form.Item>

            <Row className="btnDir">
              <Button
                type="primary"
                htmlType="submit"
                className="btnLogin"
                loading={loadingResetPass}
              >
                {t(translations.pages.LoginPage.LoginForm.forgotPassword)}
              </Button>{' '}
            </Row>
          </Form>
        </div>
      )}
    </StyledLoginPage>
  );
}
