/**
 *
 * UserInfo
 *
 */
import React, { memo, useCallback, useMemo, useState } from 'react';

import { StyledUserInfo } from './styles';
import { Descriptions, Col, Row, Button, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { appActions } from 'app/containers/App/slice';
import { selectUserInfo } from 'app/containers/App/selectors';
import { UserData } from 'app/containers/App/types';
import { EditUserInfoModal } from 'app/containers/UserProfilePage/components/EditUserInfoModal';

interface Props {
  className?: string;
}

export const UserInfo = memo(({ className }: Props) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [itemForEdit, setItemForEdit] = useState<UserData | undefined>();

  const userData = useSelector(selectUserInfo);

  const loading = useMemo(() => !!userData.params, [userData.params]);

  const handleShowEditModal = useCallback(
    (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      const data = event.currentTarget.dataset as any;
      setItemForEdit({
        first_name: data.first_name,
        last_name: data.last_name,
        mobile: data.mobile,
        national_code: data.national_code,
      });
    },
    [setItemForEdit],
  );

  const handleCloseEditModal = useCallback(() => {
    setItemForEdit(undefined);
  }, [setItemForEdit]);

  useEffect(() => {
    dispatch(appActions.userInfo({}));
  }, [dispatch]);

  return (
    <StyledUserInfo className={`UserInfo ${className || ''}`}>
      {loading ? (
        <Spin size="large" style={{ margin: 'auto' }} />
      ) : (
        userData &&
        userData.data && (
          <>
            <Row gutter={[8, 8]} className="profileInfoTitle">
              <Col span={10}>نام:</Col>
              <Col span={10}>{userData.data.user.first_name}</Col>
              <Col span={4}></Col>
            </Row>
            <Row gutter={[8, 8]} className="profileInfoTitle">
              <Col span={10}>نام خانوادگی:</Col>
              <Col span={10}>{userData.data.user.last_name}</Col>
              <Col span={4}></Col>
            </Row>
            <Row gutter={[8, 8]} className="profileInfoTitle">
              <Col span={10}>ایمیل:</Col>
              <Col span={10}>{userData.data.user.national_code}</Col>
              <Col span={4}></Col>
            </Row>
            <Row gutter={[8, 8]} className="profileInfoTitle">
              <Col span={10}>شماره همراه:</Col>
              <Col span={10}>{userData.data.user.mobile}</Col>
              <Col span={4}></Col>
            </Row>

            <Row gutter={[8, 8]} className="btnEditRow">
              <Button
                className="btnEdit"
                data-first_name={userData.data.user.first_name}
                data-last_name={userData.data.user.last_name}
                data-mobile={userData.data.user.mobile}
                data-national_code={userData.data.user.national_code}
                onClick={handleShowEditModal}
              >
                {' '}
                ویرایش
              </Button>
            </Row>
          </>
        )
      )}

      {itemForEdit && (
        <EditUserInfoModal user={itemForEdit} onClose={handleCloseEditModal} />
      )}
    </StyledUserInfo>
  );
});
