/**
 *
 * LazyLoadSpinner
 *
 */
import React, { memo } from 'react';
import { StyledLazyLoadSpinner } from './styles';

interface Props {
  className?: string;
}

export const LazyLoadSpinner = memo(({ className }: Props) => {
  return (
    <StyledLazyLoadSpinner
      className={`LazyLoadSpinner pageLoader ${className || ''}`}
    >
      <i></i>
    </StyledLazyLoadSpinner>
  );
});
