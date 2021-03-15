/**
 *
 * BalanceUserList
 *
 */
import { EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { User } from 'types';
import { ModifyCurrencyTypeRequest } from '../../types';
import { ModifyCurrencyTypeModal } from '../ModifyCurrencyTypeModal';
import { StyledBalanceUsersList } from './styles';

interface Props {
  className?: string;
  user: User;
  onClose: () => void;
}
export const BalanceUsersList = memo(({ className, user, onClose }: Props) => {
  const { t } = useTranslation();
  const [itemForModify, setItemForModify] = useState<
    ModifyCurrencyTypeRequest | undefined
  >();

  const handleShowModifyCurrencyTypeModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;

      setItemForModify({
        user_id: +data.user_id,
        currency_id: +data.currency_id,
      });
    },
    [setItemForModify],
  );
  const handleCloseModifyModal = useCallback(() => {
    setItemForModify(undefined);
  }, [setItemForModify]);

  return (
    <StyledBalanceUsersList
      className={`BalanceUsersList ${className || ''}`}
      title={t(translations.pages.UserManagementPage.balanceList.title)}
      visible
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
      onCancel={onClose}
    >
      <Table
        dataSource={user.balances || undefined}
        pagination={{ position: ['bottomRight'], pageSize: 10 }}
        scroll={{ x: 400 }}
      >
        <Table.Column
          title={t(
            translations.pages.UserManagementPage.balanceList.currencyName,
          )}
          render={item => item.currency_name}
        />

        <Table.Column
          title={t(
            translations.pages.UserManagementPage.balanceList.currencyType,
          )}
          render={item => item.type}
        />

        <Table.Column
          title={t(
            translations.pages.UserManagementPage.balanceList.rateInRial,
          )}
          render={item => item.rate_in_rial}
        />

        <Table.Column
          title={t(translations.pages.UserManagementPage.balanceList.balance)}
          render={item => item.balance}
        />
        <Table.Column
          title={t(
            translations.pages.UserManagementPage.balanceList.totalRateInRial,
          )}
          render={item => item.total_rate_in_rial}
        />

        <Table.Column
          title={t(translations.pages.UserManagementPage.list.operations)}
          render={item => (
            <div className="tableOperations">
              <Button
                icon={<EditOutlined />}
                size="small"
                type="link"
                data-user_id={user.id}
                data-currency_id={item.currency_id}
                onClick={handleShowModifyCurrencyTypeModal}
              />
            </div>
          )}
        />
      </Table>

      {itemForModify && (
        <ModifyCurrencyTypeModal
          item={itemForModify}
          onClose={handleCloseModifyModal}
        />
      )}
    </StyledBalanceUsersList>
  );
});
