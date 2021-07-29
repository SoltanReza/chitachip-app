/**
 *
 * Comments
 *
 */
import React from 'react';

import { StyledComments } from './styles';

import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export function Comments({ className }: Props) {
  const { t } = useTranslation();

  return (
    <StyledComments className={`Comments ${className || ''}`}>
      <div className="comment-box">
        <div className="img-wrapper">
          <img src="https://picsum.photos/80" alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quae,
          mollitia exercitationem, nulla sequi ad, officiis consectetur quisquam
          cum similique eius? Assumenda quaerat tempora impedit rerum ad aliquid
          delectus vitae.
        </p>
      </div>
    </StyledComments>
  );
}
