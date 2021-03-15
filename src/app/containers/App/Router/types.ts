import { AuthRoles, AuthLevel } from 'types';

export interface RouteConfig {
  path: string;
  exact: boolean;
  component: any;
  auth: {
    check: AuthLevel;
    roles?: AuthRoles[];
  };
}
