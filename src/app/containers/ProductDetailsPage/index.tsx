/**
 *
 * ProductDetailsPage
 *
 */

import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledProductDetailsPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectProductDetailsPage } from './selectors';
import { Product } from 'app/components/Product';
import { productDetailsPageSaga } from './saga';
import { useParams } from 'react-router-dom';
import { appActions } from '../App/slice';
import { selectBrowseProduct } from '../App/selectors';

interface Props {
  className?: string;
}

export function ProductDetailsPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: productDetailsPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const productDetailsPage = useSelector(selectProductDetailsPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const params = useParams<{ id: string }>();
  const BrowseProduct = useSelector(selectBrowseProduct);

  useEffect(() => {
    dispatch(appActions.browseProduct({ product_id: params.id }));
  }, [dispatch, params.id]);

  return (
    <StyledProductDetailsPage
      className={`ProductDetailsPage ${className || ''}`}
      title={t(translations.pages.ProductDetailsPage.title)}
      description={t(translations.pages.ProductDetailsPage.description)}
    >
      {BrowseProduct && BrowseProduct.data && (
        <Product data={BrowseProduct.data.product} />
      )}
    </StyledProductDetailsPage>
  );
}
