/**
 *
 * BaseLayout
 *
 */
import {
  CustomerServiceOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Input } from 'antd';
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { MenuSider } from '../MenuSider';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {
  StyledBaseLayout,
  StyledContent,
  StyledHeader,
  StyledFooter,
} from './styles';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
interface Props {
  className?: string;
  children: ReactNode;
  title?: string;
  description?: string;
}

export const BaseLayout = memo(
  ({ className, children, title, description }: Props) => {
    return (
      <StyledBaseLayout className={`BaseLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        <StyledHeader>
          <Navbar />
        </StyledHeader>

        {/* <StyledContent>{children}</StyledContent> */}

        {/* <StyledFooter>
          {' '}
          <Footer />
        </StyledFooter> */}

        <Layout>
          <MenuSider />

          <StyledContent>{children}</StyledContent>
        </Layout>

        <StyledFooter>
          {' '}
          <Footer />
        </StyledFooter>
      </StyledBaseLayout>
    );
  },
);
