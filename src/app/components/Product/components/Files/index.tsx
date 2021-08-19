/**
 *
 * Files
 *
 */
import React from 'react';

import { StyledFiles } from './styles';

import { useTranslation } from 'react-i18next';
import { ProductFile } from 'app/containers/App/types';

interface Props {
  className?: string;
  files?: Array<ProductFile>;
}

export function Files({ className, files }: Props) {
  const { t } = useTranslation();

  return (
    <StyledFiles className={`Files ${className || ''}`}>
      {files &&
        files.map(i => (
          <div className="file-component">
            <span>{i.title}</span>
            <a href={i.file} download className="icon-box"></a>
          </div>
        ))}
    </StyledFiles>
  );
}
