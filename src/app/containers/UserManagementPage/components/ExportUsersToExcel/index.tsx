/**
 *
 * ExportUsersToExcel
 *
 */
import { Button, Modal, Spin } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectExportUsers } from '../../selectors';
import { actions } from '../../slice';
import { StyledExportUsersToExcel } from './styles';

interface Props {
  className?: string;
}

export const ExportUsersToExcel = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const exportData = useSelector(selectExportUsers);
  const loading = useMemo(() => !!exportData.params, [exportData.params]);

  const handleShowModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);
  const handleGetData = useCallback(() => {
    dispatch(actions.exportUsers({}));
  }, [dispatch]);

  useEffect(() => {
    if (exportData.data) {
      handleCloseModal();
      dispatch(actions.exportUsersClear());
    }
  }, [exportData.data, handleCloseModal, dispatch]);

  return (
    <StyledExportUsersToExcel
      className={`ExportUsersToExcel ${className || ''}`}
    >
      <Button onClick={handleShowModal} className="btn btn-secondary">
        {t(translations.pages.UserManagementPage.export.title)}
      </Button>
      <Modal
        title={t(translations.pages.UserManagementPage.export.title)}
        visible={showModal}
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={handleCloseModal}
      >
        <Spin spinning={loading}>
          <p>{t(translations.pages.UserManagementPage.export.description)}</p>

          <Button
            className="btn btn-secondary"
            disabled={loading}
            onClick={handleGetData}
          >
            {t(translations.pages.UserManagementPage.export.title)}
          </Button>
        </Spin>
      </Modal>
    </StyledExportUsersToExcel>
  );
});
