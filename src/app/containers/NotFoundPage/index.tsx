/**
 *
 * NotFoundPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { StyledNotFoundPage } from './styles';
import { NotFound } from './components/NotFound';

interface Props {
  className?: string;
}

export function NotFoundPage({ className }: Props) {
  const { t } = useTranslation();

  return (
    <StyledNotFoundPage
      className={`NotFoundPage ${className || ''}`}
      title={t(translations.pages.NotFoundPage.title)}
      description={t(translations.pages.NotFoundPage.description)}
    >
      <NotFound />
    </StyledNotFoundPage>
  );
}
