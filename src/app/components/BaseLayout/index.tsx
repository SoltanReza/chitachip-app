/**
 *
 * BaseLayout
 *
 */
import { Input, Layout, Menu } from 'antd';
import React, { memo, ReactNode, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import {
  StyledBaseLayout,
  StyledContent,
  StyledFooter,
  StyledHeader,
  StyledMain,
} from './styles';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;
interface Props {
  className?: string;
  children: ReactNode;
  title?: string | undefined;
  description?: string | undefined;
}

export const BaseLayout = memo(
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

    // useEffect(() => {

    // }, []);

    return (
      <StyledBaseLayout className={`BaseLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        {/* <StyledHeader> */}
        <Navbar black={blackColor} />
        {/* </StyledHeader> */}

        <StyledMain>
          <div></div>

          <StyledContent>{children}</StyledContent>
        </StyledMain>

        <StyledFooter>
          <Footer />
        </StyledFooter>
      </StyledBaseLayout>
    );
  },
);
