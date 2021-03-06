/**
 *
 * ProductLayout
 *
 */
import React, { memo, ReactNode, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { StyledFooter } from '../BaseLayout/styles';
import { Footer } from '../BaseLayout/components/Footer';
import { Navbar } from '../BaseLayout/components/Navbar';
import { StyledContent, StyledHeader, StyledProductLayout } from './styles';

interface Props {
  className?: string;
  children: ReactNode;
  title?: string | undefined;
  description?: string | undefined;
}

export const ProductLayout = memo(
  ({ className, children, title, description }: Props) => {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const [blackColor, setBlackColor] = useState(false);

    useEffect(() => {
      const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop < scrollTop);
      };
      window.addEventListener('scroll', onScroll);

      if (window.pageYOffset > 20) {
        setBlackColor(true);
      } else {
        setBlackColor(false);
      }
      return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop, scrolling]);
    const { t } = useTranslation();

    return (
      <StyledProductLayout className={`ProductLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        {/* <StyledHeader> */}
        <Navbar black={blackColor} />
        {/* </StyledHeader> */}
        <StyledContent>{children}</StyledContent>
        <StyledFooter>
          {' '}
          <Footer />
        </StyledFooter>
      </StyledProductLayout>
    );
  },
);
