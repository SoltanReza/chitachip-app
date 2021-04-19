/**
 *
 * BasketPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledBasketPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectBasketPage } from './selectors';

import { basketPageSaga } from './saga';
import { BasketItem } from './components/BasketItem';

interface Props {
  className?: string;
}

export function BasketPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: basketPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const basketPage = useSelector(selectBasketPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledBasketPage
      className={`BasketPage ${className || ''}`}
      title={t(translations.pages.BasketPage.title)}
      description={t(translations.pages.BasketPage.description)}
    >
      <BasketItem />
    </StyledBasketPage>
  );
}
