import { LoadingActionType } from './types';

export const setLoading = (isLoading: boolean): LoadingActionType => {
  return {
    type: 'SET_STATUS',
    payload: isLoading,
  };
};
