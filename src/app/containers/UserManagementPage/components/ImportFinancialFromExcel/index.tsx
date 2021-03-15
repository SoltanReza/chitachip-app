/**
 *
 * ImportFinancialFromExcel
 *
 */
import { Button, Spin } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectImportFinancial } from '../../selectors';
import { actions } from '../../slice';
import { StyledImportFinancialFromExcel } from './styles';

interface Props {
  className?: string;
  userId: number;
  onClose: () => void;
}

export const ImportFinancialFromExcel = memo(
  ({ className, userId, onClose }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const importFinancial = useSelector(selectImportFinancial);
    const loading = useMemo(() => !!importFinancial.params, [
      importFinancial.params,
    ]);

    const handleUploadFile = useCallback(
      file => {
        const data = new FormData();
        data.append('file', file);
        data.append('user_id', userId as any);
        dispatch(actions.importFinancial({ data }));
      },
      [dispatch, userId],
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
      if (importFinancial.data || importFinancial.error) {
        onClose();

        dispatch(actions.browseUsers({}));
        dispatch(actions.importFinancialClear());
      }
    }, [importFinancial.data, importFinancial.error, dispatch, onClose]);

    return (
      <StyledImportFinancialFromExcel
        className={`ImportFinancialFromExcel ${className || ''}`}
        title={t(
          translations.pages.UserManagementPage.financialInfoModal.title,
        )}
        visible
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        onCancel={onClose}
      >
        <Spin spinning={loading}>
          <p className="description">
            {t(
              translations.pages.UserManagementPage.financialInfoModal
                .description,
            )}
          </p>

          <Button
            className="btn btn-secondary"
            disabled={loading}
            onClick={handleSelectFile}
          >
            {t(translations.pages.UserManagementPage.financialInfoModal.title)}
          </Button>
        </Spin>
      </StyledImportFinancialFromExcel>
    );
  },
);
