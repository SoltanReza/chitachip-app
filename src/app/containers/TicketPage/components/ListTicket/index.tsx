/**
 *
 * ListTicket
 *
 */

import { Button, Card, Table } from 'antd';
import { markAsReadMessageApi } from 'app/containers/App/api';
import { selectAuthData, selectBrowseUser } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { Ticket, TicketStatus } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import moment from 'moment-jalaali';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRoles } from 'types';
import { selectBrowseTicket } from '../../selectors';
import { actions } from '../../slice';
import { AddTicket } from '../AddTicket';
import { ReplayTicket } from '../ReplayTicket';
import { StyledListTicket } from './styles';
interface Props {
  className?: string;
}

export const ListTicket = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [itemForReplay, setItemForReplay] = useState<Ticket | undefined>();
  const [selectStatus, setSelectStatus] = useState(true);

  const UserData = useSelector(selectBrowseUser);
  const authData = useSelector(selectAuthData);
  const browseTicketData = useSelector(selectBrowseTicket);
  const ticketData =
    browseTicketData.data &&
    browseTicketData.data.data.map(item => ({
      ...item,
      key: item.id,
      childrenLength: item.children ? item.children.length : 0,
    }));

  const loading = useMemo(() => !!browseTicketData.params, [
    browseTicketData.params,
  ]);

  const handleChangeStatuseMessage = useCallback(
    key => {
      if (key) {
        const item = browseTicketData?.data?.data.find(x => x.id === +key);
        if (item?.status === TicketStatus.UNREAD) {
          markAsReadMessageApi(key)
            .then(id =>
              dispatch(appActions.markMessageAsReadSuccess(id as any)),
            )
            .then(id => dispatch(actions.browseTicket({})));
        }
        if (item?.status === TicketStatus.UNREAD_REPLY) {
          markAsReadMessageApi(key)
            .then(id =>
              dispatch(appActions.markMessageAsReadSuccess(id as any)),
            )
            .then(id => dispatch(actions.browseTicket({})));
        }
      }
    },
    [dispatch, browseTicketData],
  );
  const handleShowReplayModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;

      setItemForReplay(
        browseTicketData.data!.data.find(x => x.id === +data.id),
      );
      handleChangeStatuseMessage(+data.id);
    },
    [browseTicketData.data, handleChangeStatuseMessage],
  );
  const handleCloseReplayModal = useCallback(() => {
    setItemForReplay(undefined);
  }, [setItemForReplay]);

  useEffect(() => {
    dispatch(actions.browseTicket({}));

    if (authData?.role === AuthRoles.ADMIN) {
      dispatch(appActions.browseUser({}));
    }
  }, [authData, dispatch]);
  return (
    <StyledListTicket className={`ListTicket ${className || ''}`}>
      <Card>
        <AddTicket />

        <Table
          dataSource={ticketData}
          loading={loading}
          pagination={{ position: ['bottomRight'], pageSize: 10 }}
          scroll={{ x: 1000 }}
        >
          <Table.Column
            title={t(translations.pages.TicketPage.list.title)}
            render={item => item.title}
          />
          <Table.Column
            title={t(translations.pages.TicketPage.list.creator.title)}
            render={item =>
              authData &&
              (authData.role === AuthRoles.REGULAR
                ? authData.user.id === item.creator_id
                  ? authData.user.profile?.last_name
                  : t(translations.pages.TicketPage.list.creator.admin)
                : authData.user.id === item.creator_id
                ? t(translations.pages.TicketPage.list.creator.admin)
                : item.creator.email)
            }
          />
          <Table.Column
            title={t(translations.pages.TicketPage.list.receiver.title)}
            render={item =>
              authData && authData.role === AuthRoles.REGULAR
                ? authData.user.id === item.user_id
                  ? authData.user.profile?.last_name
                  : t(translations.pages.TicketPage.list.receiver.admin)
                : authData && authData.user.id === item.user_id
                ? t(translations.pages.TicketPage.list.receiver.admin)
                : item.user && item.user.email
            }
          />
          <Table.Column
            title={t(translations.pages.TicketPage.list.createdAt)}
            render={item => moment(item.created_at).format('jYYYY/jM/jD')}
          />
          <Table.Column
            title={t(translations.pages.TicketPage.list.status)}
            render={
              item =>
                (item.status === TicketStatus.UNREAD &&
                  t(translations.global.TicketStatus.UNREAD)) ||
                (item.status === TicketStatus.UNREAD_REPLY &&
                  t(translations.global.TicketStatus.UNREAD_REPLY)) ||
                (item.status === TicketStatus.READ &&
                  t(translations.global.TicketStatus.READ))

              // item.children && item.children.length
              //   ? item.children.find(ch => ch.status === TicketStatus.UNREAD)
              //     ? t(translations.global.TicketStatus.UNREAD)
              //     : t(translations.global.TicketStatus.READ)
              //   : item.status === TicketStatus.UNREAD
              //   ? t(translations.global.TicketStatus.UNREAD)
              //   : t(translations.global.TicketStatus.READ)
            }
          />
          {/* <Table.Column
            title={t(translations.pages.TicketPage.list.updateAt)}
            render={item =>
              item.childrenLength > 0
                ? item.children.updated_at
                : moment(item.updated_at).format('jYYYY/jM/jD')
            }
          /> */}
          <Table.Column
            title={t(translations.pages.TicketPage.list.childrenLength)}
            render={item => (item.childrenLength > 0 ? item.childrenLength : 0)}
          />
          <Table.Column
            title={t(translations.pages.TicketPage.list.operations)}
            render={item => (
              <div className="tableOperations">
                <Button
                  className="btn btn-secondary"
                  type="link"
                  data-id={item.id}
                  data-user_id={item.user_id}
                  onClick={handleShowReplayModal}
                >
                  {t(translations.pages.TicketPage.list.ticketDetail)}
                </Button>
              </div>
            )}
          />
        </Table>
      </Card>

      {itemForReplay && (
        <ReplayTicket ticket={itemForReplay} onClose={handleCloseReplayModal} />
      )}
    </StyledListTicket>
  );
});
