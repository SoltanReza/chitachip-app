/**
 *
 * TradingItem
 *
 */
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import { orderPackageApi } from 'app/containers/App/api';
import { selectAuthData } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { PackageGlobalItem } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { StyledTradingItem } from './styles';

interface Props {
  className?: string;
  item: PackageGlobalItem;
}

export const TradingItem = memo(({ className, item }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [itemForBuy, setItemForBuy] = useState(0);
  const authData = useSelector(selectAuthData);
  const btnDisable = useMemo(
    () => !!(authData && authData.user.stock > item.totalPrice),
    [item.totalPrice, authData],
  );

  const handleShowBuyPopconfirm = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setItemForBuy(+data.id);
    },
    [setItemForBuy],
  );
  const handleBuyPackage = useCallback(() => {
    orderPackageApi(itemForBuy).then(() =>
      dispatch(appActions.browsePackageGlobalList({})),
    );
    // dispatch(actions.BuyMessage({ id: itemForBuy }));
  }, [dispatch, itemForBuy]);

  return (
    <StyledTradingItem className={`TradingItem ${className || ''}`} hoverable>
      <h3>{item.title}</h3>
      <div className="label">
        <b>{t(translations.global.TradeItem.currency_id)}</b>
        {t(translations.global.TradeType[item.currency_id])}
      </div>
      <div className="label">
        {' '}
        <b>{t(translations.global.TradeItem.count)}</b>
        {item.count}
      </div>
      <div className="label">
        {' '}
        <b>{t(translations.global.TradeItem.price)}</b>
        {item.price}
      </div>
      <div className="label">
        {' '}
        <b>{t(translations.global.TradeItem.totalPrice)}</b>
        {item.totalPrice}
      </div>
      <div className="label">
        {' '}
        <b>{t(translations.global.TradeItem.description)}</b>
        {item.description}
      </div>

      <Popconfirm
        title={t(translations.pages.TradingPage.delete.title)}
        icon={<QuestionCircleOutlined style={{ color: 'green' }} />}
        onConfirm={handleBuyPackage}
      >
        <Button
          className="btn btn-secondary"
          block
          disabled={!btnDisable}
          data-id={item.id}
          onClick={handleShowBuyPopconfirm}
        >
          {btnDisable
            ? t(translations.global.TradeItem.btnBuy)
            : t(translations.global.TradeItem.btnDisable)}
        </Button>
      </Popconfirm>
    </StyledTradingItem>
  );
});
