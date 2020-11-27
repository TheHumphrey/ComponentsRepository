export const SET_STATUS = 'SET_STATUS';

interface SetLoadingAction {
  readonly type: typeof SET_STATUS;
  readonly payload: boolean;
}

export type LoadingActionType = SetLoadingAction;
