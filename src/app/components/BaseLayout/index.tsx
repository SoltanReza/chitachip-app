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
import { Layout, Menu } from 'antd';
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { MenuSider } from '../MenuSider';
import { Navbar } from './components/Navbar';
import { StyledBaseLayout, StyledContent, StyledHeader } from './styles';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

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
          <div className="contactUs">
            <div className="online">
              پشتیبانی آنلاین
              <span>
                <CustomerServiceOutlined />
              </span>
            </div>
            <div>تماس با ما</div>
            <div className="socialMedia">
              <WhatsAppOutlined />
            </div>
            <div className="socialMedia">
              <InstagramOutlined />
            </div>
          </div>
          <StyledContent>{children}</StyledContent>
        </Layout>
      </StyledBaseLayout>
    );
  },
);
