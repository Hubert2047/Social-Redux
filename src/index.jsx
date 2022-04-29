import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import GlobalStyles from './components/GlobalStyle/GlobalStyles'
import Loading from './components/Loading/Loading'
import store from './components/Store'
import './index.scss'

let persistor = persistStore(store)
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </GlobalStyles>
    </React.StrictMode>
)
