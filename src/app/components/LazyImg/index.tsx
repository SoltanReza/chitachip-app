/**
 *
 * LazyImg
 *
 */
import React, { memo, useState, useEffect } from 'react';

import { StyledLazyImg } from './styles';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { Spin } from 'antd';

interface Props {
  className?: string;
  alt?: string;
  src: string;
}

export const LazyImg = memo(({ className, src, alt }: Props) => {
  const { t } = useTranslation();
  const [image, setImage] = useState<string | undefined>();

  useEffect(() => {
    fetch(src)
      .then(response => response.blob())
      .then(blob => setImage(URL.createObjectURL(blob)))
      .catch(error => console.log(error));
  }, [src]);

  return (
    <StyledLazyImg
      className={`LazyImg ${className || ''} ${image ? '' : 'loading'}`}
    >
      {!image && <Spin />}

      {image && (
        <img
          src={image}
          alt={alt || t(translations.components.LazyImg.loadingText)}
        />
      )}
    </StyledLazyImg>
  );
});
