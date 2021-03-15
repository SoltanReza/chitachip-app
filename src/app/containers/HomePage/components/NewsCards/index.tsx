/**
 *
 * NewsCards
 *
 */

import { Divider, Row } from 'antd';
import { LazyImg } from 'app/components/LazyImg';
import three from 'app/components/LazyImg/assets/ardbit-pic1.jpeg';
import one from 'app/components/LazyImg/assets/ardbit-pic7.jpeg';
import two from 'app/components/LazyImg/assets/ardbit-pic8.jpg';
import four from 'app/components/LazyImg/assets/ardbit-pic9.jpg';
import { News, NewsStatus } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ellipseString } from 'utils/helpers';
import { StyledCard, StyledNewsCards } from './styles';

interface Props {
  className?: string;
}

export const NewsCards = memo(({ className }: Props) => {
  const { t } = useTranslation();

  const items: Array<News> = [
    {
      slug: '1',
      status: NewsStatus.ACTIVE,
      title: 'اردبیت بهترین بستر سرمایه گذاری ',
      banner: `${one}`,
      body: `ایسنا/ شاخص کل بورس که در ساعات ابتدایی معاملات به مرز یک میلیون و ۹۹۳ هزار واحد رسید ناگهان تا رقم یک میلیون و ۹۸۶ هزار واحد سقوط کرد، اما در ادامه معاملات باز هم روند صعودی به خود گرفت و به یک میلیون و ۹۹۴ هزار واحد رسید و در نهایت با کمی کاهش در رقم یک میلیون و ۹۹۱ هزار واحد ایسنا/ شاخص کل بورس که در ساعات ابتدایی معاملات به مرز یک میلیون و ۹۹۳ هزار واحد رسید ناگهان تا رقم یک میلیون و ۹۸۶ هزار واحد سقوط کرد، اما در ادامه معاملات باز هم روند صعودی به خود گرفت و به یک میلیون و ۹۹۴ هزار واحد رسید و در نهایت با کمی کاهش در رقم یک میلیون و ۹۹۱ هزار واحد ایستاد.ایسنا/ شاخص کل بورس که در ساعات ابتدایی معاملات به مرز یک میلیون و ۹۹۳ هزار واحد رسید ناگهان تا رقم یک میلیون و ۹۸۶ هزار واحد سقوط کرد، اما در ادامه معاملات باز هم روند صعودی به خود گرفت و به یک میلیون و ۹۹۴ هزار واحد رسید و در نهایت با کمی کاهش در رقم یک میلیون و ۹۹۱ هزار واحد ایستاد.ایستاد.`,
    },
    {
      slug: '2',
      status: NewsStatus.ACTIVE,
      title: 'سود بالا و غیر قابل مقایسه با بورس',
      banner: `${two}`,
      body: `در معاملات امروز بازار سرمایه شاخص کل با ۱۸۳۵ واحد کاهش رقم یک میلیون و ۹۹۱ هزار واحد را ثبت کرد. این در حالی است که شاخص کل با معیار هم وزن ۱۶۰۸ واحد صعود و رقم ۵۲۷ هزار و ۴۸۷ واحد را ثبت کرد. معامله‌گران این بازار دو میلیون معامله به ارزش ۲۲۴ هزار و ۸۷۰ میلیارد ریال انجام دادند.
    `,
    },
    {
      slug: '3',
      status: NewsStatus.ACTIVE,
      title: 'شما هم در تشکیل یک استارت اپ بزرگ شریک باشید',
      banner: `${three}`,
      body: `صنایع پتروشیمی خلیج فارس، س. نفت و گاز و پتروشیمی تامین و گسترش نفت و گاز پارسیان نسبت به سایر نمادها بیشترین تاثیر مثبت و در مقابل ملی صنایع مس ایران، پالایش نفت اصفهان، ایران خودرو و سایپا نسبت به سایر نمادها بیشترین تاثیر منفی را روی بورس گذاشتند.`,
    },
    {
      slug: '4',
      status: NewsStatus.ACTIVE,
      title: 'حتی با سرمایه اندک هم میتوانید در یک سود بزرگ شریک باشید',
      banner: `${four}`,
      body: `مهر/ معاون سرمایه‌گذاری صندوق نوآوری و شکوفایی گفت: ۶ استارت آپ فعال در حوزه اینترنت اشیا که در صندوق نوآوری و شکوفایی طرحهای خود را ارائه کردند به ۱۰ میلیارد تومان سرمایه نیاز دارند.
      دکتر علی ناظمی، امروز در رویداد استارت آپی اینترنت اشیا که به صورت مجازی در صندوق نوآوری برگزار شد، گفت: این صندوق منابع مالی را در قالب سرمایه‌گذاری و نه تسهیلات به فناوران ارایه می‌دهد، به طوری که هر طرحی را که عاملان صندوق یعنی صندوق‌های پژوهش و فناوری، حاضر به مشارکت ۲۰ درصدی در آن طرح باشند صندوق بسته به سطح فناوری و اولویت راهبردی تا ۸۰ درصد از منابع باقیمانده را تامین کرده و در سود و زیان طرح سهیم خواهد بود.
      `,
    },
  ];
  return (
    <>
      <StyledNewsCards className={`NewsCards ${className || ''}`}>
        <Row>
          <Divider className="divider">
            {t(translations.pages.HomePage.NewsCards.title)}
          </Divider>
        </Row>
        <Row className="rowNews">
          {items.map(item => (
            <div className="col">
              <StyledCard
                hoverable
                key={item.slug}
                cover={<LazyImg src={item.banner || ''} alt={item.title} />}
              >
                <h3 className="title">{item.title}</h3>
                <StyledCard.Meta
                  description={
                    <p className="body">{ellipseString(item.body, 80)}</p>
                  }
                />

                <p className="bodyAll">{ellipseString(item.body, 80)}</p>
              </StyledCard>
            </div>
          ))}
        </Row>
      </StyledNewsCards>
    </>
  );
});
