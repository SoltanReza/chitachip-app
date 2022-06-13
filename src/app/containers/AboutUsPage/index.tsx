/**
 *
 * AboutUsPage
 *
 */

import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { StyledAboutUsPage, Wrapper, Container } from './styles';
import { getAboutusApi } from '../App/api';

interface Props {
  className?: string;
}

interface Data {
  type: string;
  text: string;
}
export function AboutUsPage({ className }: Props) {
  const [data, setData] = useState<Data>();
  const { t } = useTranslation();

  useEffect(() => {
    getAboutusApi().then(res => {
      res.data.forEach(i => {
        if (i.type === 'بخش ها') {
          setData(i);
        }
      });
    });
  }, []);
  return (
    <StyledAboutUsPage
      className={`RulesPage ${className || ''}`}
      title={t(translations.pages.RulesPage.title)}
      description={t(translations.pages.RulesPage.description)}
    >
      <Wrapper>
        <h2>قوانین و مقررات چیتاچیپ</h2>

        <Container>
          {data && <div dangerouslySetInnerHTML={{ __html: data?.text }}></div>}
        </Container>
      </Wrapper>
    </StyledAboutUsPage>
  );
}
