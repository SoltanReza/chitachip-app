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
  selectAddComment,
  selectAddToBasket,
  selectAuth,
  selectLikeProduct,
  selectProductFile,
  selectProductRate,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import {
  CommentData,
  ProductData,
  ProductGallery,
} from 'app/containers/App/types';
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
import StarRatingComponent from 'react-star-rating-component';

interface Props {
  className?: string;
  data: ProductData;
  similar: Array<ProductData>;
  gallery: Array<ProductGallery>;
  comments: Array<CommentData>;
}

// const { Title, Paragraph, Text, Link } = Typography;

export const Product = memo(
  ({ className, data, similar, gallery, comments }: Props) => {
    // const { t } = useTranslation();
    // const galleryImages

    type MainPic = string;

    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [galleryArr, setgalleryArr] = useState([data, ...gallery]);

    const [mainPic, setMainPic] = useState<MainPic>(data.image);
    const [text, setText] = useState('');
    const [rating, setRating] = useState(data.avg_stars);
    const authData = useSelector(selectAuth);
    const likeData = useSelector(selectLikeProduct);
    const addToBasketData = useSelector(selectAddToBasket);
    const files = useSelector(selectProductFile);

    const picObj = galleryArr.filter(i => i.image === mainPic);
    const picIndex = galleryArr.indexOf(picObj[0]);
    // const rate = useSelector(selectProductRate);
    useEffect(() => {
      dispatch(appActions.getProductFiles({ product_id: data.id }));
    }, [dispatch, data.id]);

    useEffect(() => {
      dispatch(
        appActions.addProductRate({
          product_id: data.id,
          rate: String(rating),
        }),
      );
    }, [dispatch, rating, data.id]);

    const handlePriviousImage = () => {
      if (picIndex === 0) {
        //pass
      } else {
        setMainPic(galleryArr[picIndex - 1].image);
      }
    };

    const handleNextImage = () => {
      if (picIndex + 1 === galleryArr.length) {
        //pass
      } else {
        setMainPic(galleryArr[picIndex + 1].image);
      }
    };
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

    useEffect(() => {
      if (addToBasketData.data?.status === 200) {
        message.success('?????????? ???? ???????????? ???? ?????? ???????? ?????????? ????');
      }
    }, [addToBasketData.data]);

    const changeMainPic = item => {
      setMainPic(item.image);

      // if (mainPic === data.image) {
      //   let obj: ProductGallery = {
      //     title: 'main',
      //     image: data.image,
      //     id: galleryArr.length + 1,
      //   };

      //   let arr = galleryArr;
      //   arr.push(obj);
      //   setgalleryArr(arr);
      // }
    };

    const handleAddComment = () => {
      dispatch(appActions.addComment({ product_id: data.id, text: text }));
    };

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
            <Breadcrumb.Item>????????</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="#">??????????????</a>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="productTitle">
            <h1>{data.title}</h1>
          </div>
          <Row gutter={[16, { xs: 8, sm: 16, md: 48, lg: 48 }]}>
            <Col xs={24} sm={24} md={7} lg={8} xl={8}>
              <Row className="pictureWrapper">
                {gallery.length !== 0 && (
                  <Col
                    className="gallery-container"
                    xs={24}
                    sm={24}
                    md={5}
                    lg={5}
                    xl={5}
                  >
                    {galleryArr.map(i => {
                      return (
                        <img
                          src={i.image}
                          alt={i.title}
                          className="gallery-item"
                          onClick={() => changeMainPic(i)}
                        />
                      );
                    })}
                    <div className="icons">
                      <RightOutlined onClick={handleNextImage} />
                      {` ${galleryArr.length} / ${picIndex + 1} `}
                      <LeftOutlined onClick={handlePriviousImage} />
                    </div>
                  </Col>
                )}
                <Col
                  xs={24}
                  sm={24}
                  md={19}
                  lg={19}
                  xl={19}
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={mainPic} alt={data.title} className="imgProduct" />
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
                  <div className="productInfoTitle">?????????? ?????? ??????????</div>
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
                      <li>?????????????? ?????? ???????? ????????</li>
                      <li>?????????? ?????????? ????????!</li>
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
                    <p className="showPrice">{data.price} ??????????</p>
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
                      ?????????? ???? ?????? ????????
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                      <Button
                        icon={
                          likeData.data && likeData.data.status === 201 ? (
                            <HeartOutlined
                              data-id={data.id}
                              onClick={handleVoteLike}
                            />
                          ) : (
                            <HeartFilled
                              data-id={data.id}
                              onClick={handleVoteLike}
                            />
                          )
                        }
                        block
                        className="addToFavorite"
                        data-id={data.id}
                        onClick={handleVoteLike}
                      >
                        ?????????? ???? ???????? ?????????? ????
                      </Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Button icon={<ShareAltOutlined />} block className="Share">
                      ???????????? ??????????
                    </Button>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={24}
                    lg={24}
                    xl={24}
                    className="star-rating"
                  >
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={rating}
                      onStarClick={e => setRating(e)}
                    />
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
                    <WarningOutlined color="red" /> ??????????
                  </h3>
                  <p>{data.state_text}</p>
                </>
              ) : null}
              {/* <div dangerouslySetInnerHTML={{ __html: data.description }}></div> */}
            </Col>
          </Row>
        </Card>

        <Row className="relatedProduct">
          <div className="relatedProductTitle">?????????????? ??????????</div>
        </Row>

        <Card className="cardrelatedProduc">
          <Swiper
            navigation={true}
            spaceBetween={20}
            slidesPerView={onlyWidth > 960 ? 4 : 1}
          >
            {similar.map(item => (
              <SwiperSlide style={{ margin: '30px' }}>
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
              ????????????
            </button>
            <button className="tablinks" onClick={openTabProduct('review')}>
              ?????? ?? ??????????
            </button>
            <button className="tablinks" onClick={openTabProduct('question')}>
              ???????????? / ??????????
            </button>
            <button className="tablinks" onClick={openTabProduct('file')}>
              ???????? ?????? ??????????
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
            <h3>???????? ??????</h3>
            <p>?????? ?? ??????????</p>
          </div>

          <div id="question" className="tabcontent">
            {comments &&
              comments.map(i => {
                return <Comments commentObj={i} productId={data.id} />;
              })}

            <div className="new-comment-container">
              <textarea
                placeholder="?????? ?????? ???? ?????????? ??????????????"
                name=""
                id=""
                cols={30}
                rows={10}
                value={text}
                onChange={e => setText(e.target.value)}
              ></textarea>
              <button onClick={handleAddComment}>??????</button>
            </div>
          </div>
          <div id="file" className="tabcontent">
            <Files files={files.data?.response} />
          </div>
        </Card>

        {isModalVisible && (
          <Modal
            title="???????? ???? ????????????"
            visible={isModalVisible}
            onOk={handleOk}
            okText="???????? ???? ????????????"
            cancelText="????????????"
            onCancel={handleCancel}
          >
            <p>
              ???????? ???????????? ?????? ?????????? ???? ???????? ?????????? ???? ???????? ?????????? ???????? ???????????? ????????
            </p>
          </Modal>
        )}
      </StyledProduct>
    );
  },
);
