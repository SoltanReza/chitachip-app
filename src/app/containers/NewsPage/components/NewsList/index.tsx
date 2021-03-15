/**
 *
 * NewsList
 *
 */
import { EditOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Table } from 'antd';
import { News } from 'app/containers/App/types';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectBrowseNews } from '../../selectors';
import { actions } from '../../slice';
import { AddNewsModal } from '../AddNewsModal';
import { EditNewsModal } from '../EditNewsModal';
import { UploadImageModal } from '../UploadImageModal';
import { StyledNewsList } from './styles';

interface Props {
  className?: string;
}

export const NewsList = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [itemForEdit, setItemForEdit] = useState<News | undefined>();
  const [itemForUploadImage, setItemForUploadImage] = useState<
    any | undefined
  >();
  const browseNewData = useSelector(selectBrowseNews);
  const loading = useMemo(() => !!browseNewData.params, [browseNewData.params]);

  const handleShowEditModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setItemForEdit({
        slug: data.slug,
        title: data.title,
        body: data.body,
        status: data.status,
      });
    },
    [setItemForEdit],
  );
  const handleShowUploadImageModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setItemForUploadImage({
        slug: data.slug,
      });
    },
    [setItemForUploadImage],
  );
  const handleCloseEditModal = useCallback(() => {
    setItemForEdit(undefined);
  }, [setItemForEdit]);
  const handleCloseUploadImageModal = useCallback(() => {
    setItemForUploadImage(undefined);
  }, [setItemForUploadImage]);

  useEffect(() => {
    dispatch(actions.browseNews({}));
  }, [dispatch]);

  return (
    <StyledNewsList className={`NewsList ${className || ''}`}>
      <Card>
        <AddNewsModal />

        <Table
          dataSource={browseNewData.data?.data}
          loading={loading}
          pagination={{ position: ['bottomRight'], pageSize: 10 }}
          scroll={{ x: 400 }}
        >
          <Table.Column
            title={t(translations.pages.NewsPage.list.title)}
            render={item => item.title}
          />
          <Table.Column
            title={t(translations.pages.NewsPage.list.status.title)}
            render={item =>
              t(translations.pages.NewsPage.list.status[item.status])
            }
          />
          <Table.Column
            title={t(translations.pages.NewsPage.list.operations)}
            render={item => (
              <div className="tableOperations">
                <Button
                  icon={<EditOutlined />}
                  size="small"
                  type="link"
                  data-slug={item.slug}
                  data-title={item.title}
                  data-body={item.body}
                  data-status={item.status}
                  onClick={handleShowEditModal}
                />
                <Button
                  icon={<UploadOutlined />}
                  size="small"
                  type="link"
                  data-slug={item.slug}
                  onClick={handleShowUploadImageModal}
                />
              </div>
            )}
          />
        </Table>
      </Card>

      {itemForEdit && (
        <EditNewsModal news={itemForEdit} onClose={handleCloseEditModal} />
      )}

      {itemForUploadImage && (
        <UploadImageModal
          pic={itemForUploadImage}
          onClose={handleCloseUploadImageModal}
        />
      )}
    </StyledNewsList>
  );
});
