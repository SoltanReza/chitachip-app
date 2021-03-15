/**
 *
 * EditNewsModal
 *
 */
import { Button, Form, Input, Switch } from 'antd';
import { Editor } from 'app/components/Editor';
import { News, NewsStatus } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditNews } from '../../selectors';
import { actions } from '../../slice';
import { StyledEditNewsModal } from './styles';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
  className?: string;
  news: News;
  onClose: () => void;
}

export const EditNewsModal = memo(({ className, news, onClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [checkedStatus, setCheckedStatus] = useState<NewsStatus>(news.status);
  const [body, setBody] = useState(news.body);
  const [quillValue, setQuillValue] = useState('');
  const editNewsData = useSelector(selectEditNews);
  const loading = useMemo(() => !!editNewsData.params, [editNewsData.params]);
  const handleSubmit = useCallback(
    values => {
      const cleanText = values.body.replace(/(<([^>]+)>)/gi, '');
      dispatch(
        actions.editNews({
          slug: values.slug,
          title: values.title,
          body: cleanText ? cleanText : news.body,
          status: checkedStatus,
        }),
      );
    },
    [dispatch, checkedStatus, news.body],
  );

  const onChange = useCallback(checked => {
    if (!!checked) {
      setCheckedStatus(NewsStatus.ACTIVE);
    } else {
      setCheckedStatus(NewsStatus.INACTIVE);
    }
  }, []);
  const handleClearData = useCallback(() => {
    dispatch(actions.editNewsClear());
  }, [dispatch]);

  useEffect(() => {
    if (editNewsData.data) {
      dispatch(actions.editNewsClear());
      onClose();
    }
  }, [editNewsData.data, dispatch, onClose]);

  return (
    <StyledEditNewsModal
      className={`EditNewsModal ${className || ''}`}
      title={t(translations.pages.NewsPage.update.modal.title)}
      visible
      footer={null}
      destroyOnClose={true}
      maskClosable={false}
      closable={!loading}
      onCancel={onClose}
      afterClose={handleClearData}
    >
      <Form
        className="editNewsForm"
        onFinish={handleSubmit}
        initialValues={news || {}}
      >
        <Form.Item name="slug" rules={[{ required: true }]}>
          <Input
            type="text"
            placeholder={t(translations.pages.NewsPage.update.modal.slug)}
            readOnly={loading}
          />
        </Form.Item>
        <Form.Item name="title" rules={[{ required: true }]}>
          <Input
            type="text"
            placeholder={t(translations.pages.NewsPage.update.modal.titleNews)}
            readOnly={loading}
          />
        </Form.Item>
        <Form.Item name="body" rules={[{ required: true }]}>
          <Input.TextArea
            rows={6}
            placeholder={t(
              translations.pages.NewsPage.update.modal.descriptionNews,
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
          <Switch
            className="status"
            checked={checkedStatus === NewsStatus.ACTIVE ? true : false}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn btn-secondary"
            block
            loading={loading}
          >
            {t(translations.pages.NewsPage.update.submit)}
          </Button>
        </Form.Item>
      </Form>
    </StyledEditNewsModal>
  );
});
