import Color from 'color';

export const darken = (color: string, ratio: number = 0.1) =>
  Color(color).darken(ratio).toString();

export const lighten = (color: string, ratio: number = 0.1) =>
  Color(color).lighten(ratio).toString();

export const opacity = (color: string, ratio: number = 0.1) =>
  Color(color).alpha(ratio).toString();
