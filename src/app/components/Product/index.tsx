/**
 *
 * Product
 *
 */
import React, { memo } from 'react';

import { StyledProduct } from './styles';
import { Card, Breadcrumb, Row, Col, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { ProductData } from 'app/containers/App/types';
import { WarningOutlined } from '@ant-design/icons';


interface Props {
  className?: string;
  data: ProductData;
}
const { Title, Paragraph, Text, Link } = Typography;
export const Product = memo(({ className, data }: Props) => {
  const { t } = useTranslation();

  return (
    <StyledProduct className={`Product ${className || ''}`}>
      <Card className="cardProduct">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <div className="productTitle">
          <h1> {data.title}</h1>
        </div>
        <Row gutter={16}>
          <Col xs={2} sm={4} md={9} lg={10} xl={10}>
            {data.image}
          </Col>
          <Col xs={20} sm={16} md={9} lg={10} xl={10}>
            <Card className="productInfo">
              <Typography>
                <Title>Introduction</Title>
                <Paragraph>
                  In the process of internal desktop applications development,
                  many different design specs and implementations would be
                  involved, which might cause designers and developers
                  difficulties and duplication and reduce the efficiency of
                  development.
                </Paragraph>
              </Typography>
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={4} xl={4}>
            <Card className="productInfo">
              <Typography>
                <Title>Introduction</Title>
                <Paragraph>
                  In the process of internal desktop applications development,
                  many different design specs and implementations would be
                  involved, which might cause designers and developers
                  difficulties and duplication and reduce the efficiency of
                  development.
                </Paragraph>
              </Typography>
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
