/**
 *
 * Navbar
 *
 */
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Menu } from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import { selectAuth } from 'app/containers/App/selectors';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthRoles } from 'types';
import { StyledNavbar } from './styles';

interface Props {
  className?: string;
}
const { Search } = Input;

export const Navbar = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const authData = useSelector(selectAuth);
  const menus = useMemo(
    () => [
      {
        route: Routes.home,
        title: t(translations.layouts.base.menus.home),
        doRender: false,
      },
      {
        route: Routes.login,
        title: t(translations.layouts.base.menus.login),
        doRender: !authData.isAuthenticated(),
      },
      // {
      //   route: Routes.register,
      //   title: t(translations.layouts.base.menus.register),
      //   doRender: !authData.isAuthenticated(),
      // },

      {
        route: Routes.dashboard,
        title: t(translations.layouts.base.menus.adminPanel),
        doRender: authData.isAuthenticated(),
      },

      {
        route: Routes.contactUs,
        title: t(translations.layouts.base.menus.contactUs),
        doRender: true,
      },
      {
        route: Routes.faq,
        title: t(translations.layouts.base.menus.faq),
        doRender: true,
      },
    ],
    [authData, t],
  );

  const handleRedirect = useCallback(
    e => {
      const routePath = e.key;
      history.push(routePath);
    },
    [history],
  );
  const handleRoutToLogin = useCallback(() => history.push(Routes.login), [
    history,
  ]);
  const handleRoutToHome = useCallback(() => history.push(Routes.home), [
    history,
  ]);

  const handleRedirectToLogoutPage = useCallback(
    () => history.push(Routes.logout),
    [history],
  );
  const handleRedirectToBasketPage = useCallback(
    () => history.push(Routes.basket),
    [history],
  );

  const handleRedirectToUserProfilePage = useCallback(
    () => history.push(Routes.userProfile),
    [history],
  );

  return (
    <StyledNavbar className={`Navbar ${className || ''}`}>
      {/* <div className="logo" />
      <div className="logout">
        {authData.isAuthenticated() && (
          <Button
            icon={<LogoutOutlined />}
            size="large"
            type="link"
            onClick={handleRedirectToLogoutPage}
          />
        )}
      </div>

      <Menu
        className="navbarMenu"
        mode="horizontal"
        selectedKeys={[location.pathname]}
      >
        {menus
          .filter(menu => menu.doRender)
          .map(menu => (
            <Menu.Item key={menu.route} onClick={handleRedirect}>
              {menu.title}
            </Menu.Item>
          ))}
      </Menu> */}

      <div className="logo" onClick={handleRoutToHome} />
      <Menu mode="horizontal" defaultSelectedKeys={['2']} className="navCostum">
        {authData.data ? (
          <Menu.SubMenu key="1" icon={<UserOutlined />} title="پروفایل کاربری">
            <Menu.Item
              key="setting:2"
              onClick={handleRedirectToUserProfilePage}
            >
              پروفایل
            </Menu.Item>
            <Menu.Item key="setting:1" onClick={handleRedirectToLogoutPage}>
              خروج
            </Menu.Item>
          </Menu.SubMenu>
        ) : (
          // <Menu.Item
          //   key="1"
          //   icon={<UserOutlined />}
          //   // onClick={handleRoutToLogin}
          // >
          //   نام کاربری
          // </Menu.Item>
          <Menu.Item
            key="1"
            icon={<UserOutlined />}
            onClick={handleRoutToLogin}
          >
            ثبت نام / ورود
          </Menu.Item>
        )}

        <Menu.Item
          key="2"
          icon={<ShoppingOutlined />}
          onClick={handleRedirectToBasketPage}
        >
          سبد خرید
        </Menu.Item>
        <Menu.Item>
          <Search
            placeholder="جستجو"
            style={{ width: 200 }}
            className="searchStyle"
          />
        </Menu.Item>
      </Menu>
    </StyledNavbar>
  );
});
