/**
 *
 * MenuSider
 *
 */
import {
  CustomerServiceOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { useWindowWidth } from '@react-hook/window-size';
import { Layout, Menu } from 'antd';
import { selectBrowseCategories } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { sizes } from 'styles/media';
import { StyledMenuSider } from './styles';

interface Props {
  className?: string;
}
const { Sider } = Layout;

export const MenuSider = memo(({ className }: Props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const BrowseCategories = useSelector(selectBrowseCategories);
  const onlyWidth = useWindowWidth();
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    dispatch(appActions.browseCategories({}));
  }, [dispatch]);

  useEffect(() => {
    setCollapsed(onlyWidth < sizes.medium);
  }, [onlyWidth, setCollapsed]);

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
        <div className="categoryTitle">دسته بندی ها</div>
        {BrowseCategories && BrowseCategories.data && (
          <Menu
            mode="inline"
            defaultSelectedKeys={[
              BrowseCategories.data.categories[0].id.toString(),
            ]}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {BrowseCategories.data.categories.map(item => (
              <Menu.Item
                key={item.id}
                icon={<img src={item.icon} className="iconCategory" />}
              >
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        )}
      </Sider>
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
    </StyledMenuSider>
  );
});
