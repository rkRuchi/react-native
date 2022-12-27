import { createStore } from 'redux';
import rootReducer from './reducers/counter';
export const store = createStore(rootReducer);