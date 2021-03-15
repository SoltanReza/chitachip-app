/**
 *
 * RegisterPage
 *
 */

import { RegisterForm } from 'app/containers/RegisterPage/components/RegisterForm';
import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { registerPageSaga } from './saga';
import { reducer, sliceKey } from './slice';
import { StyledRegisterPage } from './styles';

interface Props {
  className?: string;
}

export function RegisterPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: registerPageSaga });

  const { t } = useTranslation();

  return (
    <StyledRegisterPage
      className={`RegisterPage ${className || ''}`}
      title={t(translations.pages.RegisterPage.title)}
      description={t(translations.pages.RegisterPage.description)}
    >
      <RegisterForm />
    </StyledRegisterPage>
  );
}
