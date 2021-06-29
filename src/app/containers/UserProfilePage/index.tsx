/**
 *
 * UserProfilePage
 *
 */

import React, { useCallback, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { UserOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { StyledUserProfilePage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectUserProfilePage } from './selectors';

import { userProfilePageSaga } from './saga';
import { Card, Row, Col, Avatar, Button, Typography } from 'antd';
import { UserProfileItem } from './components/UserProfileItem';
import { history } from 'utils/history';
import { Routes } from '../App/Router/routes';
import { selectUserInfo } from '../App/selectors';
import { appActions } from '../App/slice';

interface Props {
  className?: string;
}

export function UserProfilePage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: userProfilePageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userProfilePage = useSelector(selectUserProfilePage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const userData = useSelector(selectUserInfo);

  const handleRoutToLogout = useCallback(() => history.push(Routes.logout), []);

  useEffect(() => {
    dispatch(appActions.userInfo({}));
  }, [dispatch]);

  return (
    <StyledUserProfilePage
      className={`UserProfilePage ${className || ''}`}
      title={t(translations.pages.UserProfilePage.title)}
      description={t(translations.pages.UserProfilePage.description)}
    >
      <div className="cardUserProfile">
        <div className="titleCardProfile">
          <Avatar
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            size="large"
            icon={<UserOutlined />}
          />
          <span className="profileName">
            {userData &&
            userData.data &&
            (userData.data.user.first_name || userData.data.user.first_name)
              ? userData.data.user.first_name +
                ' ' +
                userData.data.user.last_name
              : userData.data && userData.data.mobile}
          </span>
        </div>
        <UserProfileItem />
      </div>
    </StyledUserProfilePage>
  );
}
