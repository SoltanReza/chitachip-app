export enum Routes {
  login = '/login',
  register = '/register',
  logout = '/logout',

  home = '/',
  trading = '/trading',
  contactUs = '/contactus',
  faq = '/faq',
  finalForm = '/finalform',

  productDetails = '/product/:id',

  dashboard = '/dashboard',
  profile = '/dashboard/profile',
  currency = '/dashboard/currency',
  userManagement = '/dashboard/users',
  tradeInfo = '/dashboard/tradeinfo',
  financialInfo = '/dashboard/financialinfo',
  recharge = '/dashboard/recharge',
  transaction = '/dashboard/transaction',
  news = '/dashboard/news',
  adminMessage = '/dashboard/Adminmessage',
  package = '/dashboard/package',
  ticket = '/dashboard/ticket',
}

export interface RouteParams {
  [key: string]: string | number;
}

export function routeWithParam(routeName: Routes, params?: RouteParams) {
  let routeString = routeName as string;

  if (params) {
    Object.keys(params).forEach(key => {
      routeString = routeString.replace(`:${key}`, params[key] as string);
    });
  }

  return routeString;
}
