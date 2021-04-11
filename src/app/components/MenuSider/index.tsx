/**
 *
 * MenuSider
 *
 */
import {
  PieChartOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { selectBrowseCategories } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMenuSider } from './styles';


interface Props {
  className?: string;
}
const { Sider } = Layout;

export const MenuSider = memo(({ className }: Props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const BrowseCategories = useSelector(selectBrowseCategories);

  useEffect(() => {
    dispatch(appActions.browseCategories({}));
  }, [dispatch]);

  return (
    <StyledMenuSider className={`MenuSider ${className || ''}`}>
      <Sider
        width={200}
        className="site-layout-background"
        style={{
          overflow: 'auto',
          height: '73vh',
        }}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {BrowseCategories &&
            BrowseCategories.data &&
            BrowseCategories.data.categories.map(item => (
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                {item.name}
              </Menu.Item>
            ))}
        </Menu>
      </Sider>
    </StyledMenuSider>
  );
});
