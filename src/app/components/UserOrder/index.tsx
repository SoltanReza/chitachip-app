/**
 *
 * UserOrder
 *
 */
import { Button, Card, Divider, Descriptions } from 'antd';
import { selectHisrtoryOfPurchase } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { StyledUserOrder } from './styles';

interface Props {
  className?: string;
}

export const UserOrder = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [orderDetaileId, setOrderDetaileId] = useState(0);

  const hisrtoryOfPurchaseData = useSelector(selectHisrtoryOfPurchase);

  const handleShowsetOrderDetaile = useCallback(e => {
    const data = e.currentTarget.dataset as any;
    setOrderDetaileId(+data.id);
  }, []);

  useEffect(() => {
    dispatch(appActions.hisrtoryOfPurchase({}));
  }, [dispatch]);

  return (
    <StyledUserOrder className={`UserOrder ${className || ''}`}>
      <div className="userOrderTitle">تاریخچه سفارشات</div>
      <div className="userOrderDescription">
        در جدول زیر می تواند تاریخچه سفارشات و جزئیات آنها را مشاهده کنید
      </div>

      {hisrtoryOfPurchaseData && hisrtoryOfPurchaseData.data ? (
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
          {hisrtoryOfPurchaseData.data.data.map(item => (
            <tr>
              <td>{item.invoiceNumber}</td>
              <td>{item.date}</td>
              <td>{item.price}</td>
              <td>{item.type}</td>
              <td>{item.state}</td>
              <td>چیتا</td>
              <td>
                <div className="action">
                  <div>
                    <Button
                      className="actionView"
                      data-id={item.invoiceNumber}
                      onClick={handleShowsetOrderDetaile}
                    >
                      جزئیات
                    </Button>
                  </div>
                  <div>سفارش مجدد</div>
                </div>
              </td>
            </tr>
          ))}
        </table>
      ) : (
        'در حال حاضر سفارشی موجود نمیباشد'
      )}

      <div className="userOrderDetaileTitle">جزئیات سفارش (شماره سفارش)</div>
      {orderDetaileId === 0 ? (
        <Card className="userOrderDetaileCard">
          <div className="addressName">
            {hisrtoryOfPurchaseData.data?.data[0].bill.address_name}
          </div>
          <hr className="solid" />
          <p>
            <span className="reciverName">نام تحویل گیرنده: </span>
            <span>{hisrtoryOfPurchaseData.data?.data[0].bill.user}</span>
          </p>
          <p>
            <span className="addressTitle">آدرس: </span>
            <span>{hisrtoryOfPurchaseData.data?.data[0].bill.address}</span>
          </p>
          <p>
            <span className="mobile">شماره تماس: </span>
            <span>{hisrtoryOfPurchaseData.data?.data[0].bill.phone}</span>
          </p>
        </Card>
      ) : (
        hisrtoryOfPurchaseData.data &&
        hisrtoryOfPurchaseData.data.data.map(
          item =>
            item.bill.invoiceNumber === orderDetaileId.toString() && (
              <Card className="userOrderDetaileCard">
                <div className="addressName">{item.bill.address_name}</div>
                <hr className="solid" />
                <p>
                  <span className="reciverName">نام تحویل گیرنده: </span>
                  <span>{item.bill.user}</span>
                </p>
                <p>
                  <span className="addressTitle">آدرس: </span>
                  <span>{item.bill.address}</span>
                </p>
                <p>
                  <span className="mobile">شماره تماس: </span>
                  <span> {item.bill.phone}</span>
                </p>
              </Card>
            ),
        )
      )}

      <div className="consignment">مرسولات</div>
      {hisrtoryOfPurchaseData && hisrtoryOfPurchaseData.data ? (
        <table className="orderTable">
          <tr>
            <th>عکس محصول</th>
            <th>نام محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>جمع قیمت</th>
          </tr>

          {hisrtoryOfPurchaseData.data.data.map(i =>
            i.bill.prs.map(item => (
              <tr>
                <td>
                  <img
                    src={item.image}
                    style={{ width: '70px', height: '70px' }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.single_price} تومان</td>
                <td>{item.qty}</td>
                <td>{item.total_price} تومان</td>
              </tr>
            )),
          )}
        </table>
      ) : (
        'شما هیچ مرسوله ای ندارید'
      )}

      <div className="sendType">نحوه ارسال</div>

      {orderDetaileId === 0 ? (
        <table className="orderTable sendTypeTable">
          <tr>
            <th>تاریخ</th>
            <th>حامل</th>
            <th>وزن</th>
            <th>هزینه ارسال</th>
            <th>شماره پیگیری</th>
          </tr>

          <tr>
            <td>{hisrtoryOfPurchaseData.data?.data[0].bill.date}</td>
            <td>{hisrtoryOfPurchaseData.data?.data[0].bill.user}</td>
            <td>{hisrtoryOfPurchaseData.data?.data[0].bill.weight}</td>
            <td>{hisrtoryOfPurchaseData.data?.data[0].bill.shipment} تومان</td>
            <td>{hisrtoryOfPurchaseData.data?.data[0].bill.invoiceNumber}</td>
          </tr>
        </table>
      ) : (
        hisrtoryOfPurchaseData &&
        hisrtoryOfPurchaseData.data && (
          <table className="orderTable sendTypeTable">
            <tr>
              <th>تاریخ</th>
              <th>حامل</th>
              <th>وزن</th>
              <th>هزینه ارسال</th>
              <th>شماره پیگیری</th>
            </tr>
            {hisrtoryOfPurchaseData.data.data.map(
              item =>
                item.bill.invoiceNumber === orderDetaileId.toString() && (
                  <tr>
                    <td>{item.bill.date}</td>
                    <td>{item.bill.user}</td>
                    <td>{item.bill.weight}</td>
                    <td>{item.bill.shipment} تومان</td>
                    <td>{item.bill.invoiceNumber}</td>
                  </tr>
                ),
            )}
          </table>
        )
      )}
    </StyledUserOrder>
  );
});
