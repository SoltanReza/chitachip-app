/**
 *
 * TransactionList
 *
 */
import { CheckOutlined, CloseOutlined, StopOutlined } from '@ant-design/icons';
import { Button, Table, Tooltip } from 'antd';
import { selectAuth } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import {
  Transaction,
  TransactionStatus,
  TransactionType,
} from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRoles } from 'types';
import { selectBrowseTransaction } from '../../selectors';
import { actions } from '../../slice';
import { StyledTransactionList } from './styles';

interface Props {
  className?: string;
}

export const TransactionList = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const browseTransactionData = useSelector(selectBrowseTransaction);
  const auth = useSelector(selectAuth);
  const loading = useMemo(() => !!browseTransactionData.params, [
    browseTransactionData.params,
  ]);

  const handleChangeTransactionStatus = useCallback(
    (id: number, status: TransactionStatus) => {
      // call action changeState

      dispatch(
        appActions.notifyInfo(
          `میخواهیم تراکنش ${id} رو ببریم به وضعیت ${status}`,
        ),
      );
    },
    [dispatch],
  );

  const handleChangeStatusButton = useCallback(
    e => {
      handleChangeTransactionStatus(
        e.currentTarget.dataset.id,
        e.currentTarget.dataset.status,
      );
    },
    [handleChangeTransactionStatus],
  );

  useEffect(() => {
    dispatch(actions.browseTransaction({}));
  }, [dispatch]);

  return (
    <StyledTransactionList className={`TransactionList ${className || ''}`}>
      {browseTransactionData.data?.data ? (
        <>
          {' '}
          <Table
            dataSource={browseTransactionData.data?.data}
            pagination={false}
            loading={loading}
            scroll={{ y: 340, x: 400 }}
          >
            <Table.Column
              title={t(translations.pages.TransactionPage.list.amount)}
              render={item => item.amount}
            />
            <Table.Column
              title={t(translations.pages.TransactionPage.list.type)}
              render={item => t(translations.global.TransactionType[item.type])}
            />
            <Table.Column
              title={t(translations.pages.TransactionPage.list.status)}
              render={item =>
                t(translations.global.TransactionStatus[item.status])
              }
            />
            <Table.Column
              title={t(translations.pages.TransactionPage.list.description)}
              render={item => item.description}
            />
            <Table.Column
              title={t(translations.pages.TransactionPage.list.operations)}
              render={(item: Transaction) => (
                <div className="tableOperations">
                  {item.type === TransactionType.WITHDRAW &&
                    item.status === TransactionStatus.PENDING &&
                    auth.hasRole([AuthRoles.ADMIN]) && (
                      <>
                        <Tooltip
                          title={t(
                            translations.pages.TransactionPage.list.accept,
                          )}
                        >
                          <Button
                            icon={<CheckOutlined />}
                            size="small"
                            type="link"
                            data-id={item.id}
                            data-status={TransactionStatus.DONE}
                            onClick={handleChangeStatusButton}
                          />
                        </Tooltip>

                        <Tooltip
                          title={t(
                            translations.pages.TransactionPage.list.reject,
                          )}
                        >
                          <Button
                            icon={<StopOutlined />}
                            size="small"
                            type="link"
                            danger
                            data-id={item.id}
                            data-status={TransactionStatus.REJECTED}
                            onClick={handleChangeStatusButton}
                          />
                        </Tooltip>
                      </>
                    )}

                  {item.type === TransactionType.WITHDRAW &&
                    item.status === TransactionStatus.PENDING &&
                    auth.hasRole([AuthRoles.REGULAR]) && (
                      <Tooltip
                        title={t(
                          translations.pages.TransactionPage.list.cancel,
                        )}
                      >
                        <Button
                          icon={<CloseOutlined />}
                          size="small"
                          type="link"
                          danger
                          data-id={item.id}
                          data-status={TransactionStatus.CANCELED}
                          onClick={handleChangeStatusButton}
                        />
                      </Tooltip>
                    )}
                </div>
              )}
            />
          </Table>
        </>
      ) : (
        <b>در حال بروز رسانی میباشد</b>
      )}
    </StyledTransactionList>
  );
});
