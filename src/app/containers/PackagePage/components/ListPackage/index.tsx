/**
 *
 * ListPackage
 *
 */
import { EditOutlined } from '@ant-design/icons';
import { Button, Card, Table } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrowsePackage } from '../../selectors';
import { actions } from '../../slice';
import { EditPackageRequest } from '../../types';
import { AddPackage } from '../AddPackage';
import { EditPackage } from '../EditPackage';
import { StyledListPackage } from './styles';

interface Props {
  className?: string;
}

export const ListPackage = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [itemForEdit, setItemForEdit] = useState<
    EditPackageRequest | undefined
  >();
  const browsePackageData = useSelector(selectBrowsePackage);
  const loading = useMemo(() => !!browsePackageData.params, [
    browsePackageData.params,
  ]);
  const handleShowEditModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;

      setItemForEdit({
        id: data.id,
        price: data.price,
        title: data.title,
        description: data.description,
        expire_at: data.expire_at,
      });
    },
    [setItemForEdit],
  );
  const handleCloseEditModal = useCallback(() => {
    setItemForEdit(undefined);
  }, [setItemForEdit]);

  useEffect(() => {
    dispatch(actions.browsePackage({}));
  }, [dispatch]);
  console.log(browsePackageData);
  return (
    <StyledListPackage className={`ListPackage ${className || ''}`}>
      <Card>
        <AddPackage />

        <Table
          dataSource={browsePackageData.data?.data}
          loading={loading}
          pagination={{ position: ['bottomRight'], pageSize: 10 }}
          scroll={{ x: 1000 }}
        >
          <Table.Column
            title={t(translations.pages.PackagePage.list.title)}
            render={item => item.title}
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.description)}
            render={item => item.description}
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.stockType)}
            render={item => t(translations.global.StockType[item.type])}
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.currency)}
            render={item => item.currency_id}
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.seller)}
            render={item => item.seller?.email}
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.buyer)}
            render={item => item.buyer?.email}
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.count)}
            render={item => item.count}
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.price)}
            render={item =>
              item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.totalPrice)}
            render={item =>
              item.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
          />
          <Table.Column
            title={t(translations.pages.PackagePage.list.status)}
            render={item => t(translations.global.PackageStatus[item.status])}
          />

          <Table.Column
            title={t(translations.pages.PackagePage.list.operations)}
            render={item => (
              <div className="tableOperations">
                <Button
                  icon={<EditOutlined />}
                  size="small"
                  type="link"
                  data-id={item.id}
                  data-price={item.price}
                  data-title={item.title}
                  data-description={item.description}
                  data-expire-at={item.expire_at}
                  onClick={handleShowEditModal}
                />
              </div>
            )}
          />
        </Table>
      </Card>

      {itemForEdit && (
        <EditPackage editPackage={itemForEdit} onClose={handleCloseEditModal} />
      )}
    </StyledListPackage>
  );
});
