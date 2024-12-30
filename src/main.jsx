import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//react redux
import { Provider } from 'react-redux'
import { store } from './App/Store.jsx'

//toast 
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='bottom-right' />
  </Provider>,
)
