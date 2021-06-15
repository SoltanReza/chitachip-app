/**
 *
 * UserFavorite
 *
 */
import { Button } from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import { selectBrowseLikeList } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import React, { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'utils/history';
import { StyledUserFavorite } from './styles';

interface Props {
  className?: string;
}

export const UserFavorite = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const likeData = useSelector(selectBrowseLikeList);

  const handleRouteToProductDetails = useCallback(
    (id: string) => () => redirect(Routes.productDetails, { id }),
    [],
  );
  const handleDeleteItem = useCallback(
    (id: string) => () => {
      dispatch(appActions.deleteLikeItem({ id: id }));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(appActions.browseLikeList({}));
  }, [dispatch]);

  return (
    <StyledUserFavorite className={`UserFavorite ${className || ''}`}>
      <div className="userFavoriteTitle">لیست علاقه مندی ها</div>
      {likeData && likeData.data && likeData.data.data.length === 0 ? (
        'هنوز محصولی پسندیده نشده است'
      ) : (
        <>
          <div className="userFavoriteDescription">
            در زیرمحصولاتی که شما آنها را به فهرست علاقه مندی های خود افزوده
            بودید را مشاهده میکنید
          </div>

          <table className="customers">
            <tr>
              <th>عکس محصول</th>
              <th>نام محصول</th>
              <th>قیمت</th>
              <th>غیره</th>
            </tr>
            {likeData &&
              likeData.data &&
              likeData.data.data.map(item => (
                <tr>
                  <td>
                    <img
                      src={item.image_thumbnail}
                      style={{ width: '70px', height: '70px' }}
                    />{' '}
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price} تومان</td>
                  <td>
                    <div className="action">
                      <div>
                        <Button
                          className="actionView"
                          onClick={handleRouteToProductDetails(item.id)}
                        >
                          نمایش
                        </Button>
                      </div>
                      <div>
                        <Button
                          className="actionDelete"
                          onClick={handleDeleteItem(item.id)}
                        >
                          حذف
                        </Button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </table>
        </>
      )}
    </StyledUserFavorite>
  );
});
