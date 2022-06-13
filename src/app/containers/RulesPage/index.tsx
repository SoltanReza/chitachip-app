/**
 *
 * RulesPage
 *
 */

import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { StyledRulesPage, Container, Wrapper } from './styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appActions } from '../App/slice';
import { getAboutusApi } from '../App/api';

interface Props {
  className?: string;
}
interface Data {
  type: string;
  text: string;
}
export function RulesPage({ className }: Props) {
  const [data, setData] = useState<Data>();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    getAboutusApi().then(res => {
      res.data.forEach(i => {
        if (i.type === 'قوانین') {
          setData(i);
        }
      });
    });
  }, []);
  return (
    <StyledRulesPage
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
    </StyledRulesPage>
  );
}
