/**
 *
 * AddTicket
 *
 */
import { Button, Form, Input, Modal, Select } from 'antd';
import { selectAuth, selectBrowseUser } from 'app/containers/App/selectors';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRoles } from 'types';
import { selectAddTicket } from '../../selectors';
import { StyledAddTicket } from './styles';
import { actions } from '../../slice';
import { appActions } from 'app/containers/App/slice';
import { searchUserApi } from 'app/containers/App/api';
import { SearchUserResponse } from 'app/containers/App/types';

interface Props {
  className?: string;
}

export const AddTicket = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectUserValue, setSelectUserValue] = useState(0);
  const [changeSearch, setChangeSearch] = useState('');
  const [showNameWithSearch, setShowNameWithSearch] = useState('');
  const [searchData, setSearchData] = useState<SearchUserResponse>();
  const authData = useSelector(selectAuth);
  const UserData = useSelector(selectBrowseUser);
  const addTicketData = useSelector(selectAddTicket);
  const loading = useMemo(() => !!addTicketData.params, [addTicketData.params]);

  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleShowModal = useCallback(() => {
    if (authData.data?.role === AuthRoles.ADMIN) {
      dispatch(appActions.browseUser({}));
    }

    setShowModal(true);
  }, [authData.data, dispatch]);

  const handleChange = useCallback(value => {
    // if ('price' in value) setChangePriceValue(value.price);
    // if ('count' in value) setChangeCountValue(value.count);
  }, []);

  const handleSelectUserChange = useCallback(value => {
    setSelectUserValue(value);
  }, []);

  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.addTicket({
          title: values.title,
          body: values.body,
          user_id: +changeSearch,
          reply_id: null,
        }),
      );
    },
    [changeSearch, dispatch],
  );
  const handleClearData = useCallback(() => {
    dispatch(actions.addTicketClear());
  }, [dispatch]);

  const handleSearch = value => {
    if (value) {
      searchUserApi({
        search: value,
      }).then(data => setSearchData(data));
    } else {
      setSearchData([]);
    }
  };

  const handleChangeSearch = value => {
    setChangeSearch(value);
  };

  useEffect(() => {
    if (addTicketData.data) {
      handleCloseModal();
      setSearchData([]);
    }
  }, [addTicketData.data, handleCloseModal]);

  return (
    <StyledAddTicket className={`AddTicket ${className || ''}`}>
      <Button onClick={handleShowModal} className="btn btn-secondary">
        {t(translations.pages.TicketPage.add.submit)}
      </Button>

      <Modal
        title={t(translations.pages.TicketPage.add.modal.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
        afterClose={handleClearData}
      >
        <Form
          className="addTicketForm"
          onFinish={handleSubmit}
          onValuesChange={handleChange}
        >
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(
                translations.pages.TicketPage.add.modal.ticketTitle,
              )}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="body" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(
                translations.pages.TicketPage.add.modal.ticketBody,
              )}
              readOnly={loading}
            />
          </Form.Item>
          {authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]) && (
            <Form.Item
              rules={[{ required: true }]}
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Select
                showSearch
                placeholder={t(
                  translations.pages.TicketPage.add.modal
                    .defualtValueSelectUser,
                )}
                style={{ width: '14em' }}
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                onSearch={handleSearch}
                onChange={handleChangeSearch}
                notFoundContent={null}
              >
                {searchData &&
                  searchData.map(d => (
                    <Select.Option value={d.id}>{d.value}</Select.Option>
                  ))}
              </Select>
            </Form.Item>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              {t(translations.pages.TicketPage.add.submit)}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledAddTicket>
  );
});
