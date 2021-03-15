import { selectAuth } from 'app/containers/App/selectors';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route as BaseRoute } from 'react-router-dom';
import { AuthLevel } from 'types';
import { Routes } from './routes';
import { RouteConfig } from './types';

function Route({ auth, ...props }: RouteConfig) {
  const authData = useSelector(selectAuth);
  const result = useMemo(() => {
    // if (auth.check !== AuthLevel.ALL) {
    //   if (
    //     auth.check === AuthLevel.UNAUTHENTICATED &&
    //     authData.isAuthenticated()
    //   ) {
    //     return <Redirect to={Routes.login} />;
    //   }

    //   if (auth.check === AuthLevel.AUTHENTICATED) {
    //     // FIXME yadam biad
    //     // if (
    //     //   props.path !== Routes.profile &&
    //     //   !authData.profileIsCompleted() &&
    //     //   authData.hasRole([AuthRoles.REGULAR])
    //     // ) {
    //     //   return <Redirect to={Routes.profile} />;
    //     // }

    //     if (auth.roles && !authData.hasRole(auth.roles)) {
    //       return <Redirect to={Routes.login} />;
    //     }
    //   }
    // }

    // if (auth.check === AuthLevel.ALL && !authData.isAuthenticated()) {
    //   return <Redirect to={Routes.login} />;
    // }

    return <BaseRoute {...props} />;
  }, [auth, authData, props]);

  return result;
}

export default Route;
