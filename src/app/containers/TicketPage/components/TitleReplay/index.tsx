/**
 *
 * TitleReplay
 *
 */
import React, { memo } from 'react';

import { StyledTitleReplay } from './styles';

import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';

interface Props {
  className?: string;
  isMine: boolean;
  amIAdmin: boolean;
  userId?: number;
  item;
}

export const TitleReplay = memo(
  ({ className, isMine, amIAdmin, userId, item }: Props) => {
    const { t } = useTranslation();

    return (
      <StyledTitleReplay className={`TitleReplay ${className || ''}`}>
        {/* {isMine && amIAdmin
          ? item.creator_id === userId
            ? `${t(translations.pages.TicketPage.replayTitleAdmin)}  ${
                item.body
              }`
            : `${t(translations.pages.TicketPage.replayTitleUser)}  ${
                item.body
              }`
          : item.creator_id === userId
          ? `${t(translations.pages.TicketPage.replayTitleUser)} ${item.body}`
          : `${t(translations.pages.TicketPage.replayTitleAdmin)} ${item.body}`} */}

        {isMine && amIAdmin
          ? item.creator_id === userId
            ? `${t(translations.pages.TicketPage.replayTitleAdmin)}  ${
                item.body
              }`
            : `${t(translations.pages.TicketPage.replayTitleUser)}  ${
                item.body
              }`
          : item.creator_id === userId
          ? `${t(translations.pages.TicketPage.replayTitleAdmin)}  ${item.body}`
          : `${t(translations.pages.TicketPage.replayTitleUser)}  ${item.body}`}
      </StyledTitleReplay>
    );
  },
);
