/**
 *
 * FinancialInfo
 *
 */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { StyledFinancialInfo } from './styles';
import { BrowseFinancialInfoResponse } from 'app/containers/FinancialInfoPage/types';
import { actions } from '../../containers/FinancialInfoPage/slice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrowseFinancialInfo } from '../../containers/FinancialInfoPage/selectors';
import { Table } from 'antd';
import { translations } from 'locales/i18n';

interface Props {
  className?: string;
}
const PAGE_SIZE = 10;
export const FinancialInfo = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const browseFinancialInfoData = useSelector(selectBrowseFinancialInfo);
  const loading = useMemo(() => !!browseFinancialInfoData.params, [
    browseFinancialInfoData.params,
  ]);
  // .reduce((a, b) => a + b)
  const calDebtor = useMemo(() => {
    if (browseFinancialInfoData.data)
      browseFinancialInfoData.data.map(item => item.creditor);
  }, [browseFinancialInfoData.data]);
  const data = useMemo(
    () =>
      browseFinancialInfoData.data && browseFinancialInfoData.data.length > 0
        ? [
            ...browseFinancialInfoData.data,
            {
              id: '',
              user_id: '',
              date: 'مجموع',
              documentId: '',
              description: '',
              debtor: browseFinancialInfoData.data
                ?.map(item => Number(item.debtor))
                .reduce((a, b) => a + b),
              creditor: browseFinancialInfoData.data
                ?.map(item => Number(item.creditor))
                .reduce((a, b) => a + b),
              balance: '',
              type: '',
              created_at: '',
              updated_at: '',
              deleted_at: '',
            },
          ]
        : [],
    [browseFinancialInfoData.data],
  );
  const handleChangePage = useCallback(e => {
    setPage(e);
  }, []);

  useEffect(() => {
    dispatch(actions.browseFinancialInfo({ page: page }));
  }, [dispatch, page]);

  return (
    <StyledFinancialInfo className={`FinancialInfo ${className || ''}`}>
      <Table
        dataSource={data}
        loading={loading}
        pagination={{
          position: ['bottomRight'],
          pageSize: PAGE_SIZE,
          onChange: handleChangePage,
        }}
        scroll={{ x: 700 }}
      >
        <Table.Column
          title={t(translations.pages.FinancialInfoPage.info.row)}
          render={(item, record, index) =>
            (page === 1 ? 0 : page - 1) * PAGE_SIZE + index + 1
          }
        />
        <Table.Column
          title={t(translations.pages.FinancialInfoPage.info.date)}
          render={item => item.date}
        />
        <Table.Column
          title={t(translations.pages.FinancialInfoPage.info.debtor)}
          render={item => item.debtor}
        />
        <Table.Column
          title={t(translations.pages.FinancialInfoPage.info.creditor)}
          render={item => item.creditor}
        />
        <Table.Column
          title={t(translations.pages.FinancialInfoPage.info.description)}
          render={item => item.description}
        />{' '}
        <Table.Column
          title={t(translations.pages.FinancialInfoPage.info.type)}
          render={item => item.type}
        />
      </Table>
    </StyledFinancialInfo>
  );
});
