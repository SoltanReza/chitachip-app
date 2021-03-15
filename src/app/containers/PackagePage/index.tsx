/**
 *
 * PackagePage
 *
 */

import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ListPackage } from './components/ListPackage';
import { packagePageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledPackagePage } from './styles';

interface Props {
  className?: string;
}

export function PackagePage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: packagePageSaga });

  const { t } = useTranslation();

  return (
    <StyledPackagePage
      className={`PackagePage ${className || ''}`}
      title={t(translations.pages.PackagePage.title)}
      description={t(translations.pages.PackagePage.description)}
    >
      <ListPackage />
    </StyledPackagePage>
  );
}
