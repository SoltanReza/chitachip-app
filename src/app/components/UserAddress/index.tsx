/**
 *
 * UserAddress
 *
 */
import { PlusOutlined } from '@ant-design/icons';
import { Card, Form, Button, Row, Col, Input, Modal } from 'antd';
import {
  selectAddAddress,
  selectBrowseAddress,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';

import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { StyledUserAddress } from './styles';

interface Props {
  className?: string;
}

export const UserAddress = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const addAddressData = useSelector(selectAddAddress);
  const addressData = useSelector(selectBrowseAddress);
  const loading = useMemo(() => !!addAddressData.params, [
    addAddressData.params,
  ]);

  const handleSubmit = useCallback(
    values => {
      dispatch(
        appActions.addAddress({
          receiver_mobile: values.receiver_mobile,
          receiver_name: values.receiver_name,
          code_posti: values.code_posti,
          address: values.address,
          name: values.name,
        }),
      );
    },
    [dispatch],
  );

  const handleClearData = useCallback(() => {
    dispatch(appActions.addAddressClear());
  }, [dispatch]);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, []);
  const handleCloseEditModal = useCallback(() => {
    setShowModal(false);
  }, []);

  useEffect(() => {
    if (addAddressData.data) {
      dispatch(appActions.addAddressClear());
      dispatch(appActions.browseAddress({}));
      handleCloseEditModal();
    }
  }, [addAddressData.data, dispatch, handleCloseEditModal]);
  useEffect(() => {
    dispatch(appActions.browseAddress({}));
  }, [dispatch]);

  return (
    <StyledUserAddress className={`UserAddress ${className || ''}`}>
      <div className="userAddressTitle">آدرس ها</div>
      <p className="userAddressDescription">
        آدرس تحویل و صورتحسابی را که می‌خواهید بصورت پیش فرض در زمان ثبت سفارش،
        انتخاب شوند را مشخص کنید. شما می‌توانید آدرس‌های دیگری نیز بیافزایید،
        که.می‌تواند برای ارسال هدایا به دیگران یا تحویل سفارش در دفتر کار شما
        مفید باشد
      </p>

      <div className="userAddressAdd" onClick={handleShowModal}>
        <PlusOutlined className="userAddressAddIcon" size={3} />
        افزودن آدرس جدید
      </div>
      {addressData &&
        addressData.data &&
        addressData.data.data.map(item => (
          <Card className="userAddressDetaileCard">
            <div className="addressName">نام آدرس</div>
            <hr className="solid" />
            <p>
              <span className="reciverName">نام تحویل گیرنده: </span>
              <span> {item.receiver_name}</span>
            </p>
            <p>
              <span className="addressTitle">آدرس: </span>
              <span>{item.address}</span>
            </p>
            <p>
              <span className="mobile">شماره تماس: </span>
              <span> {item.receiver_mobile}</span>
            </p>
            <Row gutter={48}>
              <Col span={24}>
                <Button className="updateBtn">بروزرسانی</Button>

                <Button className="deleteBtn">حذف</Button>
              </Col>
            </Row>
          </Card>
        ))}

      <Modal
        title="افزودن آدرس"
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseEditModal}
        afterClose={handleClearData}
      >
        <Form className="editCurrencyForm" onFinish={handleSubmit}>
          <Form.Item name="receiver_name">
            <Input
              type="text"
              placeholder="نام تحویل گیرنده"
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="receiver_mobile">
            <Input type="text" placeholder="موبایل'" readOnly={loading} />
          </Form.Item>
          <Form.Item name="code_posti">
            <Input type="text" placeholder="کد پستی" readOnly={loading} />
          </Form.Item>
          <Form.Item name="address">
            <Input type="text" placeholder="آدرس" readOnly={loading} />
          </Form.Item>
          <Form.Item name="name">
            <Input type="text" placeholder="نام آدرس" readOnly={loading} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              افزودن آدرس
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledUserAddress>
  );
});
