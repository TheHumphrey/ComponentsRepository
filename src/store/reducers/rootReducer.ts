import { combineReducers } from 'redux';

import data from './data/reducer';
import loading from './loading/reducer';

const rootReducer = combineReducers({ data: data, loading: loading });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
