/**
 *
 * MenuSider
 *
 */
import { useWindowWidth } from '@react-hook/window-size';
import { Layout } from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import { Cats } from 'app/containers/App/types';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { sizes } from 'styles/media';
import { redirect } from 'utils/history';
import { StyledCategorySider } from './styles';

interface Props {
  className?: string;
  categories: Array<Cats>;
}
const { Sider } = Layout;

export const CategorySider = memo(({ className, categories }: Props) => {
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
    <StyledCategorySider
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
            <li
              className="rowCategory"
              // {`${menu.active ? 'activeCategory' : 'rowCategory'}`}
              key={menu.id}
            >
              <span
                data-cat-id={menu.id}
                data-cat-name={menu.name}
                onClick={handleRoutToProductList}
              >
                {' '}
                <img src={menu.icon} className="iconCategory" alt={menu.name} />
                <span className="titleCategory">{menu.name}</span>
              </span>
            </li>
          ))}
      </ul>
    </StyledCategorySider>
  );
});
