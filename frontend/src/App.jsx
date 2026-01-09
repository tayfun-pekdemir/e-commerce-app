import './App.css'
import { Switch, Route } from 'react-router-dom'
import Footer from './layout/Footer'
import Header from './layout/Header'
import PageContent from './layout/PageContent'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <>
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/products/:id" component={ProductDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </PageContent>
      <Footer />
    </>
  )
}

export default App
