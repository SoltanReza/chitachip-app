/**
 *
 * FinalFormPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledFinalFormPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectFinalFormPage } from './selectors';

import { finalFormPageSaga } from './saga';
import { FinalForm } from 'app/components/FinalForm';

interface Props {
  className?: string;
}

export function FinalFormPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: finalFormPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const finalFormPage = useSelector(selectFinalFormPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  return (
    <StyledFinalFormPage
      className={`FinalFormPage ${className || ''}`}
      title={t(translations.pages.FinalFormPage.title)}
      description={t(translations.pages.FinalFormPage.description)}
    >
      <FinalForm />
    </StyledFinalFormPage>
  );
}
