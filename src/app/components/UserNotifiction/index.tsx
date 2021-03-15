/**
 *
 * UserNotifiction
 *
 */
import { BellOutlined } from '@ant-design/icons';
import { Badge, Button, Collapse, Drawer, List } from 'antd';
import { markAsReadMessageApi } from 'app/containers/App/api';
import { DEFAULT_PAGINATION_SIZE } from 'app/containers/App/constants';
import { selectBrowseMessage } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { MessageStatus, TicketStatus } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { renderHTML } from 'utils/helpers';
import { StyledUserNotifiction } from './styles';

interface Props {
  className?: string;
}

export const UserNotifiction = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showDrawer, setShowDrawer] = useState(false);
  const [page, setPage] = useState(1);
  const browseMessageData = useSelector(selectBrowseMessage);

  const newData = useMemo(
    () => browseMessageData.data && browseMessageData.data!.data.length,
    [browseMessageData.data],
  );

  const hasNextPage = useMemo(
    () =>
      browseMessageData.data &&
      browseMessageData.data.pagination.total >
        DEFAULT_PAGINATION_SIZE *
          browseMessageData.data.pagination.current_page,
    [browseMessageData.data],
  );
  const unreadCount = useMemo(
    () => browseMessageData.data?.payload?.unread_count || 0,
    [browseMessageData.data],
  );

  const handleShowDrawer = useCallback(() => {
    setShowDrawer(true);
  }, [setShowDrawer]);
  const handleCloseDrawer = useCallback(() => {
    setShowDrawer(false);
  }, [setShowDrawer]);
  const handleLoadMore = useCallback(() => {
    setPage(page + 1);
    dispatch(
      appActions.browseMessage({ page, perPage: DEFAULT_PAGINATION_SIZE }),
    );
  }, [page, dispatch]);
  const handleChangeStatuseMessage = useCallback(
    key => {
      if (key) {
        const item = browseMessageData?.data?.data.find(x => x.id === +key);
        if (item?.status === TicketStatus.UNREAD) {
          markAsReadMessageApi(key).then(id =>
            dispatch(appActions.markMessageAsReadSuccess(id as any)),
          );
        }
        if (item?.status === TicketStatus.UNREAD_REPLY) {
          markAsReadMessageApi(key).then(id =>
            dispatch(appActions.markMessageAsReadSuccess(id as any)),
          );
        }
      }
    },
    [dispatch, browseMessageData],
  );

  useEffect(() => {
    if (browseMessageData.data || browseMessageData.error) {
      dispatch(appActions.browseUserClear());
    } else {
      dispatch(
        appActions.browseMessage({ page, perPage: DEFAULT_PAGINATION_SIZE }),
      );
    }
  }, [page, dispatch, browseMessageData.data, browseMessageData.error]);

  return (
    <StyledUserNotifiction className={`UserNotifiction ${className || ''}`}>
      <Badge offset={[35, 25]} count={unreadCount}>
        <Button
          icon={<BellOutlined />}
          size="large"
          type="link"
          onClick={handleShowDrawer}
        />
      </Badge>

      <Drawer
        title={t(translations.pages.AdminMessagePage.drawer.title)}
        width="45em"
        closable={true}
        onClose={handleCloseDrawer}
        visible={showDrawer}
      >
        <List
          itemLayout="horizontal"
          dataSource={browseMessageData.data?.data}
          renderItem={item => (
            <List.Item>
              <Collapse
                onChange={handleChangeStatuseMessage}
                style={
                  item.status === TicketStatus.READ
                    ? { width: '100%' }
                    : { width: '100%', background: '#bfbfbf' }
                }
                className="messageCollapse"
                accordion
              >
                <Collapse.Panel
                  header={
                    item.status === TicketStatus.READ ? (
                      item.title
                    ) : (
                      <b> {item.title}</b>
                    )
                  }
                  key={item.id}
                >
                  {renderHTML(item.body)}
                </Collapse.Panel>
              </Collapse>
            </List.Item>
          )}
        />
        <Button
          className="btn btn-secondary"
          disabled={!hasNextPage}
          onClick={handleLoadMore}
        >
          {t(translations.global.loadMore)}
        </Button>
      </Drawer>
    </StyledUserNotifiction>
  );
});
