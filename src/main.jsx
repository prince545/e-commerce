// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Provider } from 'react-redux'
// import App from './App.jsx'
// import { store } from './redux/store.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
    
//   </StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './redux/store'
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
