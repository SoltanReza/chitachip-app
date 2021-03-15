/**
 *
 * AuthLayout
 *
 */
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { StyledAuthLayout, StyledContent } from './styles';

interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
}

export const AuthLayout = memo(
  ({ className, children, title, description }: Props) => {
    return (
      <StyledAuthLayout className={`AuthLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        {/* <StyledHeader></StyledHeader> */}

        <StyledContent>{children}</StyledContent>

        {/* <StyledFooter></StyledFooter> */}
      </StyledAuthLayout>
    );
  },
);
