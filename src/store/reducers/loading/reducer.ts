import { LoadingActionType } from './types';

const loading = (state = true, action: LoadingActionType): boolean => {
  switch (action.type) {
    case 'SET_STATUS':
      return action.payload;
    default:
      return state;
  }
};

export default loading;
