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
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Row,
  Typography,
  message,
  Modal,
} from 'antd';
import { Routes } from 'app/containers/App/Router/routes';
import {
  selectAddToBasket,
  selectAuth,
  selectLikeProduct,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { ProductData, ProductGallery } from 'app/containers/App/types';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'utils/history';
import { ProductCard } from '../ProductCard';
import { Comments } from './components/Comments';
import { Files } from './components/Files';
import { StyledProduct } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useWindowWidth } from '@react-hook/window-size';

interface Props {
  className?: string;
  data: ProductData;
  similar: Array<ProductData>;
  gallery: Array<ProductGallery>;
}

const { Title, Paragraph, Text, Link } = Typography;

export const Product = memo(({ className, data, similar, gallery }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const authData = useSelector(selectAuth);
  const likeData = useSelector(selectLikeProduct);
  const addToBasketData = useSelector(selectAddToBasket);

  const onlyWidth = useWindowWidth();

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
  useEffect(() => {
    if (addToBasketData.data?.status === 200) {
      message.success('محصول با موفقیت به سبد خرید اضافه شد');
    }
  }, [addToBasketData.data]);

  console.log(data);
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
            <Row>
              <Col
                className="gallery-container"
                xs={24}
                sm={24}
                md={3}
                lg={3}
                xl={3}
                // style={{ justifyContent: 'flex-end' }}
              >
                <LeftOutlined />
                <RightOutlined />
              </Col>
              <Col xs={24} sm={24} md={21} lg={21} xl={21}>
                <img src={data.image} alt={data.title} className="imgProduct" />
              </Col>
            </Row>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={11}
            lg={12}
            xl={12}
            className="productInfoCard"
          >
            {data.properties && (
              <>
                <div className="productInfoTitle">ویژگی های محصول</div>
                <Card className="productInfo">
                  <div
                    className="properties"
                    dangerouslySetInnerHTML={{ __html: data.properties }}
                  ></div>
                </Card>
              </>
            )}
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
                    {data.discount !== 0 && (
                      <div className="discount"> {data.discount}</div>
                    )}
                  </div>
                  <p className="showPrice">{data.price} تومان</p>
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
            {data.state && data.state === 'warning' ? (
              <>
                <h3 className="alertText">
                  <WarningOutlined color="red" /> هشدار
                </h3>
                <p>{data.state_text}</p>
              </>
            ) : null}
            {/* <div dangerouslySetInnerHTML={{ __html: data.description }}></div> */}
          </Col>
        </Row>
      </Card>

      <Row className="relatedProduct">
        <div className="relatedProductTitle">محصولات مرتبط</div>
      </Row>

      <Card className="cardrelatedProduc">
        <Swiper
          navigation={true}
          spaceBetween={20}
          slidesPerView={onlyWidth > 960 ? 4 : 1}
          style={{ padding: '1em' }}
        >
          {similar.map(item => (
            <SwiperSlide>
              <ProductCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
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
          <Comments />
        </div>
        <div id="file" className="tabcontent">
          <Files />
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
