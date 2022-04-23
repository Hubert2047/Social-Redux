import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.scss'
import GlobalStyles from "./components/GlobalStyle/GlobalStyles";
import ContextProvider from './components/Context/ContextProvider';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
        <GlobalStyles>
              <ContextProvider>
                  <App />
              </ContextProvider>
        </GlobalStyles>
  </React.StrictMode>,
);
