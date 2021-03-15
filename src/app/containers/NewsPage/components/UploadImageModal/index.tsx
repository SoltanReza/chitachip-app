/**
 *
 * UploadImageModal
 *
 */
import React, { memo, useCallback, useEffect, useMemo } from 'react';

import { StyledModal, StyledUploadImageModal } from './styles';

import { useTranslation } from 'react-i18next';
import { Spin, Button } from 'antd';
import { translations } from 'locales/i18n';
import { actions } from '../../slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectUploadImage } from '../../selectors';

interface Props {
  className?: string;
  pic: any;
  onClose: () => void;
}

export const UploadImageModal = memo(({ className, pic, onClose }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const uploadImageData = useSelector(selectUploadImage);
  const loading = useMemo(() => !!uploadImageData.params, [
    uploadImageData.params,
  ]);

  const handleUploadFile = useCallback(
    file => {
      const data = new FormData();
      data.append('file', file);
      dispatch(actions.uploadImage({ data, slug: pic.slug }));
    },
    [dispatch, pic.slug],
  );
  const handleSelectFile = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.style.display = 'none';
    input.setAttribute(
      'accept',
      'application/JPEG,application/png,application/jpg,application/jpeg,application/PNG',
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
    if (uploadImageData.data || uploadImageData.error) {
      onClose();
      dispatch(actions.uploadImageClear());
    }
  }, [uploadImageData.data, uploadImageData.error, onClose, dispatch]);

  return (
    <StyledUploadImageModal className={`UploadImageModal ${className || ''}`}>
      <StyledModal
        title={t(translations.pages.NewsPage.uploadImage.title)}
        visible
        footer={null}
        destroyOnClose={true}
        maskClosable={false}
        closable={!loading}
        onCancel={onClose}
      >
        <Spin spinning={loading}>
          <p className="description">
            {t(translations.pages.NewsPage.uploadImage.description)}
          </p>

          <Button
            className="btn btn-secondary"
            disabled={loading}
            onClick={handleSelectFile}
          >
            {t(translations.pages.NewsPage.uploadImage.submit)}
          </Button>
        </Spin>
      </StyledModal>
    </StyledUploadImageModal>
  );
});
