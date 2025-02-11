import '../styles/globals.css'
import { store } from './store'
import { Provider } from 'react-redux'
import {Header}  from './components/header/page'
function MyApp({ Component, pageProps }) {
  return (
  
  <Provider store={store}>
  
     <Component {...pageProps} />
  </Provider>
    
  
  )

}

export default MyApp
