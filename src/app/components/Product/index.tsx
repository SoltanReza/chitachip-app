/**
 *
 * Product
 *
 */
import React, { memo } from 'react';
import {
  HeartOutlined,
  ShoppingOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { StyledProduct } from './styles';
import { Card, Breadcrumb, Row, Col, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProductData } from 'app/containers/App/types';
import { WarningOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface Props {
  className?: string;
  data: ProductData;
}
const { Title, Paragraph, Text, Link } = Typography;
export const Product = memo(({ className, data }: Props) => {
  const { t } = useTranslation();
  let inputhtml = '<a >HelloWorld</a>';
  return (
    <StyledProduct className={`Product ${className || ''}`}>
      <Card className="cardProduct">
        <Breadcrumb>
          <Breadcrumb.Item>خانه</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">محصولات</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="productTitle">
          <h1> {data.title}</h1>
        </div>
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
          <Col xs={24} sm={24} md={9} lg={10} xl={10}>
            <img src={data.image} className="imgProduct" />
          </Col>
          <Col xs={24} sm={24} md={9} lg={10} xl={10}>
            <Card className="productInfo">
              <Typography>
                <Title>ویژگی های محصولات</Title>
                <Paragraph>{data.properties}</Paragraph>
                <div dangerouslySetInnerHTML={{ __html: inputhtml }}></div>
              </Typography>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} lg={4} xl={4}>
            <Card className="productInfo">
              <Typography>
                <Paragraph>گارانتی اصل بودن کالا</Paragraph>
                <Paragraph>ضمانت تحویل سالم!</Paragraph>
                <Paragraph>250 هزار تومان</Paragraph>
              </Typography>
              <Col xs={24} sm={24} md={9} lg={10} xl={10}>
                <Button icon={<ShoppingOutlined />} className="addToCardBtn">
                  اضافه به سبد خرید
                </Button>
              </Col>
              <Col>
                <Button icon={<HeartOutlined />} className="addToFavorite">
                  اضافه به مورد علاقه ها
                </Button>
              </Col>
              <Col>
                <Button icon={<ShareAltOutlined />} className="Share">
                  اشتراک گذاری
                </Button>
              </Col>
            </Card>
          </Col>
        </Row>
        <Row justify="end" className="productAlert">
          <Col span={16}>
            <h3 className="alertText">
              {' '}
              <WarningOutlined color="red" /> هشدار
            </h3>
            <p>{data.description}</p>
          </Col>
        </Row>
      </Card>
    </StyledProduct>
  );
});
