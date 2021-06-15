/**
 *
 * BasketLayout
 *
 */
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { StyledFooter } from '../BaseLayout/styles';
import { Footer } from '../BaseLayout/components/Footer';
import { Navbar } from '../BaseLayout/components/Navbar';
import { StyledContent, StyledHeader, StyledBasketLayout } from './styles';

interface Props {
  className?: string;
  children: ReactNode;
  title?: string | undefined;
  description?: string | undefined;
}

export const BasketLayout = memo(
  ({ className, children, title, description }: Props) => {
    const { t } = useTranslation();

    return (
      <StyledBasketLayout className={`BasketLayout ${className || ''}`}>
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
      </StyledBasketLayout>
    );
  },
);
