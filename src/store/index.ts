import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from 'store/slices';

const persistedReducer = persistReducer(
    {
        key: `star-wars-app-persists-store`,
        version: 1,
        whitelist: ['peopleReducer'],
        storage: AsyncStorage,
    },
    rootReducer,
);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewareChain = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
        return middlewareChain;
    },
});
export const persistor = persistStore(store);
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
