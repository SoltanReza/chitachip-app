/**
 *
 * BaseLayout
 *
 */
import React, { memo, ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {
  StyledBaseLayout,
  StyledContent,
  StyledFooter,
  StyledHeader,
} from './styles';
import { Layout, Menu, Breadcrumb, Input, Divider } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ShoppingOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import Search from 'antd/lib/input/Search';

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
          <div className="logo" />
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['2']}
            className="navCostum"
          >
            <Menu.Item key="1" icon={<UserOutlined />}>
              ثبت نام / ورود
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingOutlined />}>
              سبد خرید
            </Menu.Item>
            <Menu.Item key="3">
              {' '}
              <Input.Search size="middle" placeholder="input here" />
              {/* <Search placeholder="input search text" style={{ width: 200 }} /> */}
            </Menu.Item>
          </Menu>
        </StyledHeader>

        {/* <StyledContent>{children}</StyledContent> */}

        {/* <StyledFooter>
          {' '}
          <Footer />
        </StyledFooter> */}

        <Layout>
          <Sider
            width={200}
            className="site-layout-background"
            style={{
              overflow: 'auto',
              height: '75vh',
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                آردینو و قطعات جانبی
              </Menu.Item>

              <Menu.Item key="2" icon={<PieChartOutlined />}>
                بردهای توسعه
              </Menu.Item>
              <Menu.Item key="3" icon={<PieChartOutlined />}>
                ماژول / مبدل
              </Menu.Item>
              <Menu.Item key="4" icon={<PieChartOutlined />}>
                سنسور
              </Menu.Item>
              <Menu.Item key="5" icon={<PieChartOutlined />}>
                موتور
              </Menu.Item>
              <Menu.Item key="6" icon={<PieChartOutlined />}>
                تغذیه
              </Menu.Item>
              <Menu.Item key="7" icon={<PieChartOutlined />}>
                تجهیزات بیسیم
              </Menu.Item>
              <Menu.Item key="8" icon={<PieChartOutlined />}>
                قطعات الکترونیک
              </Menu.Item>
              <Menu.Item key="9" icon={<PieChartOutlined />}>
                قطعات مکانیک
              </Menu.Item>
              <Menu.Item key="10" icon={<PieChartOutlined />}>
                رباتیک
              </Menu.Item>
              <Menu.Item key="11" icon={<PieChartOutlined />}>
                پرینتر سه بعدی و قطعات جانبی
              </Menu.Item>
              <Menu.Item key="12" icon={<PieChartOutlined />}>
                پک ها آموزشی
              </Menu.Item>
              <Menu.Item key="13" icon={<PieChartOutlined />}>
                مرتبط با کودکان
              </Menu.Item>
            </Menu>
          </Sider>

          <StyledContent>{children}</StyledContent>
        </Layout>
      </StyledBaseLayout>
    );
  },
);
