/**
 *
 * Sidebar
 *
 */
import {
  BarChartOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  LineChartOutlined,
  MessageOutlined,
  NotificationOutlined,
  PieChartOutlined,
  RiseOutlined,
  TeamOutlined,
  UserOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { Avatar, Menu } from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import { selectAuth } from 'app/containers/App/selectors';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { sizes } from 'styles/media';
import { AuthRoles } from 'types';
import { StyledSidebar } from './styles';

interface Props {
  className?: string;
}

export const Sidebar = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const authData = useSelector(selectAuth);
  const onlyWidth = useWindowWidth();
  const [collapsed, setCollapsed] = useState(true);
  const menus = useMemo(
    () => [
      {
        route: Routes.dashboard,
        title: t(translations.layouts.admin.siderMenu.dashboard),
        doRender: true,
        icon: <DashboardOutlined />,
        key: 'dashboard',
      },
      {
        route: Routes.profile,
        title: t(translations.layouts.admin.siderMenu.profile),
        doRender: true,
        icon: <UserOutlined />,
      },
      {
        route: Routes.tradeInfo,
        title: t(translations.layouts.admin.siderMenu.tradeInfo),
        doRender: true,
        icon: <RiseOutlined />,
        key: 'tradeInfo',
      },
      // {
      //   route: Routes.recharge,
      //   title: t(translations.layouts.admin.siderMenu.peyments),
      //   doRender: true,
      //   icon: <CalculatorOutlined />,

      //   key: 'payments',
      // },
      {
        route: Routes.financialInfo,
        title: t(translations.layouts.admin.siderMenu.finncialInfo),
        doRender: authData.hasRole([AuthRoles.REGULAR]),
        icon: <PieChartOutlined />,
        key: 'financialInfo',
      },
      {
        route: Routes.currency,
        title: t(translations.layouts.admin.siderMenu.currency),
        doRender: authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]),
        icon: <DollarCircleOutlined />,
        key: 'currency',
      },
      {
        route: Routes.userManagement,
        title: t(translations.layouts.admin.siderMenu.userManagement),
        doRender: authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]),
        icon: <TeamOutlined />,
        key: 'userManagement',
      },
      {
        route: Routes.transaction,
        title: t(translations.layouts.admin.siderMenu.transactions),
        doRender: authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]),
        icon: <LineChartOutlined />,
        key: 'transaction',
      },
      {
        route: Routes.news,
        title: t(translations.layouts.admin.siderMenu.news),
        doRender: authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]),
        icon: <NotificationOutlined />,
        key: 'news',
      },
      {
        route: Routes.adminMessage,
        title: t(translations.layouts.admin.siderMenu.adminMessage),
        doRender: authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]),
        icon: <MessageOutlined />,
        key: 'adminMessage',
      },
      {
        route: Routes.package,
        title: t(translations.layouts.admin.siderMenu.package),
        doRender: authData.hasRole([AuthRoles.ADMIN, AuthRoles.MANAGER]),
        icon: <BarChartOutlined />,
        key: 'Package',
      },
      {
        route: Routes.ticket,
        title: t(translations.layouts.admin.siderMenu.ticket),
        doRender: authData.hasRole([
          AuthRoles.ADMIN,
          AuthRoles.MANAGER,
          AuthRoles.REGULAR,
        ]),
        icon: <MailOutlined />,
        key: 'ticket',
      },
    ],
    [t, authData],
  );

  const selectedKey = useMemo(() => {
    const currentMenu =
      menus.find(x => x.route === location.pathname) || menus[0];

    return currentMenu.key || currentMenu.route;
  }, [menus, location.pathname]);

  const handleRedirect = useCallback(
    e => {
      history.push(e.item.props['data-route']);
    },
    [history],
  );
  const handleRedirectToRechargePage = useCallback(
    () => history.push(Routes.recharge),
    [history],
  );

  useEffect(() => {
    setCollapsed(onlyWidth < sizes.medium);
  }, [onlyWidth, setCollapsed]);
  return (
    <StyledSidebar
      className={`Sidebar ${className || ''}`}
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
        {menus
          .filter(menu => menu.doRender)
          .map(menu => (
            <Menu.Item
              key={menu.key || menu.route}
              data-route={menu.route}
              icon={menu.icon}
              onClick={handleRedirect}
            >
              {menu.title}
            </Menu.Item>
          ))}
      </Menu>
    </StyledSidebar>
  );
});
