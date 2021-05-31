/**
 *
 * UserAddress
 *
 */
import { PlusOutlined } from '@ant-design/icons';
import { Card, Form, Button, Row, Col } from 'antd';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledUserAddress } from './styles';

interface Props {
  className?: string;
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const UserAddress = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledUserAddress className={`UserAddress ${className || ''}`}>
      <div className="userAddressTitle">آدرس ها</div>
      <p className="userAddressDescription">
        آدرس تحویل و صورتحسابی را که می‌خواهید بصورت پیش فرض در زمان ثبت سفارش،
        انتخاب شوند را مشخص کنید. شما می‌توانید آدرس‌های دیگری نیز بیافزایید،
        که.می‌تواند برای ارسال هدایا به دیگران یا تحویل سفارش در دفتر کار شما
        مفید باشد
      </p>

      <div className="userAddressAdd">
        <PlusOutlined className="userAddressAddIcon" size={3} />
        افزودن آدرس جدید
      </div>

      <Card className="userAddressDetaileCard">
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
        <Row gutter={48}>
          <Col span={24}>
            <Button className="updateBtn">بروزرسانی</Button>

            <Button className="deleteBtn">حذف</Button>
          </Col>
        </Row>
      </Card>
    </StyledUserAddress>
  );
});
