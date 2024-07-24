import RootNavigator from 'navigation';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store, {persistor, AppState} from './store';

export const getRootState = (): AppState => store.getState();

const App = (): React.JSX.Element => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <RootNavigator />
            </PersistGate>
        </Provider>
    );
};

export default App;
