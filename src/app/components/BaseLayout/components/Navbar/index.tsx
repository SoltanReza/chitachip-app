/**
 *
 * Navbar
 *
 */
import { ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import { Input, message } from 'antd';
import { BasketHeader } from 'app/components/BasketHeader';
import { Routes } from 'app/containers/App/Router/routes';
import { browseListProductsSaga } from 'app/containers/App/saga';
import {
  selectAuth,
  selectBrowseListProducts,
  selectSearchProduct,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useMemo, useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { redirect } from 'utils/history';
import { SearchDataWrapper, StyledNavbar } from './styles';

interface Props {
  className?: string;
  black?: boolean;
}
const { Search } = Input;

export const Navbar = memo(({ className, black }: Props) => {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const authData = useSelector(selectAuth);
  const searchData = useSelector(selectSearchProduct);
  const [showBasket, setShowBasket] = useState(false);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appActions.searchProduct({ q: searchText }));
    console.log(searchData);
  }, [dispatch, searchText]);

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
  const handleRedirectToBasketPage = useCallback(() => setShowBasket(true), []);

  const handleRedirectToUserProfilePage = useCallback(
    () => history.push(Routes.userProfile),
    [history],
  );

  const handleSearch = useCallback(e => {
    if (e.target.value.length > 3) {
      setSearchText(e.target.value);
    }
  }, []);

  const handleshowEmptyBasket = useCallback(() => {
    if (!authData.data) {
      message.info('برای دیدن سبد خرید لطفا ابتدا وارد سامانه شوید');
    }
  }, [authData]);

  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );

  return (
    <StyledNavbar black={black} className={`Navbar ${className || ''}`}>
      {/* <div className="logo" onClick={handleRoutToHome} /> */}
      {authData.data ? (
        <>
          <ul>
            <li>
              <a onClick={handleRedirectToUserProfilePage}>
                <UserOutlined className="icon" />
                <span className="text"> پروفایل</span>
              </a>
            </li>

            <li className="basket">
              <a>
                <ShoppingOutlined className="icon" />
                <span className="text"> سبد خرید</span>
              </a>
              <BasketHeader />
            </li>
            <li className="searchBar">
              <Search
                placeholder="جستجو"
                style={{
                  color: black ? 'white' : 'black',
                  opacity: '1',
                  direction: 'ltr',
                }}
                className="searchStyle"
                onChange={handleSearch}
              />

              {searchData && searchData.data && searchData.data.products && (
                <SearchDataWrapper>
                  {searchData.data.products.map(i => (
                    <div
                      className="item-wrapper"
                      onClick={handleRouteToProductDetails(i.id)}
                    >
                      <div className="img-wrapper">
                        <img src={i.image} alt={i.title} />
                      </div>

                      <div className="info-wrapper">
                        <h4>{i.title}</h4>

                        <div className="icon-wrapper"></div>
                      </div>
                    </div>
                  ))}
                </SearchDataWrapper>
              )}
            </li>
          </ul>
          <div className="logo" onClick={handleRoutToHome} />
        </>
      ) : (
        <>
          <ul>
            <li>
              <a onClick={handleRoutToLogin}>
                {' '}
                <UserOutlined /> ثبت نام / ورود
              </a>
            </li>

            <li className="basket">
              <a onClick={handleshowEmptyBasket}>
                <ShoppingOutlined /> سبد خرید
              </a>
              {/* <BasketHeader /> */}
            </li>
            <li>
              <Search
                color={black ? '#fff' : '#000'}
                placeholder="جستجو"
                className="searchStyle"
              />
            </li>
          </ul>
          <div className="logo" onClick={handleRoutToHome} />
        </>
      )}
    </StyledNavbar>
  );
});
