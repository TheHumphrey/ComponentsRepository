import { DeliveryData } from '../../../interfaces/DeliveryData';
import { DataActionType } from './types';

const INITIAL_STATE: DeliveryData[] = [];

const data = (state: DeliveryData[] = INITIAL_STATE, action: DataActionType): DeliveryData[] => {
  switch (action.type) {
    case 'SET_DATA':
      return (state = action.payload);
      break;
    default:
      return state;
  }
};

export default data;
