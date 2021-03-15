/**
 *
 * RechargeResult
 *
 */
import { Routes } from 'app/containers/App/Router/routes';
import {
  selectAuthData,
  selectGetMyProfile,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { translations } from 'locales/i18n';
import { memo, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

interface Props {
  className?: string;
}

export const RechargeResult = memo(({ className }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const authData = useSelector(selectAuthData);
  const getaProfileData = useSelector(selectGetMyProfile);
  const params = useMemo(() => new URLSearchParams(window.location.search), []);

  useEffect(() => {
    if (params.has('id')) {
      if (params.get('success') === '0') {
        dispatch(
          appActions.notifyError(
            params.get('error') || translations.pages.RechargePage.errorMessage,
          ),
        );
      } else {
        dispatch(
          appActions.notifySuccess(
            translations.pages.RechargePage.successMessage,
          ),
        );
        if (authData) {
          dispatch(appActions.getMyProfile({ token: authData?.token }));
        }
        if (getaProfileData) {
          history.push(Routes.transaction);
        }
      }
    }
  }, [params, dispatch, authData, getaProfileData, history]);

  return null;
});
