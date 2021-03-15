/**
 *
 * UsersList
 *
 */
import {
  EditOutlined,
  KeyOutlined,
  TrademarkCircleOutlined,
  WarningOutlined,
  ImportOutlined,
} from '@ant-design/icons';
import { Button, Card, Input, Popconfirm, Table } from 'antd';
import { appActions } from 'app/containers/App/slice';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'types';
import { resetPasswordApi } from '../../api';
import { selectBrowseUsers } from '../../selectors';
import { actions } from '../../slice';
import { AddUsersModal } from '../AddUsersModal';
import { BalanceUsersList } from '../BalanceUsersList';
import { EditUsersModal } from '../EditUsersModal';
import { ExportUsersToExcel } from '../ExportUsersToExcel';
import { ImportFinancialFromExcel } from '../ImportFinancialFromExcel';
import { ImportUsersFromExcel } from '../ImportUsersFromExcel';
import { StyledUsersList } from './styles';

interface Props {
  className?: string;
}

export const UsersList = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [itemForEdit, setItemForEdit] = useState<User | undefined>();
  const [itemForBalance, setItemForBalance] = useState<User | undefined>();
  const [itemForFinacialImport, setItemForFinacialImport] = useState<
    number | undefined
  >();
  const [itemChangePassword, setItemChangePassword] = useState('');
  const [idForChangPassword, setIdForChangPassword] = useState(0);
  const [page, setPage] = useState(0);
  const browseUsersData = useSelector(selectBrowseUsers);
  const loading = useMemo(() => !!browseUsersData.params, [
    browseUsersData.params,
  ]);

  const handleShowEditModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      const item = browseUsersData.data?.data.find(
        user => user.id === +data.id,
      );
      setItemForEdit(item);
    },
    [browseUsersData, setItemForEdit],
  );
  const handleShowBalanceModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;

      const item = browseUsersData.data?.data.find(
        user => user.id === +data.id,
      );
      setItemForBalance(item);
    },
    [browseUsersData, setItemForBalance],
  );
  const handleShowImportFinancialModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;

      setItemForFinacialImport(+data.id);
    },
    [setItemForFinacialImport],
  );
  const handleShowResetPasswordPopconfirm = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setIdForChangPassword(+data.id);
    },
    [setIdForChangPassword],
  );
  const handleChangePage = useCallback(e => {
    setPage(e);
  }, []);
  const handleCloseEditModal = useCallback(() => {
    setItemForEdit(undefined);
  }, [setItemForEdit]);
  const handleCloseBalanceModal = useCallback(() => {
    setItemForBalance(undefined);
  }, [setItemForBalance]);
  const handleCloseFinacialImport = useCallback(() => {
    setItemForFinacialImport(undefined);
  }, [setItemForFinacialImport]);
  const handleChangePassword = useCallback(
    e => {
      setItemChangePassword(e.currentTarget.value);
    },
    [setItemChangePassword],
  );
  const handleResetPassword = useCallback(() => {
    resetPasswordApi(idForChangPassword, itemChangePassword)
      .then(() =>
        dispatch(
          appActions.notifySuccess(
            t(translations.pages.UserManagementPage.resetPasswordSuccess),
          ),
        ),
      )
      .catch(error =>
        t(translations.pages.UserManagementPage.resetPasswordError),
      );
  }, [dispatch, idForChangPassword, itemChangePassword, t]);

  useEffect(() => {
    dispatch(actions.browseUsers({ page: page }));
  }, [dispatch, page]);

  return (
    <StyledUsersList className={`UsersList ${className || ''}`}>
      <Card>
        <div className="buttons">
          <AddUsersModal />
          <ImportUsersFromExcel />
          <ExportUsersToExcel />
        </div>

        <Table
          dataSource={browseUsersData.data?.data}
          loading={loading}
          pagination={{
            position: ['bottomRight'],
            pageSize: browseUsersData.data?.pagination.count,
            total: browseUsersData.data?.pagination.total,
            onChange: handleChangePage,
          }}
          scroll={{ x: 500 }}
        >
          <Table.Column
            title={t(translations.pages.UserManagementPage.list.userName)}
            render={item => item.email}
          />
          <Table.Column
            title={t(
              translations.pages.UserManagementPage.list.nameAndFamilyName,
            )}
            render={item =>
              item.profile &&
              `${item.profile?.first_name} ${item.profile?.last_name}`
            }
          />
          <Table.Column
            title={t(
              translations.pages.UserManagementPage.list.authLevel.title,
            )}
            render={item =>
              t(translations.pages.UserManagementPage.list.authLevel[item.role])
            }
          />
          <Table.Column
            title={t(translations.pages.UserManagementPage.list.operations)}
            render={item => (
              <div className="tableOperations">
                <Button
                  icon={<ImportOutlined />}
                  size="small"
                  type="link"
                  data-id={item.id}
                  onClick={handleShowImportFinancialModal}
                />
                <Button
                  icon={<EditOutlined />}
                  size="small"
                  type="link"
                  data-id={item.id}
                  onClick={handleShowEditModal}
                />
                <Button
                  icon={<TrademarkCircleOutlined />}
                  size="small"
                  type="link"
                  data-id={item.id}
                  onClick={handleShowBalanceModal}
                />
                <Popconfirm
                  title={
                    <Input
                      placeholder={t(
                        translations.pages.UserManagementPage.list.password,
                      )}
                      readOnly={loading}
                      onChange={handleChangePassword}
                    />
                  }
                  icon={<WarningOutlined style={{ color: 'red' }} />}
                  onConfirm={handleResetPassword}
                  cancelText={t(
                    translations.pages.UserManagementPage.resetPassword
                      .cancelText,
                  )}
                  okText={t(
                    translations.pages.UserManagementPage.resetPassword.okText,
                  )}
                >
                  <Button
                    icon={<KeyOutlined />}
                    danger
                    size="small"
                    type="link"
                    data-id={item.id}
                    onClick={handleShowResetPasswordPopconfirm}
                  />
                </Popconfirm>
              </div>
            )}
          />
        </Table>
      </Card>

      {itemForEdit && (
        <EditUsersModal user={itemForEdit} onClose={handleCloseEditModal} />
      )}

      {itemForBalance && (
        <BalanceUsersList
          user={itemForBalance}
          onClose={handleCloseBalanceModal}
        />
      )}

      {itemForFinacialImport && (
        <ImportFinancialFromExcel
          userId={itemForFinacialImport}
          onClose={handleCloseFinacialImport}
        />
      )}
    </StyledUsersList>
  );
});
