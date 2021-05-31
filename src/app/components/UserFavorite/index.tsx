/**
 *
 * UserFavorite
 *
 */
import { Button } from 'antd';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledUserFavorite } from './styles';

interface Props {
  className?: string;
}

export const UserFavorite = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  return (
    <StyledUserFavorite className={`UserFavorite ${className || ''}`}>
      <div className="userFavoriteTitle">لیست علاقه مندی ها</div>
      <div className="userFavoriteDescription">
        در زیرمحصولاتی که شما آنها را به فهرست علاقه مندی های خود افزوده بودید
        را مشاهده میکنید
      </div>

      <table className="customers">
        <tr>
          <th>عکس محصول</th>
          <th>نام محصول</th>
          <th>قیمت</th>
          <th>غیره</th>
        </tr>
        <tr>
          <td>-</td>
          <td>نام</td>
          <td>1/300/000 تومان</td>
          <td>
            <div className="action">
              <div>
                <Button className="actionView">نمایش</Button>
              </div>
              <div>
                <Button className="actionDelete">حذف</Button>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </StyledUserFavorite>
  );
});
