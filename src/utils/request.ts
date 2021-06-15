import { Routes } from 'app/containers/App/Router/routes';
import axios, { AxiosError } from 'axios';
import { AuthData, ErrorResponse } from 'types';
import { redirect } from './history';
import { Storage } from './storage';

// #region fakeApi
export function fakeApi(
  data: any = null,
  timeout: number = 2000,
): Promise<any> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      }

      reject({ code: 0, message: 'This is a fake error response' });
    }, Math.random() * timeout);
  });
}

// #endregion fakeApi

// region axios instance
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const BACKEND_TIMEOUT = process.env.REACT_APP_BACKEND_TIMEOUT
  ? +process.env.REACT_APP_BACKEND_TIMEOUT
  : 10000;

export const http = axios.create({
  baseURL: BACKEND_URL,
  timeout: BACKEND_TIMEOUT,
});

http.interceptors.request.use(function (config) {
  const authData: AuthData = Storage.read('auth');

  if (authData && authData.access) {
    config.headers.Authorization = `Bearer ${authData.access}`;
  }

  return config;
});

http.interceptors.response.use(undefined, function (error: AxiosError) {
  let response: ErrorResponse;

  if (error.response) {
    console.log(error.response.data);
    let message: string;
    if (error.response.status === 422) {
      message = 'داده های ارسالی معتبر نیست';
      message +=
        '\n\n' +
        Object.values(error.response.data.messages)
          .map((err: any) => err[0] as string)
          .join('\n');
    } else if (error.response.status === 401) {
      Storage.remove('auth');
      redirect(Routes.login);
      message = 'برای انجام این عملیات لطفا وارد سامانه شوید';
      message +=
        '\n\n' +
        Object.values(error.response.data.messages)
          .map((err: any) => err[0] as string)
          .join('\n');
    } else {
      message =
        error.response.data.message ||
        error.response.statusText ||
        'خطای سمت سرور';
    }
    response = {
      code: error.response.status,
      message,
    };
  } else {
    response = { code: 0, message: 'خطای شبکه' };
  }
  console.dir(error);
  (window as any).err = error;

  return Promise.reject(response);
});
// endregion axios instance
