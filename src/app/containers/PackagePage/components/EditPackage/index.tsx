/**
 *
 * EditPackage
 *
 */
import { Button, DatePicker, Form, Input, Select } from 'antd';
import { StockType } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditPackage } from '../../selectors';
import { actions } from '../../slice';
import { EditPackageRequest } from '../../types';
import { StyledEditPackage } from './styles';

interface Props {
  className?: string;
  editPackage: EditPackageRequest;
  onClose: () => void;
}
export const EditPackage = memo(
  ({ className, editPackage, onClose }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [selectDatePickerValue, setSelectDatePickerValue] = useState('');
    const [selectStockTypeValue, setSelectStockTypeValue] = useState('');
    const editPackageData = useSelector(selectEditPackage);
    const loading = useMemo(() => !!editPackageData.params, [
      editPackageData.params,
    ]);

    const handleSelectStockTypeChange = useCallback(value => {
      setSelectStockTypeValue(value);
    }, []);
    const handleDatePickerChange = useCallback((date, dateString) => {
      setSelectDatePickerValue(dateString);
    }, []);
    const handleSubmit = useCallback(
      values => {
        dispatch(
          actions.editPackage({
            id: +editPackage.id,
            price: values.price,
            title: values.title,
            description: values.description,
            expire_at: selectDatePickerValue,
            type: selectStockTypeValue,
          }),
        );
      },
      [dispatch, editPackage.id, selectDatePickerValue, selectStockTypeValue],
    );

    const handleClearData = useCallback(() => {
      dispatch(actions.editPackageClear());
    }, [dispatch]);

    useEffect(() => {
      if (editPackageData.data) {
        dispatch(actions.editPackageClear());
        onClose();
      }
    }, [editPackageData.data, dispatch, onClose]);

    return (
      <StyledEditPackage
        className={`EditPackage ${className || ''}`}
        title={t(translations.pages.PackagePage.update.title)}
        visible
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={onClose}
        afterClose={handleClearData}
      >
        <Form
          className="editPackageForm"
          onFinish={handleSubmit}
          initialValues={editPackage || {}}
        >
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(translations.pages.PackagePage.update.title)}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="price" rules={[{ required: true }]}>
            <Input
              type="number"
              min={0}
              placeholder={t(translations.pages.PackagePage.update.price)}
              readOnly={loading}
            />
          </Form.Item>

          <Form.Item name="description" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(translations.pages.PackagePage.update.description)}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label={t(translations.pages.PackagePage.update.expireAt)}
              name="expire_at"
              rules={[{ required: true }]}
            >
              <DatePicker onChange={handleDatePickerChange} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="btn btn-secondary"
                block
                loading={loading}
              >
                {t(translations.pages.PackagePage.update.submit)}
              </Button>
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              style={{
                display: 'inline-block',
                width: 'calc(30% - 8px)',
                margin: '0 8px',
              }}
            >
              <Select
                defaultValue={t(
                  translations.pages.PackagePage.add.modal
                    .defualtValueSelectStockType,
                )}
                style={{ width: '12em' }}
                onChange={handleSelectStockTypeChange}
              >
                <Select.Option value={StockType.GHATEI}>
                  {t(translations.global.StockType[StockType.GHATEI])}
                </Select.Option>
                <Select.Option value={StockType.MOVAGHAT}>
                  {t(translations.global.StockType[StockType.MOVAGHAT])}
                </Select.Option>
                <Select.Option value={StockType.PADASH}>
                  {t(translations.global.StockType[StockType.PADASH])}
                </Select.Option>
                <Select.Option value={StockType.HEBE}>
                  {t(translations.global.StockType[StockType.HEBE])}
                </Select.Option>
              </Select>
            </Form.Item>
          </Form.Item>
        </Form>
      </StyledEditPackage>
    );
  },
);
