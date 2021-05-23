/**
 *
 * MenuSider
 *
 */
import { useWindowWidth } from '@react-hook/window-size';
import { Layout, Menu, Row, Col } from 'antd';
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
    <StyledMenuSider
      className={`MenuSider ${className || ''}`}
      style={{
        // overflowY: 'auto',
        overflowX: 'hidden',
        // height: '73vh',
      }}
      // collapsed={collapsed}
      // onCollapse={setCollapsed}
    >
      <div className="categoryTitle">دسته بندی ها</div>

      {BrowseCategories && BrowseCategories.data && (
        <ul
          // defaultSelectedKeys={[
          //   BrowseCategories.data.categories[0].id.toString(),
          // ]}
          className="ulCategotry"
          style={{ height: '100%', borderRight: 0 }}
        >
          {BrowseCategories.data.categories.map(item => (
            <li className="rowCategory" key={item.id}>
              <img src={item.icon} className="iconCategory" alt={item.name} />
              <span className="titleCategory">{item.name}</span>

              <div className="hoverCategory">
                <Row gutter={16}>
                  <Col span={8} className="colCategoryList">
                    <Col span={24}>
                      <img
                        src="http://chitachip.com/media/images/products/product/7_KtIGFZA.jpg"
                        className="imgCategoryList"
                        alt={item.name}
                      />
                    </Col>
                    <Col span={24}>{item.name}</Col>
                  </Col>
                  <Col span={8}>
                    <Col span={24}>
                      <img
                        src="http://chitachip.com/media/images/products/product/6_CLdkpBt.jpg"
                        className="imgCategoryList"
                        alt={item.name}
                      />
                    </Col>
                    <Col span={24}>{item.name}</Col>
                  </Col>
                  <Col span={8}>
                    <Col span={24}>
                      <img
                        src="http://chitachip.com/media/images/products/product/2_om6A3S0.jpg"
                        className="imgCategoryList"
                        alt={item.name}
                      />
                    </Col>
                    <Col span={24}>{item.name}</Col>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={8}>
                    {' '}
                    <Col span={24}>
                      <img
                        src="http://chitachip.com/media/images/products/product/2_om6A3S0.jpg"
                        className="imgCategoryList"
                        alt={item.name}
                      />
                    </Col>
                    <Col span={24}>{item.name}</Col>
                  </Col>
                </Row>
              </div>
            </li>
          ))}
        </ul>
      )}
    </StyledMenuSider>
  );
});
