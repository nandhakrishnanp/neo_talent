import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from "../store/store.js"
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
       <React.StrictMode>
      <BrowserRouter>
      <PersistGate persistor={persistor}>

        <App />
      </PersistGate>
      </BrowserRouter>
      </React.StrictMode>
    </Provider>
)
