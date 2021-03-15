/**
 *
 * TradeTypeSelect
 *
 */
import React, { memo, useMemo } from 'react';

import { StyledTradeTypeSelect } from './styles';

import { useTranslation } from 'react-i18next';
import Select, { SelectProps } from 'antd/lib/select';
import { enumKeys } from 'utils/helpers';
import { TradeType } from 'app/containers/App/types';
import { translations } from 'locales/i18n';

interface Props extends SelectProps<any> {
  className?: string;
}

export const TradeTypeSelect = memo(({ className, ...selectProps }: Props) => {
  const { t } = useTranslation();
  const types = useMemo(() => enumKeys(TradeType), []);

  return (
    <StyledTradeTypeSelect
      className={`TradeTypeSelect ${className || ''}`}
      {...selectProps}
    >
      {types.map(type => (
        <Select.Option value={type}>
          {t(translations.global.TradeType[type] || type)}
        </Select.Option>
      ))}
    </StyledTradeTypeSelect>
  );
});
