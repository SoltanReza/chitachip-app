/**
 *
 * Files
 *
 */
import React from 'react';

import { StyledFiles } from './styles';

import { useTranslation } from 'react-i18next';
interface Props {
  className?: string;
}

export function Files({ className }: Props) {
  const { t } = useTranslation();

  return (
    <StyledFiles className={`Files ${className || ''}`}>
      <div className="file-component">
        <span>file name</span>
        <div className="icon-box">hi</div>
      </div>
      <div className="file-component">
        <span>file name</span>
        <div className="icon-box">hi</div>
      </div>
      <div className="file-component">
        <span>file name</span>
        <div className="icon-box">hi</div>
      </div>
    </StyledFiles>
  );
}
