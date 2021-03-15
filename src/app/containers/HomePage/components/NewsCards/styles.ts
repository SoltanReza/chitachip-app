import { Card } from 'antd';
import styled from 'styled-components/macro';
import { opacity } from 'styles';
import {theme} from 'styles/theme';
import { media } from 'styles/media';

export const StyledNewsCards = styled.div`
  .rowNews {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0.8em 0 !important;
    text-align: right;

    .col {
      flex: 1;
    }

    ${media.medium`
     flex-direction: column;
  `}
  }
  .divider {
    border: 1px solid ${theme.PRIMERY_COLOR};
    border-radius: 6em;
    margin-top: 3em;
    margin-bottom: 1.5em;
    color: ${theme.TEXT_COLOR_INVERT};
    font-size: 2em;
    background: ${theme.DIVIDER_BACKGROUND};
  }
`;

export const StyledCard = styled(Card)`
  max-width: 15em;
  margin: auto;
  box-shadow: 0 0 3px 1px ${theme.SHADOW_COLOR};
  font-size: 1.2em;

  .ant-card-cover {
    .LazyImg {
      &,
      img {
        height: 9em;
      }
    }
  }

  .ant-card-body {
    padding: 0.5em 0.8em;

    .title {
      position: absolute;
      top: 0;
      font-weight: 600;
      background: linear-gradient(
        -90deg,
        ${opacity(theme.TEXT_COLOR_INVERT, 0.4)},
        transparent
      );
      width: 100%;
      left: 0;
      right: 0;
    }

    .body {
      text-align: justify;
      text-justify: inter-word;
      word-break: break-word;
      height: 5em;
      margin: 0;
    }

    .bodyAll {
      display: none;
    }
  }

  ${media.medium`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1em;
    max-width: 100%;

    .ant-card-body,.ant-card-cover {
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
      display:none;
    }

    .bodyAll{display: initial;}

    }

  .ant-card-cover {
    width: 50%;

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
  `}
`;
