/**
 *
 * ImportUsersFromExcel
 *
 */
import { Button, Spin } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectImportUsers } from '../../selectors';
import { actions } from '../../slice';

import { StyledImportUsersFromExcel, StyledModal } from './styles';

interface Props {
  className?: string;
}

export const ImportUsersFromExcel = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const importData = useSelector(selectImportUsers);
  const loading = useMemo(() => !!importData.params, [importData.params]);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleUploadFile = useCallback(
    file => {
      const data = new FormData();
      data.append('file', file);
      dispatch(actions.importUsers({ data }));
    },
    [dispatch],
  );
  const handleSelectFile = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.display = 'none';
    input.setAttribute(
      'accept',
      'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    document.body.append(input);
    if (input) {
      input.click();

      input.onchange = () => {
        input.remove();
        if (input.files) {
          handleUploadFile(input.files[0]);
        }
      };
    }
  }, [handleUploadFile]);

  useEffect(() => {
    if (importData.data || importData.error) {
      handleCloseModal();

      dispatch(actions.browseUsers({}));
      dispatch(actions.importUsersClear());
    }
  }, [importData.data, importData.error, handleCloseModal, dispatch]);

  return (
    <StyledImportUsersFromExcel
      className={`ImportUsersFromExcel ${className || ''}`}
    >
      <Button onClick={handleShowModal} className="btn btn-secondary">
        {t(translations.pages.UserManagementPage.import.title)}
      </Button>
      <StyledModal
        title={t(translations.pages.UserManagementPage.import.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
      >
        <Spin spinning={loading}>
          <p className="description">
            {t(translations.pages.UserManagementPage.import.description)}
          </p>

          <Button
            className="btn btn-secondary"
            disabled={loading}
            onClick={handleSelectFile}
          >
            {t(translations.pages.UserManagementPage.import.title)}
          </Button>
        </Spin>
      </StyledModal>
    </StyledImportUsersFromExcel>
  );
});
