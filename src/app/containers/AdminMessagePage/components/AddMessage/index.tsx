/**
 *
 * AddMessage
 *
 */
import { Button, Form, Input, Modal, Select } from 'antd';
import { Editor } from 'app/components/Editor';
import { searchUserApi } from 'app/containers/App/api';
import { selectBrowseUser } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { SearchUserResponse } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddMessage } from '../../selectors';
import { actions } from '../../slice';
import { StyledAddMessage } from './styles';

interface Props {
  className?: string;
}

export const AddMessage = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [selectUserValue, setSelectUserValue] = useState(0);
  const [body, setBody] = useState('');
  const [changeSearch, setChangeSearch] = useState('');
  const [showNameWithSearch, setShowNameWithSearch] = useState('');
  const [searchData, setSearchData] = useState<SearchUserResponse>();
  const UserData = useSelector(selectBrowseUser);
  const addMessageData = useSelector(selectAddMessage);
  const loading = useMemo(() => !!addMessageData.params, [
    addMessageData.params,
  ]);
  console.log(UserData);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleShowModal = useCallback(() => {
    dispatch(appActions.browseUser({}));
    setShowModal(true);
  }, [dispatch, setShowModal]);
  const handleSubmit = useCallback(
    values => {
      dispatch(
        actions.addMessage({
          title: values.title,
          body: values.body,
          user_id: +changeSearch,
        }),
      );
    },
    [changeSearch, dispatch],
  );
  const handleClearData = useCallback(() => {
    dispatch(actions.addMessageClear());
    dispatch(appActions.browseUserClear());
  }, [dispatch]);
  const handleSelectUserChange = useCallback(value => {
    setSelectUserValue(value);
  }, []);
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
    if (addMessageData.data) {
      dispatch(actions.browseMessage({}));
      handleCloseModal();
      setSearchData([]);
    }
  }, [dispatch, addMessageData.data, handleCloseModal]);

  return (
    <StyledAddMessage className={`AddMessage ${className || ''}`}>
      <Button onClick={handleShowModal} className="btn btn-secondary">
        {t(translations.pages.AdminMessagePage.add.submit)}
      </Button>

      <Modal
        title={t(translations.pages.AdminMessagePage.add.modal.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
        afterClose={handleClearData}
      >
        <Form className="addMessageForm" onFinish={handleSubmit}>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(
                translations.pages.AdminMessagePage.add.modal.titleMessage,
              )}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="body" rules={[{ required: true }]}>
            <Input.TextArea
              rows={6}
              placeholder={t(
                translations.pages.AdminMessagePage.add.modal
                  .descriptionMessage,
              )}
            />
            {/* <Editor
              value={body}
              placeholder={t(
                translations.pages.AdminMessagePage.add.modal
                  .descriptionMessage,
              )}
              readOnly={loading}
              onChange={setBody}
            /> */}
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Select
              showSearch
              placeholder={t(
                translations.pages.TicketPage.add.modal.defualtValueSelectUser,
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              {t(translations.pages.AdminMessagePage.add.modal.submit)}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledAddMessage>
  );
});
