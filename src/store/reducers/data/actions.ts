import { DeliveryData } from '../../../interfaces/DeliveryData';
import { DataActionType } from './types';

export const setData = (data: DeliveryData[]): DataActionType => {
  return {
    type: 'SET_DATA',
    payload: data,
  };
};
