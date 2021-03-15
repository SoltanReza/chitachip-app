/**
 *
 * AllNewsDashboard
 *
 */
import { Row } from 'antd';
import { LazyImg } from 'app/components/LazyImg';
import { selectAuth } from 'app/containers/App/selectors';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowMoreText from 'react-show-more-text';
import { selectBrowseNews } from '../../selectors';
import { actions } from '../../slice';
import { StyledAllNewsDashboard, StyledCard } from './styles';

interface Props {
  className?: string;
}

export const AllNewsDashboard = memo(({ className }: Props) => {
  const dispatch = useDispatch();

  const browseNewsData = useSelector(selectBrowseNews);

  useEffect(() => {
    dispatch(actions.browseNews({}));
  }, [dispatch]);

  return (
    <StyledAllNewsDashboard className={`AllNewsDashboard ${className || ''}`}>
      {browseNewsData.data?.data.map(item => (
        <Row className="rowNews">
          <StyledCard
            hoverable
            key={item.slug}
            cover={
              item.banner ? (
                <LazyImg src={item.banner} alt={item.title} />
              ) : null
            }
          >
            <h3 className={`title ${item.banner ? 'block' : ''}`}>
              {item.title}
            </h3>
            <StyledCard.Meta
              description={
                <ShowMoreText
                  lines={3}
                  more="بیشتر"
                  less="کمتر"
                  anchorClass=""
                  expanded={false}
                  width={0}
                >
                  <p className="bodyAll">{item.body}</p>
                </ShowMoreText>
              }
            />
          </StyledCard>
        </Row>
      ))}
    </StyledAllNewsDashboard>
  );
});
