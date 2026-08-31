
import CheckoutForm from './components/CheckoutForm'
import Navbar from './components/Navebar'
import ProductList from './components/ProductList'
import NotificationToast from './components/NotificationToast'
import './App.css'

function App() {

  return (
  <>
    <Navbar/>
    <ProductList/>
    <NotificationToast/>
    <CheckoutForm/>
  </>
  )
}

export default App;
