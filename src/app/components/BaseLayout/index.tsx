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
    const stickyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // console.log(scrollTop, 'scrollTop');
      // console.log(scrolling, 'scrolling');
      const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop < scrollTop);
      };
      window.addEventListener('scroll', onScroll);
      if (stickyRef) {
        if (stickyRef.current) {
          if (scrollTop < 250) {
            stickyRef.current.style.position = 'relative';
            stickyRef.current.style.padding = '8px 10px';
            stickyRef.current.style.background = '#ff2525';
            // stickyRef.current.style.top = '0';
          } else {
            stickyRef.current.style.position = 'sticky';
            stickyRef.current.style.background = '#3eff25';
            // stickyRef.current.style.top = '100px';
          }
        }
      }

      return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop, scrolling]);
    return (
      <StyledBaseLayout className={`BaseLayout ${className || ''}`}>
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
        </Helmet>

        <StyledHeader>
          <Navbar />
        </StyledHeader>

        <StyledMain>
          <div></div>

          <StyledContent>{children}</StyledContent>
        </StyledMain>

        <StyledFooter>
          {' '}
          <Footer />
        </StyledFooter>
      </StyledBaseLayout>
    );
  },
);
