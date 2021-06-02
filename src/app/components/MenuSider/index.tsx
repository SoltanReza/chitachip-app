/**
 *
 * MenuSider
 *
 */
import { useWindowWidth } from '@react-hook/window-size';
import { Layout, Menu, Row, Col } from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import { selectBrowseCategories } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { Categories } from 'app/containers/App/types';
import React, { memo, useEffect, useState } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { sizes } from 'styles/media';
import { redirect } from 'utils/history';
import { StyledMenuSider } from './styles';

interface Props {
  className?: string;
  categories: Array<Categories>;
}
const { Sider } = Layout;

export const MenuSider = memo(({ className, categories }: Props) => {
  const { t } = useTranslation();
  const refMenu = useRef<HTMLSpanElement>(null);

  const dispatch = useDispatch();
  const onlyWidth = useWindowWidth();
  const [collapsed, setCollapsed] = useState(true);

  const handleRoutToProductList = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      redirect(Routes.productList, {
        catId: data.catId,
        subId: data.subId,
        catName: data.catName,
      });
    },
    [],
  );

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
      <ul
        // defaultSelectedKeys={[
        //   BrowseCategories.data.categories[0].id.toString(),
        // ]}
        className="ulCategotry"
        style={{ height: '100%', borderRight: 0 }}
      >
        <div className="categoryTitle">دسته بندی ها</div>
        {categories &&
          categories.map(menu => (
            <li className="rowCategory" key={menu.category.id}>
              <div className="rowCategoryItem">
                <span
                  data-cat-id={menu.category.id}
                  data-cat-name={menu.category.name}
                  onClick={handleRoutToProductList}
                >
                  {' '}
                  <img
                    src={menu.category.icon}
                    className="iconCategory"
                    alt={menu.category.name}
                  />
                  <span className="titleCategory">{menu.category.name}</span>
                </span>
              </div>
              <div className="hoverCategory">
                <Row gutter={16}>
                  {menu.sub.map(subMenue => (
                    <Col
                      span={8}
                      className="colCategoryList"
                      data-sub-id={subMenue.id}
                      data-cat-name={subMenue.name}
                      onClick={handleRoutToProductList}
                    >
                      <Row className="rowImgCategoryList">
                        <img
                          src={subMenue.icon}
                          className="imgCategoryList"
                          alt={subMenue.name}
                        />
                      </Row>
                      <Row className="subCategoryListTitle">
                        {subMenue.name}
                      </Row>
                    </Col>
                  ))}
                </Row>
              </div>
            </li>
          ))}
      </ul>
    </StyledMenuSider>
  );
});
