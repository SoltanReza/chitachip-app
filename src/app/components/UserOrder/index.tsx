/**
 *
 * UserOrder
 *
 */
import { Button, Card, Divider, Descriptions } from 'antd';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledUserOrder } from './styles';

interface Props {
  className?: string;
}

export const UserOrder = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledUserOrder className={`UserOrder ${className || ''}`}>
      <div className="userOrderTitle">تاریخچه سفارشات</div>
      <div className="userOrderDescription">
        در جدول زیر می تواند تاریخچه سفارشات و جزئیات آنها را مشاهده کنید
      </div>

      <table className="orderTable">
        <tr>
          <th>شماره سفارش</th>
          <th>تاریخ سفارش</th>
          <th>جمع قیمت</th>
          <th>نحوه پرداخت</th>
          <th>وضعیت</th>
          <th>صورتحساب</th>
          <th>غیره</th>
        </tr>
        <tr>
          <td>-</td>
          <td>نام</td>
          <td>چیتا</td>
          <td>چیتا</td>
          <td>چیتا</td>
          <td>چیتا</td>
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

      <div className="userOrderDetaileTitle">جزئیات سفارش (شماره سفارش)</div>

      <Card className="userOrderDetaileCard">
        <div className="addressName">نام آدرس</div>
        <hr className="solid" />
        <p>
          <span className="reciverName">نام تحویل گیرنده: </span>
          <span> پویا جنانی</span>
        </p>
        <p>
          <span className="addressTitle">آدرس: </span>
          <span>
            {' '}
            ،طبقه اول شرکت آما180تهران، طرشت شمالی، بلوار شهید تیموری، پژوهشکده
            علوم و فناوری انرژی شریف ،پلاک 1459777611 تهران - تهران
          </span>
        </p>
        <p>
          <span className="mobile">شماره تماس: </span>
          <span> 09121112332</span>
        </p>
      </Card>

      <div className="consignment">مرسولات</div>

      <table className="orderTable">
        <tr>
          <th>عکس محصول</th>
          <th>نام محصول</th>
          <th>قیمت</th>
          <th>تعداد</th>
          <th>جمع قیمت</th>
        </tr>
        <tr>
          <td>-</td>
          <td>نام</td>
          <td>526354 تومان</td>
          <td>1</td>
          <td>89855 تومان</td>
        </tr>
      </table>
      <div className="sendType">نحوه ارسال</div>

      <table className="orderTable sendTypeTable">
        <tr>
          <th>تاریخ</th>
          <th>حامل</th>
          <th>وزن</th>
          <th>هزینه ارسال</th>
          <th>شماره پیگیری</th>
        </tr>
        <tr>
          <td>-</td>
          <td>نام</td>
          <td>526354 تومان</td>
          <td>1</td>
          <td>89855 تومان</td>
        </tr>
      </table>
    </StyledUserOrder>
  );
});
