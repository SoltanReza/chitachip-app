/**
 *
 * StoryProduct
 *
 */
import React, { memo, useCallback, useState } from 'react';

import { StyledStoryProduct } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { Stories } from 'app/containers/App/types';
import SwiperCore, {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/core';
import { Modal } from 'antd';
import { useWindowWidth } from '@react-hook/window-size';

interface Props {
  className?: string;
  stories: Array<Stories>;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export const StoryProduct = memo(({ className, stories }: Props) => {
  const { t } = useTranslation();
  // Get the modal

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [imgTitle, setImgTitle] = useState('');
  const onlyWidth = useWindowWidth();

  const showModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setImgSrc(data.src);
      setImgTitle(data.title);
      setIsModalVisible(true);
    },
    [],
  );

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <StyledStoryProduct className={`StoryProduct ${className || ''}`}>
      <Swiper
        slidesPerView={onlyWidth > 960 ? 10 : 3}
        spaceBetween={10}
        className="mySwiper"
        navigation={true}
      >
        {stories.map(story => (
          <SwiperSlide>
            <div className="divStory">
              <img
                src={story.image}
                className="imgStory"
                alt={story.name}
                data-src={story.image}
                data-title={story.name}
                onClick={showModal}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="img01" />

        <div id="caption"></div>
      </div>
      <Modal
        footer={null}
        title={imgTitle}
        destroyOnClose={true}
        // maskClosable={false}
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <img
          src={imgSrc}
          style={{
            display: 'inline-block',
            width: '100%',
            height: '100%',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
          }}
          className="openImgStory"
        />
      </Modal>
    </StyledStoryProduct>
  );
});
