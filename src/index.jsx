import React from 'react'
// import { createRoot } from 'react-dom'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import GlobalStyles from './components/GlobalStyle/GlobalStyles'
import store from './components/Store'
import './index.scss'

let persistor = persistStore(store)
const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
            {/* //store redux */}
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
    rootElement
)
