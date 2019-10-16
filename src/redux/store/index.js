import { createStore, applyMiddleware, compose } from 'redux';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, undefined, compose(middleware, autoRehydrate()));
persistStore(store, { storage: AsyncStorage });

export default store;