/**
 *
 * EditMessageModal
 *
 */
import { Button, Form, Input } from 'antd';
import { Editor } from 'app/components/Editor';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectEditMessage } from '../../selectors';
import { actions } from '../../slice';
import { EditMessageRequest } from '../../types';
import { StyledEditMessageModal } from './styles';

interface Props {
  className?: string;
  message: EditMessageRequest;
  onClose: () => void;
}

export const EditMessageModal = memo(
  ({ className, message, onClose }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [body, setBody] = useState(message.body);
    const editMessageData = useSelector(selectEditMessage);
    const loading = useMemo(() => !!editMessageData.params, [
      editMessageData.params,
    ]);

    const handleSubmit = useCallback(
      values => {
        dispatch(
          actions.editMessage({
            id: message.id,
            user_id: message.user_id,
            title: values.title,
            body: values.body,
          }),
        );
      },
      [dispatch, message],
    );

    const handleClearData = useCallback(() => {
      dispatch(actions.editMessageClear());
    }, [dispatch]);

    useEffect(() => {
      if (editMessageData.data) {
        dispatch(actions.browseMessage({}));
        dispatch(actions.editMessageClear());
        onClose();
      }
    }, [editMessageData.data, dispatch, onClose]);

    return (
      <StyledEditMessageModal
        className={`EditMessageModal ${className || ''}`}
        title={t(translations.pages.AdminMessagePage.update.title)}
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
          initialValues={message || {}}
        >
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input type="text" readOnly={loading} />
          </Form.Item>
          <Form.Item name="body" rules={[{ required: true }]}>
            <Input.TextArea
              defaultValue={message.body}
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
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
              loading={loading}
            >
              {t(translations.pages.AdminMessagePage.update.submit)}
            </Button>
          </Form.Item>
        </Form>
      </StyledEditMessageModal>
    );
  },
);
