/**
 *
 * Comments
 *
 */
import React, { useState } from 'react';

import { StyledComments } from './styles';

import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { appActions } from 'app/containers/App/slice';
import { selectAddComment } from 'app/containers/App/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { CommentData } from 'app/containers/App/types';

interface Props {
  className?: string;
  productId: string;
  commentObj: CommentData;
}

export function Comments({ className, productId, commentObj }: Props) {
  const { t } = useTranslation();

  return (
    <StyledComments className={`Comments ${className || ''}`}>
      <div className="comment-box">
        <div className="img-wrapper">
          <img src="https://picsum.photos/80" alt="" />
          <span>{commentObj.user_name}</span>
        </div>

        <div className="text-container">
          <p>{commentObj.text}</p>
        </div>
      </div>
    </StyledComments>
  );
}
