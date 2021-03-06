/**
 *
 * ProductListPage
 *
 */

import {
  AppstoreOutlined,
  MenuOutlined,
  StarFilled,
  TableOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Checkbox, Col, Form, Radio, Row, Switch } from 'antd';
import { CategorySider } from 'app/components/CategorySider';
import { translations } from 'locales/i18n';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ellipseString } from 'utils/helpers';
import { redirect } from 'utils/history';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Routes } from '../App/Router/routes';
import {
  selectBrowseCategories,
  selectBrowseHomeList,
  selectHomeListProducts,
} from '../App/selectors';
import { appActions } from '../App/slice';
import { productListPageSaga } from './saga';
import { selectProductListPage } from './selectors';
import { reducer, sliceKey } from './slice';
import { StyledProductListPage } from './styles';
import { MenuSider } from 'app/components/MenuSider';
import { ProductCard } from 'app/components/ProductCard';
interface Props {
  className?: string;
}

export function ProductListPage({ className }: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  useInjectSaga({ key: sliceKey, saga: productListPageSaga });

  const dispatch = useDispatch();

  const BrowseHomeList = useSelector(selectBrowseHomeList);
  const BrowseCategories = useSelector(selectBrowseCategories);
  const HomelistProducts = useSelector(selectHomeListProducts);

  const { t } = useTranslation();
  const params = useParams<{
    catId: string;
    subId: string;
    catName: string;
    item: string;
  }>();
  const [valueRadio, setValueRadio] = useState(1);

  const onChangeRadio = e => {
    console.log('radio checked', e.target.value);
    setValueRadio(e.target.value);
  };
  const plainOptions = ['جدیدترین', 'پیشنهاد ویژه'];
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  const handleGetSubCategory = useCallback(
    id => () => dispatch(appActions.browseCategories({ sub_id: id })),
    [dispatch],
  );

  useEffect(() => {
    if (params.item !== 'undefined') {
      dispatch(appActions.getHomeListProducts({ item: params.item }));
    }
    if (params.catId !== 'undefined') {
      dispatch(appActions.browseCategories({ cat_id: params.catId }));
    }
    if (params.subId !== 'undefined') {
      dispatch(appActions.browseCategories({ sub_id: params.subId }));
    }
  }, [dispatch, params.catId, params.item, params.subId]);

  return (
    <StyledProductListPage
      className={`ProductListPage ${className || ''}`}
      title={t(translations.pages.ProductListPage.title)}
      description={t(translations.pages.ProductListPage.description)}
    >
      <Row gutter={32}>
        <Col xs={4} sm={4} md={6} lg={6} xl={6}>
          {BrowseHomeList && BrowseHomeList.data && (
            <>
              <Row gutter={16}>
                <MenuSider
                  collapse
                  categories={BrowseHomeList.data.categories}
                />
              </Row>
              <Row gutter={16}>
                <Col span={24} className="categoryList">
                  <div className="subTitle">{params.catName}</div>

                  {BrowseCategories &&
                    BrowseCategories.data &&
                    BrowseCategories.data.sub.map(item => (
                      <div className="subList">
                        <div onClick={handleGetSubCategory(item.id)}>
                          {item.name}
                        </div>
                      </div>
                    ))}
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24} className="filter">
                  <div className="filterTitle">فیلترها</div>
                  <div className="filterList"></div>
                </Col>
              </Row>
            </>
          )}
        </Col>
        <Col xs={20} sm={20} md={6} lg={18} xl={18}>
          <div className="titleCategoryItem">{params.catName}</div>
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>
              <a href="/">صفحه اصلی</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a>{params.catName}</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={16} className="rowFilterAction">
            <Col xs={20} sm={20} md={6} lg={14} xl={14}>
              <Checkbox.Group
                className="checkboxFilter"
                options={plainOptions}
                defaultValue={['Apple']}
                onChange={onChange}
              />
              <Radio.Group onChange={onChangeRadio} value={valueRadio}>
                <Radio value={1}>
                  <span className="radioFilter">ارزانترین</span>
                </Radio>
                <Radio value={2}>
                  {' '}
                  <span className="radioFilter">گرانترین</span>
                </Radio>
              </Radio.Group>
            </Col>
            <Col xs={20} sm={20} md={6} lg={8} xl={8}>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Form.Item label="کالاهای موجود" className="SwitchTitle">
                  <Switch />
                </Form.Item>
              </Col>
              <Col xs={4} sm={4} md={6} lg={4} xl={4}>
                <AppstoreOutlined />
              </Col>
              <Col xs={4} sm={4} md={6} lg={4} xl={4}>
                <MenuOutlined />
              </Col>
              <Col xs={4} sm={4} md={6} lg={4} xl={4}>
                <TableOutlined />
              </Col>
            </Col>
          </Row>
          <Row gutter={32} className="rowOfferCard">
            {HomelistProducts.data
              ? HomelistProducts &&
                HomelistProducts.data &&
                HomelistProducts.data.data.map(item => (
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    className="colOfferCard"
                  >
                    <ProductCard data={item} />
                  </Col>
                ))
              : BrowseCategories &&
                BrowseCategories.data &&
                BrowseCategories.data.data.map(item => (
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    className="colOfferCard"
                  >
                    <ProductCard data={item} />
                  </Col>
                ))}
          </Row>
        </Col>
      </Row>
    </StyledProductListPage>
  );
}
