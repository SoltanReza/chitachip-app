/**
 *
 * AddNewsModal
 *
 */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { StyledAddNewsModal } from './styles';

import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Modal, Switch } from 'antd';
import { translations } from 'locales/i18n';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddNews } from '../../selectors';
import { actions } from '../../slice';
import { NewsStatus } from 'app/containers/App/types';
import { Editor } from 'app/components/Editor';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  className?: string;
}

export const AddNewsModal = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState(' ');
  const [quillValue, setQuillValue] = useState('');
  const [checkedStatus, setCheckedStatus] = useState<NewsStatus>(
    NewsStatus.ACTIVE,
  );
  const addNewsData = useSelector(selectAddNews);
  const loading = useMemo(() => !!addNewsData.params, [addNewsData.params]);

  const onChange = useCallback(checked => {
    if (!!checked) {
      setCheckedStatus(NewsStatus.ACTIVE);
    } else {
      setCheckedStatus(NewsStatus.INACTIVE);
    }
  }, []);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);
  const handleSubmit = useCallback(
    values => {
      const cleanText = values.body.replace(/(<([^>]+)>)/gi, '');

      dispatch(
        actions.addNews({
          slug: values.slug,
          title: values.title,
          body: cleanText,
          status: checkedStatus,
        }),
      );
    },
    [dispatch, checkedStatus],
  );
  const handleClearData = useCallback(() => {
    dispatch(actions.addNewsClear());
  }, [dispatch]);

  useEffect(() => {
    if (addNewsData.data) {
      dispatch(actions.browseNews({}));
      handleCloseModal();
    }
  }, [dispatch, addNewsData.data, handleCloseModal]);

  return (
    <StyledAddNewsModal className={`AddNewsModal ${className || ''}`}>
      <Button onClick={handleShowModal} className="btn btn-secondary">
        {t(translations.pages.NewsPage.add.submit)}
      </Button>

      <Modal
        title={t(translations.pages.NewsPage.add.modal.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
        afterClose={handleClearData}
      >
        <Form className="addNewsForm" onFinish={handleSubmit}>
          <Form.Item name="slug" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(translations.pages.NewsPage.add.modal.slug)}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input
              type="text"
              placeholder={t(translations.pages.NewsPage.add.modal.titleNews)}
              readOnly={loading}
            />
          </Form.Item>
          <Form.Item name="body" rules={[{ required: true }]}>
            <Input.TextArea
              rows={6}
              placeholder={t(
                translations.pages.NewsPage.add.modal.descriptionNews,
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
            name="status"
            label={t(translations.pages.NewsPage.list.status.title)}
          >
            <Switch className="status" defaultChecked onChange={onChange} />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              {t(translations.pages.NewsPage.add.modal.submit)}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </StyledAddNewsModal>
  );
});
