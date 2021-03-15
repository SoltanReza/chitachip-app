/**
 *
 * MessageList
 *
 */
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Button, Card, Popconfirm, Table } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrowseMessage } from '../../selectors';
import { actions } from '../../slice';
import { EditMessageRequest } from '../../types';
import { AddMessage } from '../AddMessage';
import { EditMessageModal } from '../EditMessageModal';
import { StyledMessageList } from './styles';

interface Props {
  className?: string;
}

export const MessageList = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [itemForEdit, setItemForEdit] = useState<
    EditMessageRequest | undefined
  >();
  const [itemForDelete, setItemForDelete] = useState(0);
  const browseMessageData = useSelector(selectBrowseMessage);
  const loading = useMemo(() => !!browseMessageData.params, [
    browseMessageData.params,
  ]);

  const handleShowEditModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setItemForEdit({
        id: data.id,
        title: data.title,
        body: data.body,
        user_id: data.user_id,
        read: data.read,
      });
    },
    [setItemForEdit],
  );
  const handleShowDeletePopconfirm = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setItemForDelete(+data.id);
    },
    [setItemForDelete],
  );
  const handleDeleteMessage = useCallback(() => {
    dispatch(actions.deleteMessage({ id: itemForDelete }));
  }, [dispatch, itemForDelete]);
  const handleCloseEditModal = useCallback(() => {
    setItemForEdit(undefined);
  }, [setItemForEdit]);

  useEffect(() => {
    dispatch(actions.browseMessage({}));
  }, [dispatch]);

  return (
    <StyledMessageList className={`MessageList ${className || ''}`}>
      <Card>
        <AddMessage />

        <Table
          dataSource={browseMessageData.data?.data}
          loading={loading}
          pagination={{ position: ['bottomRight'], pageSize: 10 }}
          scroll={{ x: 400 }}
        >
          <Table.Column
            title={t(translations.pages.AdminMessagePage.list.title)}
            render={item => item.title}
          />
          <Table.Column
            title={t(translations.pages.AdminMessagePage.list.user)}
            render={item => item.user && item.user.email}
          />
          <Table.Column
            title={t(translations.pages.AdminMessagePage.list.operations)}
            render={item => (
              <div className="tableOperations">
                <Button
                  icon={<EditOutlined />}
                  size="small"
                  type="link"
                  data-id={item.id}
                  data-title={item.title}
                  data-body={item.body}
                  data-user_id={item.user_id}
                  data-read={item.read}
                  onClick={handleShowEditModal}
                />
                <Popconfirm
                  title={t(translations.pages.AdminMessagePage.delete.title)}
                  icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                  onConfirm={handleDeleteMessage}
                >
                  <Button
                    icon={<DeleteOutlined />}
                    danger
                    size="small"
                    type="link"
                    data-id={item.id}
                    onClick={handleShowDeletePopconfirm}
                  />
                </Popconfirm>
              </div>
            )}
          />
        </Table>
      </Card>

      {itemForEdit && (
        <EditMessageModal
          message={itemForEdit}
          onClose={handleCloseEditModal}
        />
      )}
    </StyledMessageList>
  );
});
