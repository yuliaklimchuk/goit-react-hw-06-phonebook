import { configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./reducer";
import { persistStore, persistReducer, FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}

const store =  configureStore({
    reducer: {
        contacts:persistReducer(persistConfig, contactsReducer),
    },
    middleware: (getDefaultMiddleware) => {
        const ignoreActionsReduxToolKit = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
        return ignoreActionsReduxToolKit;
    }
});
const persistor = persistStore(store);

export const persistedStore = {
    store,
    persistor,
}