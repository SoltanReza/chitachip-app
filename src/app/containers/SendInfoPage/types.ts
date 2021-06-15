/* --- STATE --- */
export interface SendInfoPageState {}

export type ContainerState = SendInfoPageState;

// #region SendDate
export interface SendDateRequest {}
export interface SendDateResponse {
  date: Array<{ date: string; id: string; is_active: boolean; time: string }>;
  shipment: Array<{
    id: string;
    price: string;
    title: string;
  }>;
}
// #endregion SendDate
