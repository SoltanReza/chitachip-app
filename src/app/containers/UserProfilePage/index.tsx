/**
 *
 * UserProfilePage
 *
 */

import React, { useCallback } from 'react';

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

  const handleRoutToLogout = useCallback(() => history.push(Routes.logout), []);

  return (
    <StyledUserProfilePage
      className={`UserProfilePage ${className || ''}`}
      title={t(translations.pages.UserProfilePage.title)}
      description={t(translations.pages.UserProfilePage.description)}
    >
      <Card className="cardUserProfile">
        <div className="titleCardProfile">
          <div>
            <Avatar size="large" icon={<UserOutlined />} />
            <span className="profileName">نام کاربری</span>
          </div>

          <div>
            <Button className="btnLogout" onClick={handleRoutToLogout}>
              خروج
            </Button>
          </div>
        </div>
        <UserProfileItem />
      </Card>
    </StyledUserProfilePage>
  );
}
