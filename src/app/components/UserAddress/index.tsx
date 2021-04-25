/**
 *
 * UserAddress
 *
 */
import React, { memo } from 'react';

import { StyledUserAddress } from './styles';

import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const UserAddress = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledUserAddress className={`UserAddress ${className || ''}`}>
      آدرس کاربر
    </StyledUserAddress>
  );
});
