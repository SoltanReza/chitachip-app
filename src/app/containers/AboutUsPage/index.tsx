/**
 *
 * AboutUsPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { StyledAboutUsPage, TextContainer } from './styles';

interface Props {
  className?: string;
}

export function AboutUsPage({ className }: Props) {
  const { t } = useTranslation();

  return (
    <StyledAboutUsPage
      className={`AboutUsPage ${className || ''}`}
      title={t(translations.pages.AboutUsPage.title)}
      description={t(translations.pages.AboutUsPage.description)}
    >
      <TextContainer>
        <h2>درباره چیتاچیپ</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad
          nam optio! Voluptatem, eum. Et autem porro, quod, cupiditate enim ut
          voluptatum provident hic nemo possimus aliquam, voluptates quae
          maiores.
        </p>
      </TextContainer>
      {t('AboutUsPage')}
    </StyledAboutUsPage>
  );
}
