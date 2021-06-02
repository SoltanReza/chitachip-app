/**
 *
 * Product
 *
 */
import {
  HeartOutlined,
  ShareAltOutlined,
  ShoppingOutlined,
  WarningOutlined,
  StarFilled,
  HeartFilled,
} from '@ant-design/icons';

import { Breadcrumb, Button, Card, Col, Row, Typography, Modal } from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import { selectAuth, selectLikeProduct } from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { ProductData } from 'app/containers/App/types';
import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'utils/history';
import { StyledProduct } from './styles';

interface Props {
  className?: string;
  data: ProductData;
}

const { Title, Paragraph, Text, Link } = Typography;

export const Product = memo(({ className, data }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const authData = useSelector(selectAuth);
  const likeData = useSelector(selectLikeProduct);

  const handleOk = () => {
    setIsModalVisible(false);
    redirect(Routes.login);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const openTabProduct = useCallback(
    tabName => evt => {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
      }
      tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
      }
      if (tabName) {
        const tabId = document.getElementById(tabName) as HTMLElement;
        tabId.style.display = 'block';
        evt.currentTarget.className += ' active';
      }
    },
    [],
  );

  const handleAddToBasket = useCallback(() => {
    dispatch(
      appActions.addToBasket({
        product_id: data.id,
        quantity: 1,
      }),
    );
  }, [data.id, dispatch]);
  const handleVoteLike = useCallback(
    e => {
      const data = e.currentTarget.dataset as any;
      if (authData) {
        if (authData.data) {
          dispatch(appActions.likeProduct({ product_id: data.id }));
        } else {
          setIsModalVisible(true);
        }
      }
    },
    [authData, dispatch],
  );

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
          <h1>{data.title}</h1>
        </div>
        <Row gutter={[16, { xs: 8, sm: 16, md: 48, lg: 48 }]}>
          <Col xs={24} sm={24} md={7} lg={8} xl={8}>
            <img src={data.image} alt={data.title} className="imgProduct" />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={11}
            lg={12}
            xl={12}
            className="productInfoCard"
          >
            <Card className="productInfo">
              <div className="productInfoTitle">ویژگی های محصولات</div>

              <div dangerouslySetInnerHTML={{ __html: data.properties }}></div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={6} lg={4} xl={4}>
            <Card className="priceInfoCard">
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <ul className="priceInfoTitle">
                    <li>گارانتی اصل بودن کالا</li>
                    <li>ضمانت تحویل سالم!</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div className="priceInfo">
                    <div className="discount">18%</div>
                    <div>2235255</div>
                  </div>
                  <p className="showPrice">235.325 تومان</p>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Button
                    icon={<ShoppingOutlined />}
                    block
                    className="addToCardBtn"
                    onClick={handleAddToBasket}
                  >
                    اضافه به سبد خرید
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <div>
                    <Button
                      icon={
                        likeData.data && likeData.data.status === 201 ? (
                          <HeartOutlined />
                        ) : (
                          <HeartFilled />
                        )
                      }
                      block
                      className="addToFavorite"
                      data-id={data.id}
                      onClick={handleVoteLike}
                    >
                      اضافه به مورد علاقه ها
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Button icon={<ShareAltOutlined />} block className="Share">
                    اشتراک گذاری
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row justify="end" className="productAlert">
          <Col xs={24} sm={24} md={16} lg={16} xl={16}>
            <h3 className="alertText">
              {' '}
              <WarningOutlined color="red" /> هشدار
            </h3>
            {/* <div dangerouslySetInnerHTML={{ __html: data.description }}></div> */}
          </Col>
        </Row>
      </Card>

      <Row className="relatedProduct">
        <div className="relatedProductTitle">محصولات مرتبط</div>
      </Row>

      <Card className="cardrelatedProduc"></Card>
      <Card className="cardTabProduct">
        <div className="tab">
          <button
            className="tablinks active"
            onClick={openTabProduct('description')}
          >
            مشخصات
          </button>
          <button className="tablinks" onClick={openTabProduct('review')}>
            نقد و بررسی
          </button>
          <button className="tablinks" onClick={openTabProduct('question')}>
            سوالات / نظرات
          </button>
          <button className="tablinks" onClick={openTabProduct('file')}>
            فایل های ضمیمه
          </button>
        </div>

        <div
          id="description"
          className="tabcontent"
          style={{ display: 'block' }}
        >
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>

        <div id="review" className="tabcontent">
          <h3>چیتا چیپ</h3>
          <p>نقد و بررسی</p>
        </div>

        <div id="question" className="tabcontent">
          <h3>چیتا چیپ</h3>
          <p> سوالات / نظرات</p>
        </div>
        <div id="file" className="tabcontent">
          <h3>چیتا چیپ</h3>
          <p> فایل های ضمیمه</p>
        </div>
      </Card>
      {isModalVisible && (
        <Modal
          title="ورود به سامانه"
          visible={isModalVisible}
          onOk={handleOk}
          okText="ورود به سامانه"
          cancelText="انصراف"
          onCancel={handleCancel}
        >
          <p>
            برای افزودن این محصول به مورد علاقه ها لطفا ابتدا وارد سامانه شوید
          </p>
        </Modal>
      )}
    </StyledProduct>
  );
});
