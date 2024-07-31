import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { appStore, storePersistor } from './store/store';
import App from './app/App';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
    <Provider store={appStore}>
        <PersistGate loading={null} persistor={storePersistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
</React.StrictMode>
);
