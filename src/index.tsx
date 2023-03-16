import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'app/store'
import { App } from 'app'

const $root = document.getElementById('root') as HTMLElement
const root = createRoot($root)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
