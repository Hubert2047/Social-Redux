import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import GlobalStyles from './components/GlobalStyle/GlobalStyles'
import store from './components/Store'
import './index.scss'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <App />
            </Provider>
        </GlobalStyles>
    </React.StrictMode>
)
