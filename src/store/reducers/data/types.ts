import { DeliveryData } from '../../../interfaces/DeliveryData';
export const SET_DATA = 'SET_DATA';

interface SetDataAction {
  readonly type: typeof SET_DATA;
  readonly payload: DeliveryData[];
}

export type DataActionType = SetDataAction;
