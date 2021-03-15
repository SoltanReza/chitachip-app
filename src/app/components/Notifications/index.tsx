/**
 *
 * Notif
 *
 */
import { message } from 'antd';
import { selectNotification } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import React, { memo, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  className?: string;
}

export const Notifications = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotification);

  useEffect(() => {
    if (notifications.length) {
      notifications.forEach(item => {
        message.open({
          content: <div className="messages">{t(item.message)}</div>,
          type: item.type as any,
          duration: 3.5,
          className: 'notificationMessage',
        });
      });

      dispatch(appActions.notifyClear());
    }
  }, [t, notifications, dispatch]);

  return null;
});
