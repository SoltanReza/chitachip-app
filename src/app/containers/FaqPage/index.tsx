/**
 *
 * FaqPage
 *
 */

import React from 'react';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

import { useSelector, useDispatch } from 'react-redux';

import { StyledFaqPage } from './styles';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

import { reducer, sliceKey } from './slice';
import { selectFaqPage } from './selectors';

import { faqPageSaga } from './saga';
import { Card, Collapse } from 'antd';

interface Props {
  className?: string;
}

export function FaqPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: faqPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const faqPage = useSelector(selectFaqPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const { Panel } = Collapse;

  const text = `
  پس از خرید سهام در استارت آپ شما هم مثل سایر سهامداران مالک بخشی از مالکیت مادی و معنوی آن استارت آپ بر اساس میزان سهام خود خواهید شد در نتیجه با رشد استارت آپ و رشد سهام آن، شما نیز میتوانید از مزایای آن استفاده کنید
`;

  function callback(key) {
    console.log(key);
  }

  return (
    <StyledFaqPage
      className={`FaqPage ${className || ''}`}
      title={t(translations.pages.FaqPage.title)}
      description={t(translations.pages.FaqPage.description)}
    >
      <Card>
        <Collapse onChange={callback}>
          <Panel
            header="چرا سرمایه گذاری در قالب خرید سهام در استارت اپ می‌تواند سود آور باشد؟"
            key="1"
          >
            <Collapse defaultActiveKey="1">
              <Panel
                header="سود سهامداران در استارت اپ چطور محاسبه می‌شود؟"
                key="1"
              >
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Panel>
          <Panel
            header="آیا امکان فروش سهام برای سهامداران در هر زمان ممکن است؟"
            key="2"
          >
            <p>{text}</p>
          </Panel>
          <Panel
            header="آیا در حال حاضر امکان خرید سهام استارت اپ اردبیت وجود دارد؟"
            key="3"
          >
            <p>{text}</p>
          </Panel>
        </Collapse>
      </Card>
    </StyledFaqPage>
  );
}
