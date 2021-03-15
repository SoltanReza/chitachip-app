import { Card } from 'antd';
import styled from 'styled-components/macro';
import { media, sizes } from 'styles/media';
import {theme} from 'styles/theme';

export const StyledAllNewsDashboard = styled.section`
  .rowNews {
    width: 80%;
    margin: auto;
    margin-bottom: 1.5em;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  margin: auto;
  box-shadow: 0 0 3px 1px ${theme.SHADOW_COLOR};
  font-size: 0.9em;

  @media (min-width: ${sizes.medium}px) {
    font-size: 1.2em;
  }

  .ant-card-cover {
    .LazyImg {
      &,
      img {
      }
    }
  }

  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
  max-width: 100%;

  .ant-card-body,
  .ant-card-cover {
    flex: 1;
  }

  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.5em 0.8em;
    height: 100%;

    .title {
      position: initial;
    }
    .body {
      display: none;
    }

    .bodyAll {
      display: initial;
    }
  }

  .ant-card-meta-description {
    text-align: justify !important;
    text-justify: inter-word !important;
  }

  .ant-card-cover {
    max-width: 22%;

    .LazyImg {
      &,
      img {
        /* min-height: 100%; */
        max-height: 100%;
        min-width: 100%;
        max-width: 100%;
        border-radius: 0;
      }
    }
  }

  .read-more-link {
    color: blueviolet;
    text-decoration: underline;
    letter-spacing: 1px;
    cursor: pointer;
  }
  .extra-content {
    color: cornflowerblue;
    font-weight: 500;
  }

  ${media.small`
  .ant-card-cover {
    display: none;
  }
   `}
`;
