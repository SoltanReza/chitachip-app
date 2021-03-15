import { Routes, routeWithParam } from 'app/containers/App/Router/routes';
import { createBrowserHistory, LocationState, History } from 'history';
const baseHistory = createBrowserHistory();

interface HistoryWithRedirect extends History {
  redirect: (
    path: Routes,
    params?: { [key: string]: any },
    state?: LocationState,
  ) => void;
}

export interface RouteParams {
  [key: string]: any;
}

export function redirect(
  path: Routes,
  params?: RouteParams,
  state?: LocationState,
) {
  baseHistory.push(routeWithParam(path, params), state);
}

export const history: HistoryWithRedirect = { ...baseHistory, redirect };

// FIXME remove this line
(window as any).hist = history;
