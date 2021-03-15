/**
 *
 * Currency
 *
 */
import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Table } from 'antd';
import { Currency } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrowseCurrency } from '../../selectors';
import { actions } from '../../slice';
import { AddCurrencyModal } from '../AddCurrencyModal';
import { EditCurrencyModal } from '../EditCurrencyModal';
import { StyledCurrencyList } from './styles';

interface Props {
  className?: string;
}

export const CurrencyList = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [itemForEdit, setItemForEdit] = useState<Currency | undefined>();
  const browseCurrencyData = useSelector(selectBrowseCurrency);
  const loading = useMemo(() => !!browseCurrencyData.params, [
    browseCurrencyData.params,
  ]);
  const handleShowEditModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setItemForEdit({
        name: data.name,
        rate_in_rial: +data.value,
      });
    },
    [setItemForEdit],
  );
  const handleCloseEditModal = useCallback(() => {
    setItemForEdit(undefined);
  }, [setItemForEdit]);

  useEffect(() => {
    dispatch(actions.browseCurrency({}));
  }, [dispatch]);

  return (
    <StyledCurrencyList className={`Currency ${className || ''}`}>
      <Card>
        <AddCurrencyModal />

        <Table
          dataSource={browseCurrencyData.data?.data}
          loading={loading}
          pagination={{ position: ['bottomRight'], pageSize: 10 }}
          scroll={{ x: 400 }}
        >
          <Table.Column
            title={t(translations.pages.CurrencyPage.list.name)}
            render={item => item.name}
          />
          <Table.Column
            title={t(translations.pages.CurrencyPage.list.rate)}
            render={item => item.rate_in_rial}
          />
          <Table.Column
            title={t(translations.pages.CurrencyPage.list.operations)}
            render={item => (
              <div className="tableOperations">
                <Button
                  icon={<EditOutlined />}
                  size="small"
                  type="link"
                  data-name={item.name}
                  data-value={item.rate_in_rial}
                  onClick={handleShowEditModal}
                />
              </div>
            )}
          />
        </Table>
      </Card>

      {itemForEdit && (
        <EditCurrencyModal
          currency={itemForEdit}
          onClose={handleCloseEditModal}
        />
      )}
    </StyledCurrencyList>
  );
});
