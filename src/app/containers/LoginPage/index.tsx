/**
 *
 * LoginPage
 *
 */

import { LoginForm } from 'app/containers/LoginPage/components/LoginForm';
import { translations } from 'locales/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledLoginPage } from './styles';

interface Props {
  className?: string;
}

export function LoginPage({ className }: Props) {
  const { t } = useTranslation();

  return (
    <StyledLoginPage
      className={`LoginPage ${className || ''}`}
      title={t(translations.pages.LoginPage.title)}
      description={t(translations.pages.LoginPage.description)}
    >
      <LoginForm />
    </StyledLoginPage>
  );
}
