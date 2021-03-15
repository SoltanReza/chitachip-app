/**
 *
 * TradingList
 *
 */
import { selectBrowsePackageGlobalList } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import React, { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Filters } from '../TradingFilter';
import { TradingItem } from '../TradingItem';
import { StyledTradingList } from './styles';

interface Props {
  className?: string;
  filters?: Filters;
}

export const TradingList = memo(({ className, filters }: Props) => {
  const dispatch = useDispatch();
  const browsePackageData = useSelector(selectBrowsePackageGlobalList);

  const items = useMemo(
    () =>
      browsePackageData.data &&
      browsePackageData.data.data.filter(
        item =>
          (filters?.currency_id
            ? item.currency_id === filters.currency_id
            : true) &&
          (filters?.title ? item.title === filters.title : true) &&
          (filters?.price ? item.price === filters.price : true),
      ),
    [filters, browsePackageData.data],
  );

  useEffect(() => {
    dispatch(appActions.browsePackageGlobalList({}));
  }, [dispatch]);

  return (
    <StyledTradingList className={`TradingList ${className || ''}`}>
      {items && items.map(item => <TradingItem key={item.id} item={item} />)}
    </StyledTradingList>
  );
});
