/**
 *
 * AdminLayout
 *
 */
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import {
  StyledAdminLayout,
  StyledContent,
  StyledHeader,
  StyledMainLayout,
} from './styles';

interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
}

export const AdminLayout = memo(
  ({ className, children, title, description }: Props) => {
    return (
      <StyledAdminLayout className={`AdminLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        <Sidebar />

        <StyledMainLayout>
          <StyledHeader>
            <Navbar />
          </StyledHeader>

          <StyledContent>{children}</StyledContent>
        </StyledMainLayout>
      </StyledAdminLayout>
    );
  },
);
