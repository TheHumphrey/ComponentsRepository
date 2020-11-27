import { createStore, Store } from 'redux';

import rootReducer from './reducers/rootReducer';

import { DeliveryData } from '../interfaces/DeliveryData';

export type ApplicationState = {
  data: DeliveryData[];
  loading: boolean;
};

const store: Store<ApplicationState> = createStore(rootReducer);
export default store;
