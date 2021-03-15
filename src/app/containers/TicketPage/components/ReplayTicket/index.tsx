/**
 *
 * ReplayTicket
 *
 */
import { Button, Card, Form, Input } from 'antd';
import { selectAuth } from 'app/containers/App/selectors';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {theme} from 'styles/theme';
import { AuthRoles } from 'types';
import { selectAddTicket } from '../../selectors';
import { actions } from '../../slice';
import { TitleReplay } from '../TitleReplay';
import { StyledReplayTicket } from './styles';
import moment from 'moment-jalaali';
import Color from 'color';
import { Ticket } from 'app/containers/App/types';

interface Props {
  className?: string;
  ticket: Ticket;

  onClose: () => void;
}

export const ReplayTicket = memo(({ className, ticket, onClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectDatePickerValue, setSelectDatePickerValue] = useState('');
  const authData = useSelector(selectAuth);
  const replayTicketData = useSelector(selectAddTicket);
  const loading = useMemo(() => !!replayTicketData.params, [
    replayTicketData.params,
  ]);

  const isMine = useMemo(() => authData.data?.user.id === ticket.creator_id, [
    authData.data,
    ticket.creator_id,
  ]);
  const amIAdmin = useMemo(() => authData.data?.role === AuthRoles.ADMIN, [
    authData.data,
  ]);

  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.addTicket({
          reply_id: ticket.id,
          body: values.body,
          title: ticket.title,
          user_id: ticket.user_id,
        }),
      );
    },
    [dispatch, ticket.id, ticket.title, ticket.user_id],
  );

  const handleClearData = useCallback(() => {
    dispatch(actions.addTicketClear());
  }, [dispatch]);

  useEffect(() => {
    if (replayTicketData.data) {
      dispatch(actions.addTicketClear());
      onClose();
    }
  }, [replayTicketData.data, dispatch, onClose]);

  return (
    <StyledReplayTicket
      className={`ReplayTicket ${className || ''}`}
      title={t(translations.pages.TicketPage.replay.title)}
      visible
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
      closable={!loading}
      onCancel={onClose}
      afterClose={handleClearData}
      width="80%"
    >
      <>
        <div
          className="ticket"
          style={{
            background:
              isMine && amIAdmin
                ? ticket.creator_id === authData.data?.user.id
                  ? theme.CARD_TICKET_ADMIN_DETAILS_HEADER_BACKGROUND
                  : theme.CARD_TICKET_USER_DETAILS_HEADER_BACKGROUND
                : ticket.creator_id === authData.data?.user.id
                ? theme.CARD_TICKET_USER_DETAILS_HEADER_BACKGROUND
                : theme.CARD_TICKET_ADMIN_DETAILS_HEADER_BACKGROUND,

            color: theme.TEXT_COLOR_INVERT,
            borderRadius:
              isMine && amIAdmin
                ? ticket.creator_id === authData.data?.user.id
                  ? '50px 10px 10px 30px'
                  : '15px 50px 30px 5px'
                : ticket.creator_id === authData.data?.user.id
                ? '15px 50px 30px 5px'
                : '50px 10px 10px 30px',
           
          }}
        >
          <div className="ticketBody">
            {' '}
            <TitleReplay
              isMine={isMine}
              amIAdmin={amIAdmin}
              userId={authData.data?.user.id}
              item={ticket}
            />
          </div>
          <div className="ticketDate">
            {moment(ticket.created_at).format('jYYYY/jM/jD')}
          </div>
        </div>

        {ticket.children.map(item => (
          <>
            <div
              className="ticket"
              style={{
                background:
                  isMine && amIAdmin
                    ? item.creator_id === authData.data?.user.id
                      ? theme.CARD_TICKET_ADMIN_DETAILS_HEADER_BACKGROUND
                      : theme.CARD_TICKET_USER_DETAILS_HEADER_BACKGROUND
                    : item.creator_id === authData.data?.user.id
                    ? theme.CARD_TICKET_USER_DETAILS_HEADER_BACKGROUND
                    : theme.CARD_TICKET_ADMIN_DETAILS_HEADER_BACKGROUND,

                color: theme.TEXT_COLOR_INVERT,
                borderRadius:
                  isMine && amIAdmin
                    ? item.creator_id === authData.data?.user.id
                      ? '50px 10px 10px 30px'
                      : '15px 50px 30px 5px'
                    : item.creator_id === authData.data?.user.id
                    ? '15px 50px 30px 5px'
                    : '50px 10px 10px 30px',
               
              }}
            >
              <div className="ticketBody">
                {' '}
                <TitleReplay
                  isMine={isMine}
                  amIAdmin={amIAdmin}
                  userId={authData.data?.user.id}
                  item={item}
                />
              </div>
              <div className="ticketDate">
                {moment(item.created_at).format('jYYYY/jM/jD')}
              </div>
            </div>
          </>
        ))}

        <Form className="editTicketForm" onFinish={handleSubmit}>
          <Form.Item name="body" rules={[{ required: true }]}>
            <Input.TextArea
              rows={5}
              placeholder={t(
                translations.pages.TicketPage.replay.titlePlaceholder,
              )}
              readOnly={loading}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              {t(translations.pages.TicketPage.replay.submit)}
            </Button>
          </Form.Item>
        </Form>
      </>
    </StyledReplayTicket>
  );
});
