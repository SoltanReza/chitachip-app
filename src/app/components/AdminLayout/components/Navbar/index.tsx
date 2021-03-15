/**
 *
 * Navbar
 *
 */
import { LogoutOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
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

export const Navbar = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const location = useLocation();
  const history = useHistory();
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
      {
        route: Routes.register,
        title: t(translations.layouts.base.menus.register),
        doRender: !authData.isAuthenticated(),
      },

      {
        route: Routes.dashboard,
        title: t(translations.layouts.base.menus.adminPanel),
        doRender: authData.hasRole([AuthRoles.ADMIN]),
      },
      {
        route: Routes.trading,
        title: t(translations.layouts.base.menus.trading),
        doRender: authData.hasRole([AuthRoles.ADMIN]),
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
  const handleRedirectToLogoutPage = useCallback(
    () => history.push(Routes.logout),
    [history],
  );

  return (
    <StyledNavbar className={`Navbar ${className || ''}`}>
      <div className="logo">
        {authData.hasRole([AuthRoles.REGULAR])}

        <Button
          icon={<LogoutOutlined />}
          size="large"
          type="link"
          onClick={handleRedirectToLogoutPage}
        />
      </div>
      <Menu
        className="navbarMenu"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
      >
        {menus
          .filter(menu => menu.doRender)
          .map(menu => (
            <Menu.Item key={menu.route} onClick={handleRedirect}>
              {menu.title}
            </Menu.Item>
          ))}
      </Menu>
    </StyledNavbar>
  );
});
