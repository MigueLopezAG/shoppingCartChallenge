// @flow
// import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from './rootReducer';
import thunk from "redux-thunk";
import  { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
    key: 'root',
    storage: storage
};


const pReducer = persistReducer(persistConfig, reducers);
export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)));
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persist = persistStore(store);