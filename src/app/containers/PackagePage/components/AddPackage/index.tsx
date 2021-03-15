/**
 *
 * AddPackage
 *
 */
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
} from 'antd';
import {
  selectAuth,
  selectBrowseCurrency,
  selectBrowseUser,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { StockType } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRoles } from 'types';
import { selectAddPackage } from '../../selectors';
import { actions } from '../../slice';
import { StyledAddPackage, StyledCalculatePackage } from './styles';

interface Props {
  className?: string;
}

export const AddPackage = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authData = useSelector(selectAuth);
  const [showModal, setShowModal] = useState(false);
  const [selectUserValue, setSelectUserValue] = useState(0);
  const [selectCurrencyValue, setSelectCurrencyValue] = useState('');
  const [selectStockTypeValue, setSelectStockTypeValue] = useState('');
  const [selectDatePickerValue, setSelectDatePickerValue] = useState('');
  const [changePriceValue, setChangePriceValue] = useState(0);
  const [changeCountValue, setChangeCountValue] = useState(0);
  const UserData = useSelector(selectBrowseUser);
  const CurrencyData = useSelector(selectBrowseCurrency);
  const addPackageData = useSelector(selectAddPackage);
  const loading = useMemo(() => !!addPackageData.params, [
    addPackageData.params,
  ]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleShowModal = useCallback(() => {
    dispatch(appActions.browseUser({}));
    dispatch(appActions.browseCurrency({}));
    setShowModal(true);
  }, [dispatch, setShowModal]);
  const handleSelectUserChange = useCallback(value => {
    setSelectUserValue(value);
  }, []);
  const handleSelectCurrencyChange = useCallback(value => {
    setSelectCurrencyValue(value);
  }, []);
  const handleSelectStockTypeChange = useCallback(value => {
    setSelectStockTypeValue(value);
  }, []);

  const handleChange = useCallback(value => {
    if ('price' in value) setChangePriceValue(value.price);
    if ('count' in value) setChangeCountValue(value.count);
  }, []);
  const handleDatePickerChange = useCallback((date, dateString) => {
    setSelectDatePickerValue(dateString);
  }, []);
  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.addPackage({
          seller_id: selectUserValue,
          currency: selectCurrencyValue,
          title: values.title,
          price: values.price,
          count: values.count,
          description: values.description,
          expire_at: selectDatePickerValue,
          type: selectStockTypeValue,
        }),
      );
    },
    [
      dispatch,
      selectUserValue,
      selectCurrencyValue,
      selectDatePickerValue,
      selectStockTypeValue,
    ],
  );
  const handleClearData = useCallback(() => {
    dispatch(actions.addPackageClear());
  }, [dispatch]);

  useEffect(() => {
    if (addPackageData.data) {
      handleCloseModal();
    }
  }, [addPackageData.data, handleCloseModal]);

  return (
    <StyledAddPackage className={`AddPackage ${className || ''}`}>
      {authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]) && (
        <Button onClick={handleShowModal} className="btn btn-secondary">
          {t(translations.pages.PackagePage.add.submit)}
        </Button>
      )}

      <Modal
        title={t(translations.pages.PackagePage.add.modal.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
        afterClose={handleClearData}
      >
        <Form
          className="addPackageForm"
          onFinish={handleSubmit}
          onValuesChange={handleChange}
        >
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item
              rules={[{ required: true }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Select
                defaultValue={t(
                  translations.pages.PackagePage.add.modal
                    .defualtValueSelectUser,
                )}
                style={{ width: '12em' }}
                showSearch
                optionFilterProp="children"
                onChange={handleSelectUserChange}
                filterOption={(input, option) =>
                  option?.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {UserData.data?.data &&
                  UserData.data?.data.map(user => (
                    <Select.Option value={user.id}>
                      {user.profile ? user.profile.last_name : user.email}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
            <Form.Item
              rules={[{ required: true }]}
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}
            >
              <Select
                defaultValue={t(
                  translations.pages.PackagePage.add.modal
                    .defualtValueSelectCurrency,
                )}
                style={{ width: '12em' }}
                onChange={handleSelectCurrencyChange}
              >
                {CurrencyData.data?.data &&
                  CurrencyData.data?.data.map(currency => (
                    <Select.Option value={currency.name}>
                      {currency.name}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Form.Item>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(translations.pages.PackagePage.list.title)}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="price" rules={[{ required: true }]}>
            <InputNumber
              style={{ width: '100%' }}
              formatter={value =>
                `${value}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              prefix="huiyu"
              width="500px"
              min={0}
              placeholder={t(translations.pages.PackagePage.list.price)}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="count" rules={[{ required: true }]}>
            <Input
              type="number"
              min={0}
              placeholder={t(translations.pages.PackagePage.list.count)}
              readOnly={loading}
            />
          </Form.Item>
          <StyledCalculatePackage>
            {t(
              changePriceValue && changeCountValue
                ? translations.pages.PackagePage.list.calculatePackage
                : translations.pages.PackagePage.list.calculatePackageTip,
              { value: changePriceValue * changeCountValue },
            )}
          </StyledCalculatePackage>
          <Form.Item name="description" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(translations.pages.PackagePage.list.description)}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label={t(translations.pages.PackagePage.list.expireAt)}
              name="expire_at"
              rules={[{ required: true }]}
            >
              <DatePicker onChange={handleDatePickerChange} />
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              {t(translations.pages.PackagePage.add.submit)}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledAddPackage>
  );
});
