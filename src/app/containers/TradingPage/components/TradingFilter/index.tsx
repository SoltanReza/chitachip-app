/**
 *
 * TradingFilter
 *
 */
import { SearchOutlined as SearchIcon } from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { Button, Form, Input } from 'antd';
import { TradeTypeSelect } from 'app/components/TradeTypeSelect';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { sizes } from 'styles/media';
import { StyledTradingFilter } from './styles';
import { TradeType } from 'app/containers/App/types';

export interface Filters {
  title?: string;
  price?: number;
  currency_id?: TradeType;
}

interface Props {
  className?: string;
  onChange: (filters: Filters) => void;
}

export const TradingFilter = memo(({ className, onChange }: Props) => {
  const { t } = useTranslation();
  const onlyWidth = useWindowWidth();
  const layout = useMemo(
    () => (onlyWidth > sizes.medium ? 'inline' : 'horizontal'),
    [onlyWidth],
  );

  const handelFormSubmit = useCallback(
    values => {
      onChange({
        price: values.price === undefined ? undefined : +values.price,
        title: values.title ? values.title.trim() || undefined : undefined,
        currency_id: values.currency_id || undefined,
      });
    },
    [onChange],
  );

  return (
    <StyledTradingFilter className={`TradingFilter ${className || ''}`}>
      <Form layout={layout} onFinish={handelFormSubmit}>
        <Form.Item name="title">
          <Input
            placeholder={t(
              translations.pages.TradingPage.TradingFilter.form
                .titlePlaceholder,
            )}
          />
        </Form.Item>

        <Form.Item name="price">
          <Input
            type="number"
            placeholder={t(
              translations.pages.TradingPage.TradingFilter.form
                .pricePlaceholder,
            )}
          />
        </Form.Item>

        <Form.Item name="currency_id">
          <TradeTypeSelect
            allowClear
            placeholder={t(
              translations.pages.TradingPage.TradingFilter.form.typePlaceholder,
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn btn-secondary"
          >
            {t(translations.pages.TradingPage.TradingFilter.form.submit)}
            <SearchIcon />
          </Button>
        </Form.Item>
      </Form>
    </StyledTradingFilter>
  );
});
