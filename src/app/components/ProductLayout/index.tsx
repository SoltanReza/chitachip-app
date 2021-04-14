/**
 *
 * ProductLayout
 *
 */
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { StyledFooter } from '../BaseLayout/styles';
import { Footer } from '../BaseLayout/components/Footer';
import { Navbar } from '../BaseLayout/components/Navbar';
import { StyledContent, StyledHeader, StyledProductLayout } from './styles';

interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
}

export const ProductLayout = memo(
  ({ className, children, title, description }: Props) => {
    const { t } = useTranslation();

    return (
      <StyledProductLayout className={`ProductLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        <StyledHeader>
          <Navbar />
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
        <StyledFooter>
          {' '}
          <Footer />
        </StyledFooter>
      </StyledProductLayout>
    );
  },
);
